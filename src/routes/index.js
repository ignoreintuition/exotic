const express = require('express');
const { species, pets } = require('../controllers');

const router = express.Router();
router.get('/species', species.getSpecies )
router.get('/pets', pets.getPets )
module.exports = router
