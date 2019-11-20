const express = require('express');
const router = express.Router();
const venteController = require('../controllers/venteController');

router.get('/', venteController.index);

module.exports = router;