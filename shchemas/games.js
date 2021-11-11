//////////////////Conecto con mongoose/////////////////////////////////////

const mongoose = require('mongoose');

////////////////Creo esquema de partidas y luego lo exporto//////////////////////////////

const partidaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id_jugador: {type: mongoose.Schema.ObjectId, ref: 'Player'},
    fecha: Date,
    puntuacion: Number,
    preguntas: {
        acertadas: Array,
        falladas: Array
    }
});

module.exports = mongoose.model('Game', partidaSchema);