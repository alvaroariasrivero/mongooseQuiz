const mongoose = require('mongoose')

/////////////////////////////Creo esquema de jugador y luego lo exporto//////////////////////

const jugadorSchema = new mongoose.Schema( {
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    email: {
        type: String,
        match: [/.+\@.+\..+/, 'Por favor ingrese un correo válido']
    },
    password:{
        type: String,
        validate:{
            validator: function(pass){
                return (pass.length >= 6);
            },
            message: 'La contraseña debe contener al menos 6 caracteres'
        }
    }, 
    partidas: Number 
});

module.exports = mongoose.model('Player', jugadorSchema);