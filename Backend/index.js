const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

// CORS
app.use(cors());

// Directorio publico
app.use(express.static('public'));

// Parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/alert', require('./routes/alertas'));

app.get('/',(req,res) => {
    res.send('Hola, si funciono :3');
});
app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto ${3000}`);
});