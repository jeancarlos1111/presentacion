var socket = io.connect('https://presentacion.herokuapp.com/', { 'forceNew': true });
/*
socket.on('messages', function(data) {
  console.log(data);
  render(data);
})

function render (data) {
  var html = data.map(function(elem, index) {
    return(`<div>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
            </div>`);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };

  socket.emit('new-message', message);
  return false;
}
*/
//Funcion para crear fullscrren
$(document).ready(function(){
    $('body').fullscreen();
    showNotification();
});

function showNotification() {
			if(window.Notification) {
				Notification.requestPermission(function(status) {
					console.log('Status: ', status);
					var n = new Notification('Bienvenido', { body: 'Por favor Pulse la tecla F11 para entrar en modo pantalla completa!', icon:'img/icono-alcaldia-128x128.png' });
				});
			}
			else {
				alert('Your browser doesn\'t support notifications.');
			}
		}

socket.on('addimage', function(msg, base64image){
  //$("body").html("<img id='full-screen-background-image' src='"+base64image+"' />");
  //$("#full-screen-background-image").css({'z-index': '-999', 'width': '100%', 'height': '100%', 'position': 'fixed', 'top': '0', 'left': '0'});
  $("#carusel").html('<li><img id="img" src="'+base64image+'" width="800" height="400" alt=""></li>');
  //$("body#carusel#img").css("visibility","hidden");


});
