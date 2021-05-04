const { Router } = require('express');
const { getAllSoliEscolta } = require('../controllers/escoltas');
const router = Router();

router.get('/getAllSoliEscolta', getAllSoliEscolta);


module.exports = router;