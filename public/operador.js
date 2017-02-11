var socket = io.connect('http://localhost:8080', { 'forceNew': true });

$(document).ready(function(){
  /*$("#imagefile").on('change', function(e){
    var file = e.originalEvent.target.files[0];
    var reader = new FileReader();
    reader.onload = function(evt){
      socket.emit('user image', evt.target.result);
    };
    reader.readAsDataURL(file);
  }); */

  $(".uk-thumbnail").on("click", function(){
    $(this).attr('src')
    socket.emit('user image', $(this).attr('src'));
  });
});

//mostrara la cantidad de conexiones
socket.on('conexiones', function(conexion){
  $("#conexiones").html(conexion.conexion);
});

socket.on('conectados', function(conectado){
  $("#conetados").html(conectado.conectado);
});
