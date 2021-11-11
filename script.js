//////////////////Conecto con connection para conectar con BD////////////////////////////
require('./connection');

/////////////////////////////Aquí voy llamando a las funciones////////////////////////////////
const {creaJugador, nuevaPartida} = require('./crud/create')
nuevaPartida();