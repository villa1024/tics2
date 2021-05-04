require('dotenv').config();
const { response } = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const crearVecino = async (req, res = response) => {
    const { id_veci, direccion, numero, nom_numero, numero0, nom_numero0 } = req.body;
    try {
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: 'tics2',
            database: 'scchile',
            port: 5432
        });
        // Verificar que el vecino no exista
        const validarid = await pool.query('SELECT id_veci FROM usuario_vecino WHERE id_veci = ($1)', [id_veci]);
        if (!validarid.rowCount) {
            const salt = bcrypt.genSaltSync();
            const passwordHash = bcrypt.hashSync('12345', salt);
            await pool.query('INSERT INTO usuario_vecino (id_veci, direccion, pass_veci, numero, nom_numero, numero0, nom_numero0) VALUES ($1, $2, $3, $4, $5, $6, $7)', [id_veci, direccion, passwordHash, numero, nom_numero, numero0, nom_numero0]);
            // await pool.query('INSERT INTO contacto (id_veci, numero, nom_numero, numero0, nom_numero0) VALUES ($1, $2, $3, $4, $5)', [id_veci, numero, nom_numero, numero0, nom_numero0]);
            return res.status(201).json({
                ok: true,
                msg: 'Registro de vecino exitoso',
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

const actualizarVecino = async (req, res = response) => {
    const { id_veci, direccion, numero, nom_numero, numero0, nom_numero0 } = req.body;
    try {
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: 'tics2',
            database: 'scchile',
            port: 5432
        });
        const query = `UPDATE usuario_vecino SET direccion = $1, numero = $2, nom_numero = $3, numero0 = $4, nom_numero0 = $5 WHERE id_veci = $6`;
        const values = [direccion, numero, nom_numero, numero0, nom_numero0, id_veci];
        const data = await pool.query(query, values)
            .then(resp => {
                return resp;
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

const getallvecinos = async (req, res = response) => {
    try {
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: 'tics2',
            database: 'scchile',
            port: 5432
        });
        const query = 'SELECT id_veci, direccion, numero, nom_numero, numero0, nom_numero0 FROM usuario_vecino';
        const data = await pool.query(query)
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

const deleteVecino = async (req, res = response) => {
    const { id_veci } = req.params;
    console.log(id_veci)
    try {
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: 'tics2',
            database: 'scchile',
            port: 5432
        });
        if (req.id == 'G010') {
            const query1 = 'DELETE FROM usuario_vecino WHERE id_veci = ($1)';
            const { rowCount } = await pool.query(query1, [id_veci])
                .then(resp => {
                    return resp;
                })
                .catch(err => {
                    console.log(err);
                });
            if (!rowCount) {
                return res.status(401).json({
                    ok: true,
                    msg: 'El vecino no existe...'
                });
            }
            return res.status(200).json({
                ok: true,
                msg: 'Vecino eliminado exitosamente...'
            });
        }
        else {
            return res.status(400).json({
                ok: false,
                msg: 'No tiene privilegios'
            })
        }
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
    getallvecinos,
    actualizarVecino,
    deleteVecino
};