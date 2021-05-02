/*
    Vecinos
    /api/vecino
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { crearVecino, getallvecinos } = require('../controllers/vecino');

router.use(validarJWT);

router.get('/getallvecinos', getallvecinos);

router.post('/crearVecino',
    [
        validarCampos
    ],
     crearVecino
);

module.exports = router;