require('dotenv').config();
const { response } = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {
    // Extraemos datos
    const { id, tipo, nombre, password } = req.body; // Tambien debe venir el ID del administrador
    try {
        // Creamos la conexion
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: 'tics2',
            database: 'scchile',
            port: 5432
        });
        // Validar que no exista
        const validarid = await pool.query('SELECT id_guard FROM usuario_guardia WHERE usuario_guardia.id_guard = ($1)', [id]);
        if (!validarid.rowCount) { // no existe
            // Encriptar password
            const salt = bcrypt.genSaltSync();
            const passwordHash = bcrypt.hashSync(password, salt);
            // Guardar usuario
            await pool.query('INSERT INTO usuario_guardia (id_guard, tipo, nom_guard, pass_guard) VALUES ($1, $2, $3, $4)', [id, tipo, nombre, passwordHash]);
            // Generar JWT VERIFICAR LINEA INFERIOR PARA MODIFICACIÓN DE QUERY
            const token = await generarJWT(id);
            return res.status(201).json({
                ok: true,
                msg: 'registro exitoso',
                id,
                token
            });
        }
        return res.status(400).json({
            ok: true,
            msg: 'El id ya existe',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
};

const loginUsuario = async (req, res = response) => {
    const { id, password } = req.body;
    try {
        // Creamos la conexion a la BDD
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: 'josepe321',
            database: 'scchile',
            port: 5432
        });
        // Validar que el ID exista
        const validarid = await pool.query('SELECT id_guard FROM usuario_guardia WHERE usuario_guardia.id_guard = ($1)', [id]);
        if (!validarid.rowCount) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña incorrectos'
            });
        }
        // Confirmamos las contraseñas
        const passwordHash = await pool.query('SELECT pass_guard FROM usuario_guardia WHERE usuario_guardia.id_guard = ($1)', [id]);
        if (passwordHash.rowCount) { // se encontro el passwordHash
            const validarPassword = bcrypt.compareSync(password, passwordHash.rows[0].pass_guard);
            if (!validarPassword) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Usuario o contrseña incorrectos'
                });
            }
        }
        // Generar JWT
        const token = await generarJWT(id);
        return res.status(200).json({
            ok: true,
            id,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
};

const revalidarToken = async (req, res = response) => {
    const { id } = req;
    // Generar JWT
    const token = await generarJWT(id);
    return res.json({
        ok: true,
        id,
        token
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};