////////////Primero conexión/////////////////////////
require('../connection');

const mongoose = require('mongoose');
const Jugador = require('../shchemas/player');

function eliminarJugador(){
    Jugador.find({
        partidas: 0 
    }).exec(async function(err, player){
        if(err) throw err;
        for(let i = 0; i < player.length; i++){
            await player[i].remove(function(err){
                if(err) throw err;
                console.log("Jugador eliminado");
            });
        }
        mongoose.disconnect();
    });
};

module.exports = eliminarJugador;
// User.findById('6188559ab4294928976e8aab', function(err, user){
//     if (err) throw err;
//     user.remove(function(err){
//         if (err) throw err;
//         console.log("Borrado correcto");
//         mongoose.disconnect();
//     }); 
// });
