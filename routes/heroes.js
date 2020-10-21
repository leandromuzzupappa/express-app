const express = require('express');
const router = express.Router();

const HeroesControllers = require('../controllers/heroesController');

router.get('/heroes', HeroesControllers.heroes);
router.get('/heroes/detalle/:id', HeroesControllers.heroeDetalle);
router.get('/heroes/bio/:id/:ok?', HeroesControllers.heroeResenia);


module.exports = router;