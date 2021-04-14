require('dotenv').config();
const { response } = require('express');
const { Pool } = require('pg');
const { dbConecction } = require('../database/config');

const creaAlerta = async (req, res = response) => {
    const {id_veci,id_guard, fecha_init} = req.body;
    const pool = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'josepe321',
        database: 'scchile',
        port: 5432
    });
    const query0 = 'INSERT INTO momento (fecha_init) VALUES ($1)';
    const query = 'INSERT INTO alarma (id_veci,id_guard,id_fecha) VALUES ($1, $2, $3)';
    const response = await pool.query(query0, [fecha_init]);
    const fechaident = await pool.query('SELECT id_fecha FROM momento WHERE momento.fecha_init = ($1)', fecha_init)
    const response = await pool.query(query, [id_veci,id_guard,fechaident ]);
    res.status(201).json({
        ok: true,
        msg: 'alarma',
    });
};


const getAlertas = async (req, res = response) => {
    const pool = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'josepe321',
        database: 'scchile',
        port: 5432
    });
    const response = await pool.query('select * from alarma', (err, rows, fields) =>{
        res.json(rows.rows);
    });
};


const getCurrentAlertas = async (req, res = response) => {
    const pool = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'josepe321',
        database: 'scchile',
        port: 5432
    });
    const response = await pool.query('select id_alarm, direccion from alarma, vecino, momento where vecino.id_veci = alarma.id_veci and alarma.id_fecha = momento.id_fecha and momento.fecha_end is null', (err, rows, fields) =>{
        res.json(rows.rows);
    });
};

module.exports = {
    creaAlerta,
    getAlertas,
    getCurrentAlertas
};