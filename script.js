//////////////////Conecto con connection para conectar con BD////////////////////////////
require('./connection');

/////////////////////////////Aquí voy llamando a las funciones////////////////////////////////
const {creaJugador, nuevaPartida} = require('./crud/create')
const eliminarJugador = require('./crud/delete')
// creaJugador();
// nuevaPartida();
eliminarJugador();