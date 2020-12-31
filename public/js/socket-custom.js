 //ON=escuchar
 var socket = io();
 socket.on('connect', function() {
     console.log('Conectado al servidor');
 });

 socket.on('disconnect', function() {
     console.log('Perdimos conexion con el servidor');
 })

 //emit=Enviar o emitir informacion
 //El primero es el nombre del mensaje(enviarMensaje), segundo el objeto, tercero es una function se ejecuta cuando salga todo bien
 socket.emit('enviarMensaje', {
     usuario: 'Gladys',
     mensaje: 'Hola Mundo'
 }, function(resp) {
     console.log('Respuesta server', resp);
 });

 //escuchar mensaje
 //se coloca function, porque recibimos una funcion
 socket.on('enviarMensaje', function(mensaje) {
     console.log('Servidor', mensaje);
 })