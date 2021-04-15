const express = require('express');
const { species, pets, users } = require('../controllers');

const router = express.Router();

router.get('/species', species.getSpecies )
router.get('/pets', pets.getPets )
router.get('/users', users.getUsers)
router.post('/users', users.postUsers)

module.exports = router
