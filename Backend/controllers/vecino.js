require('dotenv').config();
const { response } = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const { dbConecction } = require('../database/config');

const crearVecino = async (req, res = response) => {
    const { id_veci, direccion, numero, nom_numero, numero0, nom_numero0 } = req.body;
    try {
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: process.env.DATABASEPASSWORD,
            database: process.env.DATABASE,
            port: process.env.DATABASEPORT
        });
        // Verificar que el vecino no exista
        const validarid = await pool.query('SELECT id_veci FROM vecino WHERE vecino.id_veci = ($1)', [id_veci]);
        if (!validarid.rowCount) {
            const salt = bcrypt.genSaltSync();
            const passwordHash = bcrypt.hashSync('12345', salt);
            await pool.query('INSERT INTO vecino (id_veci, direccion, pass_veci) VALUES ($1, $2, $3)', [id_veci, direccion, passwordHash]);
            await pool.query('INSERT INTO contacto (id_veci, numero, nom_numero, numero0, nom_numero0) VALUES ($1, $2, $3, $4, $5)', [id_veci, numero, nom_numero, numero0, nom_numero0]);
            return res.status(201).json({
                ok: true,
                msg: 'registro exitoso',
            });
        }
        return res.status(400).json({
            ok: true,
            msg: 'El vecino ya existe',
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
};


const getallvecinos = async (req, res = response) => {
    try {
        const client = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: process.env.DATABASEPASSWORD,
            database: process.env.DATABASE,
            port: process.env.DATABASEPORT
        });
        const query = 'SELECT vecino.id_veci, direccion, numero, nom_numero, numero0, nom_numero0 FROM vecino, contacto WHERE vecino.id_veci = contacto.id_veci';
        const data = await client.query(query)
            .then(res => {
                const rows = res.rows;
                return rows;
            })
            .catch(err => {
                console.log(err);
            });
        return res.status(200).json({
            ok: true,
            data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
};


module.exports = {
    crearVecino,
    getallvecinos
};