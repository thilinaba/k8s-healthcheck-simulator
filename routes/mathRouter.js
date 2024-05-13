const express = require('express');
const router = express.Router();

const mathServiceController = require('../controllers/mathServiceController');

router.get('/sqrt/:num', mathServiceController.getSqrt);

module.exports = router;