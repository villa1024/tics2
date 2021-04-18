/*
    Vecinos
    /api/vecino
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { crearVecino } = require('../controllers/vecino');

router.use(validarJWT);
router.post('/crearVecino', crearVecino);

module.exports = router;