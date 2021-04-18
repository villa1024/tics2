/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidadToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post('/new',
    [ // middlewares
        check('id', 'Su id es obligatorio').not().isEmpty(),
        check('tipo', 'El tipo de guardia es obligatorio').not().isEmpty(),
        check('nombre', 'Su nombre es obligatorio').not().not().isEmpty(),
        check('password', 'Su contraseña debe tener minimo 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario
);

router.post('/',
    [ // middlewares
        check('id', 'El id es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        validarCampos
    ],
    loginUsuario
);

router.get('/renew', validarJWT, revalidadToken);

module.exports = router;