const express = require('express'); // Controle de rotas
const bodyParser = require('body-parser'); // para poder receber parametros JSON
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var porta = process.env.PORT || 3000;

/*app.use(express.static(path.join(__dirname, 'public')));*/

/*Liberando problema com o cors*/
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
/*
app.use(function(req,res){
    res.header("Access-Control-Allow-Origin","*");
});//resolve o problema do CORS mas o insominia para de funcionar*/


require('./app/controler/index')(app);


app.listen(porta);