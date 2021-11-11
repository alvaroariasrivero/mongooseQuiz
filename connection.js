///////////////////////////////////Este js es para conectar con la base de datos///////////////////////

const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/BDQuiz";

mongoose.connect(url);

mongoose.connection.on("error", function(e){console.error(e);});

mongoose.connect(url, function(err){
    if(err) throw err;
    console.log("Conexión correcta");
});
// mongoose.disconnect();