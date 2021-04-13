/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

const { creaAlerta , getAlertas } = require('../controllers/alertas');

router.post('/newAlerta', creaAlerta);
router.get('/getAlertas', getAlertas);

module.exports = router;


