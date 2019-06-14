const express = require('express');
const app = express(); // express 설정
const port = process.env.port || 3001; // 포트 설정
const path = require('path'); // <== path 추가

// 서버 실행시 포트 번호 확인
app.listen(port, () => 
    console.log(`Listenig on port ${port}`));

// 추가
if(process.env.NODE_ENV === "production") { // prod 모드일때
    // 정적파일을 불러오기위한 폴더 지정
    app.use(express.static(path.join(__dirname, 'client/build')));
} else if (process.env.NODE_ENV === "development") { // dev 모드일때
    console.log("Development Mode");
}

// ...:port/Hello에 접속 시 Hello World! 실행!
app.get("/Hello", (req, res) => {
    res.send("Hello World!");
});

app.get("/", (req, res) => { // client/build/index.html 을 불러옴
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
});


