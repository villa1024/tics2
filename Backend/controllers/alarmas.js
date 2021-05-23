require('dotenv').config();
const { response } = require('express');
const { Pool } = require('pg');

const crearAlarma = async (req, res = response) => {
    // Creamos la conexion a la BDD
    const pool = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: process.env.DATABASEPASSWORD,
        database: process.env.DATABASE,
        port: process.env.DATABASEPORT
    });
    // EXTRAER ID DEL TOKEN PARA EVITAR FALSIFICACION DE DATOS
    const { id } = req;
    const datos = await pool.query('SELECT * FROM vecino WHERE id_veci = ($1)', [id]);
    const { id_veci, direccion, name_contact, numb_contact, name_contact2, numb_contact2 } = datos.rows[0];
    // Creamos una nueva alarma con los datos del vecino
    await pool.query('INSERT INTO alarma (id_veci, fecha, estado) VALUES ($1, $2, $3)', [id_veci, 'miercoles', 'activa']);
    return res.status(201).json({
        ok: true,
        id,
        msg: 'alarma',
    });
};

const getAlarmas = async (req, res = response) => {
    const pool = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'tics2',
        database: 'scchile',
        port: 5432
    });
    await pool.query('SELECT * FROM alarma', (err, rows, fields) => {
        res.json(rows.rows);
    });
};

const getCurrentAlertas = async (req, res = response) => {
    const pool = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'tics2',
        database: 'scchile',
        port: 5432
    });
    await pool.query('SELECT id_alarm, direccion, nom_numero, numero, nom_numero0, numero0 FROM alarma, vecino, momento, contacto WHERE ((vecino.id_veci = contacto.id_veci) and (alarma.id_veci = vecino.id_veci) and (momento.id_fecha = alarma.id_fecha) and (momento.fecha_end is null));', (err, rows, fields) => {
        res.json(rows.rows);
    });
};

module.exports = {
    crearAlarma,
    getAlarmas,
    getCurrentAlertas
};