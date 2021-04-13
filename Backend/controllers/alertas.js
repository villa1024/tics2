require('dotenv').config();
const { response } = require('express');
const { Pool } = require('pg');
const { dbConecction } = require('../database/config');

const creaAlerta = async (req, res = response) => {
    const {id_veci,id_guard,id_fecha} = req.body;
    const pool = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'josepe321',
        database: 'scchile',
        port: 5432
    });
    const query = `INSERT INTO alarma (id_veci,id_guard,id_fecha) VALUES ($1, $2, $3)`;
    const response = await pool.query(query, [id_veci,id_guard,id_fecha ]);
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
    const response = await pool.query('select * from alarma;', (err, rows, fields) =>{
        res.json(rows.rows);
    });
};

module.exports = {
    creaAlerta,
    getAlertas
};