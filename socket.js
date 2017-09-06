var express = require('express');
var app=express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/www'));

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on("disconnect", function() {
        console.log("a user go out");
    });

    socket.on("message", function(obj) {
        io.emit("message", obj);
    });
    socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});