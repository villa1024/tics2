require('dotenv').config();
const { response } = require('express');
const { Pool } = require('pg');

const crearVecino = async (req, res = response) => {
    const { dir, numdir, nombre1, tel1, id } = req.body; // ID ADMINISTRADOR + datos a ingresar
    try{
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: process.env.DATABASEPASSWORD,
            database: process.env.DATABASE,
            port: process.env.PORT
        });
        // Verificar que el token contenga el ID de un administrador
        const validarid = await pool.query('SELECT id_veci FROM vecino WHERE vecino.id_veci = ($1)',[id]);    
        if(!validarid.rowCount){

            const salt = bcrypt.genSaltSync();
            const passwordHash = bcrypt.hashSync(123456, salt);
            await pool.query('INSERT INTO vecino (id_veci, direccion, pass_veci) VALUES ($1, $2, $3)',[id, dir, passwordHash]);
            await pool.query('INSERT INTO contacto (id_veci, numero, nom_numero) VALUES ($1, $2, $3)',[id, tel1, nombre1]);
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

module.exports = {
    crearVecino
};