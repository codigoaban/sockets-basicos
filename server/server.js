//cargando la libreria de express
const express = require('express');

//Necesario para los sockets
const socketIO = require('socket.io');
const http = require('http'); // este modulo trae por defecto node

//libreria del path
const path = require('path');

//inicializando el express
const app = express();

//montar el server
let server = http.createServer(app);


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

//Middleware para habilitar la carpeta publica
app.use(express.static(publicPath));

//IO(input/output)=> esta es la comunicacion del backend
//let io = socketIO(server);
module.exports.io = socketIO(server); //para poder usar en socket.js, esta exportando el objeto io


//llamar a socket.js
require('./sockets/socket');



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});