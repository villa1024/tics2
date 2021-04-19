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

router.post('/crearVecino',
    [
        check('id', 'El id es obligatorio').not().isEmpty(),
        check('dir', 'La direccion es obligatoria').not().isEmpty(),
        check('numdir', 'La direccion es obligatoria').not().isEmpty(),
        check('nombre1', 'La direccion es obligatoria').not().isEmpty(),
        check('tel1', 'La direccion es obligatoria').not().isEmpty().isLength({min: 12}),
        validarCampos
    ],
     crearVecino
);

module.exports = router;