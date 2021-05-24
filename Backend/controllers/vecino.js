require('dotenv').config();
const { response } = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const crearVecino = async (req, res = response) => {
    const { id_veci, direccion, name_contact, numb_contact, name_contact2, numb_contact2 } = req.body;
    try {
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
        password: 'admin',
        database: 'scchile',
        port: 5432
        });
        // Verificar que el vecino no exista
        const validarid = await pool.query('SELECT id_veci FROM usuario_vecino WHERE id_veci = ($1)', [id_veci]);
        if (!validarid.rowCount) { // No existe, lo guardamos
            const salt = bcrypt.genSaltSync();
            const passwordHash = bcrypt.hashSync('12345', salt);
            await pool.query('INSERT INTO vecino (id_veci, direccion, name_contact, numb_contact, name_contact2, numb_contact2, estado) VALUES ($1, $2, $3, $4, $5, $6, $7)', [id_veci, direccion, name_contact, numb_contact, name_contact2, numb_contact2, 'activo']);
            await pool.query('INSERT INTO usuario_vecino (id_veci, pass_veci) VALUES ($1, $2)', [id_veci, passwordHash]);
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
    const { id_veci, direccion, name_contact, numb_contact, name_contact2, numb_contact2 } = req.body;
    try {
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
        password: 'admin',
        database: 'scchile',
        port: 5432
        });
        // Extraemos ID del guardia para comprobar si tiene privilegios de admin o no
        const { id } = req;
        const verificarAdmin = await pool.query('SELECT tipo FROM guardia WHERE id_guard = ($1)', [id]);
        if (verificarAdmin.rows[0].tipo === 'admin') {
            const query = `UPDATE vecino SET direccion = $1, name_contact = $2, numb_contact = $3, name_contact2 = $4, numb_contact2 = $5 WHERE id_veci = $6`;
            const values = [direccion, name_contact, numb_contact, name_contact2, numb_contact2, id_veci];
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
        }
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
        password: 'admin',
        database: 'scchile',
        port: 5432
        });
        const data = await pool.query('SELECT id_veci, direccion, name_contact, numb_contact, name_contact2, numb_contact2 FROM vecino WHERE estado = ($1)', ['activo']);
        console.log(data.rows);
        return res.status(200).json({
            ok: true,
            data: data.rows
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
    try {
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
        password: 'admin',
        database: 'scchile',
        port: 5432
        });
        // Extraemos ID del guardia para comprobar si tiene privilegios de admin o no
        const { id } = req;
        const verificarAdmin = await pool.query('SELECT tipo FROM guardia WHERE id_guard = ($1)', [id]);
        if (verificarAdmin.rows[0].tipo !== 'admin') {
            return res.status(400).json({
                ok: false,
                msg: 'No tiene privilegios'
            });
        }
        await pool.query('DELETE FROM usuario_vecino WHERE id_veci = ($1)', [id_veci]);
        await pool.query(`UPDATE vecino SET estado = ($1) WHERE id_veci = ($2)`, ['inactivo', id_veci]);
        
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