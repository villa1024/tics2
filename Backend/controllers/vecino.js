require('dotenv').config();
const { response } = require('express');
const { Pool } = require('pg');

const crearVecino = async (req, res = response) => {
    // const { id, nombre, numero, nombre_numero } = req.body; // ID ADMINISTRADOR + datos a ingresar
    // const pool = new Pool({
    //     host: 'localhost',
    //     user: 'postgres',
    //     password: process.env.DATABASEPASSWORD,
    //     database: process.env.DATABASE,
    //     port: process.env.PORT
    // });
    // // Verificar que el token contenga el ID de un administrador

    // const query = 'INSERT INTO vecino (nombre, numero, nombre_numero) VALUES ($1, $2, $3)';
    return res.status(200).json({
        ok: true,
        msg: 'vecino creado'
    });
};

module.exports = {
    crearVecino
};