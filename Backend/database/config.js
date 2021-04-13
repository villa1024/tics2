require('dotenv').config();
const { Pool } = require('pg');

const dbConecction = async () => {
    try {
        const pool = new Pool({
            host: 'localhost',
            user: 'postgres',
            password: 'josepe321',
            database: 'scchile',
            port: 5432
        });
        return pool;
    } catch (error) {
        console.log(error);
        throw new Error('Error en la bd');
    }
};

module.exports = {
    dbConecction
};