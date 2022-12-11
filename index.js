const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const conectarDB = require("./database");

const app = express();

//conectar a la base de datos
conectarDB;

// Settings
app.set('port', config.app.port);


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

  
// Routes

app.use('/api/usuarios', require('./routes/usuarios.routes.js'));
/*app.use('/api/auth', require('./routes/auth.routes.js'));*/
app.use('/api/deportes', require('./routes/deportes.routes.js'));
app.use('/api/equipos', require('./routes/equipos.routes.js'));
app.use('/api/eventos', require('./routes/eventos.routes.js'));


// Starting the server
app.listen(app.get('port'), ()=> {
    console.log(`Servidor iniciado del puerto ${app.get('port')}`)
})