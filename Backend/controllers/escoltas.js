require('dotenv').config();
const { response } = require('express');

const { dbConecction } = require('../database/config');

const getAllSoliEscolta = async (req, res = response) => {
    try {
        // Creamos la conexion a la BDD
        const pool = await dbConecction();
        //modificar query para escoltas.
        const query = 'SELECT * from escolta join guardia on escolta.id_guard=guardia.id_guard;';
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


module.exports = {
    getAllSoliEscolta
};