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
app.use('/api/vecino', require('./routes/vecino'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});