/*
    Vecinos
    /api/vecino
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { crearVecino, getallvecinos, deleteVecino, actualizarVecino } = require('../controllers/vecino');

router.use(validarJWT);

router.get('/getallvecinos', getallvecinos);

router.post('/crearVecino',
    [
        validarCampos
    ],
     crearVecino
);

router.delete('/deleteVecino/:id_veci', deleteVecino);

router.put('/actualizarVecino', actualizarVecino);

module.exports = router;