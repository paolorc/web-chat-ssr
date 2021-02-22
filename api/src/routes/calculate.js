const express = require('express');
const router = express.Router();
const { calculatePrimesNumbers } = require('../controllers/calculate');

router.get('/primes-numbers/:number', calculatePrimesNumbers);

module.exports = router;
