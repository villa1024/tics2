/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


router.use(validarJWT);

const { crearAlarma } = require('../controllers/alarmas');

router.post('/crearAlarma', crearAlarma);

module.exports = router;