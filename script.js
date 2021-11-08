const mongoose = require("mongoose");
const { getMaxListeners } = require("process");
const url = "mongodb://localhost:27017/BDQuiz";
mongoose.connect(url);

mongoose.connection.on("error", function(e){console.error(e);});

mongoose.connect(url, function(err){
    if(err) throw err;
    console.log("Conexión correcta");
});
// mongoose.disconnect();

const objectSchemaUsuarios = {
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    email: {
        type: String,
        match: [/.+\@.+\..+/, 'Por favor ingrese un correo válido']
        // validate:{
        //     validator: function(mail){
        //         return mail.includes('@') == true && mail.includes('.') == true;
        //     },
        //     message: 'Dirección email no válida'
        // }
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
};
const playerSchema = mongoose.Schema(objectSchemaUsuarios);

const Player = mongoose.model('Player', playerSchema);
const carlos = {
    _id: new mongoose.Types.ObjectId(),
    nombre: "Carlos María Isidro",
    email: 'carlos@gmail.com',
    password: 'caraculo',
    partidas: 8
};

let playerCarlos = new Player (carlos);

playerCarlos.save(function(err){
    if(err) throw err;
    console.log("Lo conseguimos meter");
    mongoose.disconnect();
});

const objectSchemaPartidas = {
    _id: mongoose.Schema.Types.ObjectId,
    id_jugador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },
    fecha: Date,
    puntuacion: Number
};
const partidaSchema = mongoose.Schema(objectSchemaPartidas);
const Game = mongoose.model('Game', partidaSchema);
