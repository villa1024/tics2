const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token'
        });
    }
    try {
        const { email } = jwt.verify(token, process.env.SECRET_JWT_FIRMA);
        req.email = email;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        });
    }
    next();
};

module.exports = {
    validarJWT
};