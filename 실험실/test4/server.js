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

// socket 용 user
var user = {
    id: null,
    nickname: null,
    gender: null,
    wishgender: null
};

var users = []; // 모든 유저

var socketRoom = {};

// 클라이언트가 접속했을 때의 이벤트 설정
io.on('connection', (socket) => {
    console.log('사용자 접속:', socket.client.id);
    // 접속한 사용자 확인.
    console.log(socket.client.conn.server.clientsCount);

    // 클라이언트 초기 아이디값 설정 (로딩할때마다 무조건)
    socket.emit('getId', socket.client.id);


    // 클라이언트 정보 서버에 입력
    socket.on('setUser', (data) => {
        user.id = data.id
        user.nickname = data.nickname
        user.gender = data.gender
        user.wishgender = data.wishgender

        users.push(JSON.parse(JSON.stringify(user)));
        console.log(users);
    });
    if(socket.client.conn.server.clientsCount <= 2) {
        io.sockets.adapter.add(socket.id, '바보'); // 방 생성
    } else {
        socket.join('방이름'); // 방 입장
        socket.leave('바보'); // 방 삭제
        io.sockets.adapter.del(socket.id, '바보'); // 방 삭제
    }

    // 룸 입장
    socket.join('room 237', () => {
        let rooms = Object.keys(socket.rooms);
        console.log(rooms);
    });

    console.log(JSON.parse(JSON.stringify(socket.adapter.sids)));
    // console.log(io.sockets.adapter);
    // console.log(io.sockets.adapter.sids);
    // // 채팅 요청 할 시
    // socket.on('requestRandomChat', (data) => {
    //     // 빈방이 있는지 확인
    //     console.log('requestRandomChat');
    //     var rooms = io.sockets.manager.rooms;
    //     for (var key in rooms) {
    //         if(key == '') {
    //             continue;
    //         }
    //         // 혼자있으면 입장
    //         if(rooms[key].length == 1){
    //             var roomKey = key.replace('/','');
    //             socket.join(roomKey);
    //             io.sockets.in(roomKey).emit('completeMatch', {});
    //             socketRoom[socket.id] = roomKey;
    //             return;
    //         }
    //     }
    //     // 빈방이 없으면 혼자 방만들고 기다림
    //     socket.join(socket.id);
    //     socketRoom[socket.id] = socket.id;
    // });

    // // 요청 취소 시
    // socket.on('cancelRequest', (data) => {
    //     socket.leave(socketRoom[socket.id]);
    // });

    // // client -> server Message 전송
    // socket.on('sendMessage', (data) => {
    //     console.log('sendMessage!');
    //     io.sockets.in(socketRoom[socket.id]).emit('receiveMessage', data);
    // });

    // //disconnect
    // socket.on('disconnect', (data) => {
    //     var key = socketRoom[socket.id];
    //     socket.leave(key);
    //     io.sockets.in(key).emit('disconnect');
    //     var clients = io.sockets.clients(key);
    //     for (var i = 0; i < clients.length; i++) {
    //         clients[i].leave(key);
    //     }
    // })



    // if(io.nsps['/'].adapter.rooms["room-"+roomNo] &&
    //     io.nsps['/'].adapter.rooms["room-"+roomNo].length > 1){
    //         roomNo++;
    //         console.log(roomNo);
    //     }
    //     socket.join("room-"+roomNo);
    //     console.log(roomNo);

    //     io.sockets.in("room-"+roomNo).emit('connectToRoom', "현재 방번호 : "+roomNo);
    //     io.sockets.in("room-"+roomNo).on('msg', (msg) => {
    //         console.log(roomNo + 'msg :', msg);

    //         io.emit('msg', msg);
    //     })

    // usersId.push(socket.client.id);
    // console.log(usersId);

    // console.log(socket.client.user);

    // MeetText 부분
    socket.on('message', (msg) => {
        console.log('message:', msg);
        
        // 모든 클라이언트에게 전송
        io.emit('message', msg);
    })

    socket.on('disconnect', () => {
        console.log(JSON.parse(JSON.stringify(socket.adapter.sids)));
        // users.splice(users.indexOf(user.id), 1);
        
        // console.log(users);
    })
})


