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
    gender: null
};
var users = [];
var usersId = [];
// 클라이언트가 접속했을 때의 이벤트 설정
io.on('connection', (socket) => {
    console.log('사용자 접속:', socket.client.id);
    console.log(socket.client.conn.server.clientsCount);

    // 클라이언트 초기 아이디값 설정 (로딩할때마다 무조건)
    socket.emit('getId', socket.client.id);


    // 클라이언트 정보 서버에 입력
    socket.on('setUser', function(data){
        user.id = data.id;
        user.nickname = data.nickname;
        user.gender = data.gender;
        // console.log(user);
        // if(users.id === data.id) {
        if(user.id !== socket.client.id) {
            console.log(user.id);
        }
        users = JSON.parse(JSON.stringify(user));
        console.log(users);
    });
    console.log(users);
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
        // users.splice(users.indexOf(user.id), 1);
        
        // console.log(users);
    })
})


