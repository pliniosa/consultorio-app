const mongoose = require('mongoose');
//configuração do mongoose
mongoose.connect('mongodb://localhost/clinicaOdontologica').then(() => {
    console.log("Conectado")
}).catch((err) => {
    console.log("Erro ao conectar ao BangoDB")
});
mongoose.Promise = global.Promise;

module.exports = mongoose;