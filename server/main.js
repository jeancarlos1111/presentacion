var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var conexiones = [];
var conectados = [];
app.use(express.static('public'));

/*app.get('/hello', function(req, res) {
  res.status(200).send("Hello World!");
});*/

app.get('/operador.html', function(req, res) {
  res.sendFile(__dirname+"/"+"operador.html");
});

io.sockets.on('connection', function(socket) {
  conexiones.push(socket);
  conectados.push(socket);
  console.log('Sockets %s conetados', conexiones.length);

  io.sockets.emit('conexiones',{conexion:conexiones.length});
  io.sockets.emit('conectados',{conectado:conectados.length});
  socket.on('disconnect', function(data){
    conectados.splice(conectados.indexOf(socket), 1);
    console.log('Sockets %s desconetados', conectados.length);
    io.sockets.emit('conexiones',{conexion:conexiones.length});
    io.sockets.emit('conectados',{conectado:conectados.length});
  });
  /*socket.emit('messages', messages);

  socket.on('new-message', function(data) {
    messages.push(data);

    io.sockets.emit('messages', messages);
  });*/
  socket.on('user image', function(image){
    io.sockets.emit('addimage', 'Imagen Recibida:', image);
  });
});



server.listen(8080, function() {
  console.log("Servidor corriendo en http://localhost:8080");
});
