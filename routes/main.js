const express = require('express');
const router = express.Router();

const MainControllers = require('../controllers/mainController');


router.get('/', MainControllers.home);
router.get('/creditos', MainControllers.creditos);


module.exports = router;