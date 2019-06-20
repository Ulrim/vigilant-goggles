const express = require('express');
const app = express(); // express 설정
const path = require('path'); // <== path 추가

const port = process.env.port || 8080; // 포트 설정
// 서버 실행시 포트 번호 확인
// server.listen(port, () => 
//     console.log(`Listenig on port ${port}`));

process.env.NODE_ENV = "development";

// 추가
if(process.env.NODE_ENV === "production") { // prod 모드일때
    // 정적파일을 불러오기위한 폴더 지정
    app.use(express.static(path.join(__dirname, 'client/build')));
} else if (process.env.NODE_ENV === "development") { // dev 모드일때
    console.log("Development Mode");
}

// app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/", (req, res) => { // client/build/index.html 을 불러옴
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// 웹 소켓 서버를 실행
const server = require('http').createServer(app);
const socketio = require('socket.io');
const io = socketio.listen(server);

// 서버 실행시 포트 번호 확인
server.listen(port, () => 
    console.log(`Listenig on port ${port}`));

var roomno = 1;
const users = [];
const userss = [];
// 클라이언트가 접속했을 때의 이벤트 설정
io.on('connection', (socket) => {
    const user = socket.client.user = {
        id: socket.client.id,
        name: '정석',
        gender: '남자'
    };

    userss.push(user);

    console.log(userss);

    userss.map(val => {
        if(user !== val) {
            return console.log('여기:' + val);
        }
    })

    console.log('사용자 접속:', socket.client.user.id);

    if(socket.client.id === socket.client.id) {
        console.log()
    }
    users.push(socket.client.id);
    console.log(users);

    // 룸 2번 클라이언트
    if(io.nsps['/'].adapter.rooms["room-"+roomno] && 
        io.nsps['/'].adapter.rooms["room-"+roomno].length > 1)
        roomno++;

        socket.join("room-"+roomno);
        console.log(roomno);

    // 센드 이벤트
    io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. " + roomno);
    // 메시지를 받으면..
    socket.on('message', (msg) => {
        console.log('message:', msg);
        
        // 모든 클라이언트에게 전송
        io.emit('message', msg);
    })

    socket.on('disconnect', () => {
        // 나간 사용자 삭제
        users.splice(users.indexOf(socket.client.id), 1);
        userss.splice(userss.indexOf(user), 1);

        console.log(users);
        console.log(userss);
    })
})

// var roomno = 1;
// const nsp2 = io.of('/my');
// nsp2.on('connection', (socket) => {
//     console.log('여긴 my야!!');
//     socket.emit('hi', '안녕 모두!');
//     socket.broadcast.emit('newclient', socket.id + '님이 입장하셨습니다.');

//     if(io.nsps['/my'].adapter.rooms["room-"+roomno] && 
//         io.nsps['/my'].adapter.rooms["room-"+roomno].length > 1    
//     ) roomno++;

//     socket.join("room-"+roomno);
//     console.log(roomno);

//     socket.in("room-"+roomno).emit('connectToRoom', roomno + "방에 접속했다.");


//     const datas = [];
//     socket.on('setUsername', (data) => {
//         datas.push(data);
//         console.log(datas);

//         socket.emit('getmessages', datas);
//     })
// })
