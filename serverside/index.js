var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var rn = null;
var id = null;

io.on('connection', function (socket) {
  console.log(socket.id + ' user connected');
  socket.on('join room', function (name) {
    var rn = name.room;
    var nrn = rn;
    var id = socket.id;
    console.log(rn);
    console.log(nrn);
      socket.leave(nrn);
      socket.join(rn);
    console.log(rn);
    io.to(rn).emit('room status', { status: rn, id: id });
    socket.on('chat message', function(msg){
      var message = msg.chat;
      io.to(rn).emit('chat message', {chat:message});
    });
  });
  socket.on('chat message', function (msg) {
    var message = msg.chat;
    io.to(rn).emit('chat message', { chat: message });
    console.log(socket.rooms);
  });
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});
