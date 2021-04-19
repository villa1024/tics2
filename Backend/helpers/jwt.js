const jwt = require('jsonwebtoken');

const generarJWT = (id) => {
    return new Promise((resolve, reject) => {
        const payload = { id }
        jwt.sign(payload, process.env.SECRET_JWT_FIRMA, {
            expiresIn: '2h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pude generar el token');
            }
            resolve(token);
        });
    });
};

module.exports = {
    generarJWT
};