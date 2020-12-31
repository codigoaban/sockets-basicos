const { io } = require('../server');



//client obtiene toda la informacion de la pc cliente

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    //Escuchar el cliente, viene del javascript del index.html
    //mensaje: donse esta toda la data, callback la funcion que quiero llamar si todo esta ok
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //broadcast envia a todos los usuarios de la aplicacion

        //client.broadcast.emit('enviarMensaje', data);

        client.broadcast.emit('enviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        });

        /* if (mensaje.usuario) {
            callback1({
                resp: 'TODO SALIO BIEN'
            });
        } else {
            callback1({
                resp: 'TODO SALIO MAL'
            });
        } */

    });



});