////////////Primero conexión/////////////////////////
require('../connection');

const mongoose = require('mongoose');

const Jugador = require('../shchemas/player');
const Partida = require('../shchemas/games');

///////////////////////////Funciones creación///////////////////////////////////////

async function creaJugador(){
    const player = new Jugador({
        _id: new mongoose.Types.ObjectId(),
        nombre: "Antonio Alcántara",
        email: 'mecagoenlalechemerche@gmail.com',
        password: 'toritobravo',
        partidas: 0
    });

    await player.save(function(err){
        if(err) throw err;
        console.log("Lo conseguimos meter");
        mongoose.disconnect();
    });
}

async function nuevaPartida(){
    let partida = new Partida({
        _id: new mongoose.Types.ObjectId(),
        id_jugador: '618d07e52848c382b6d3c0e1',
        fecha: Date.now(),
        puntuacion: 7
    });

        await partida.save(function(err){
            if (err) throw err;
            console.log("Partida guardada");
        suma()
        });
    
}

function suma() {
    Jugador.findById('618d07e52848c382b6d3c0e1', function (err, player) {
        if (err) throw err;
        player.partidas += 1;
        player.save(function (err) {
            if (err) throw err;
            console.log("Actualización correcta");
            mongoose.disconnect();
        });
    });
}

//////////////////////////////Exporto las funciones en módulos///////////////////////////////////

module.exports={
    creaJugador: creaJugador,
    nuevaPartida: nuevaPartida
}

/////////////////////////////Para probar estas funciones, en vez de npm start hago node (nombre de la ruta)//