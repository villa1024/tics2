require('dotenv').config();
const { response } = require('express');
const { Pool } = require('pg');

const crearUsuario = async (req, res = response) => {
    const { nombre, email, password } = req.body;
    const pool = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: process.env.DATABASEPASSWORD,
        database: process.env.DATABASE,
        port: process.env.DATABASEPORT
    });
    const response = await pool.query('INSERT INTO usuarios (nombre, email, password) VALUES ($1, $2, $3)', [nombre, email, password]);
    console.log(response);
    res.status(201).json({
        ok: true,
        msg: 'registro',
        nombre,
        email,
        password
    });
};

const loginUsuario = (req, res = response) => {
    const { email, password } = req.body;
    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    });
};

const revalidadToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidadToken
};