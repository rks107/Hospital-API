const express = require('express');
const router = express.Router();

router.use('/doctors', require('./doctors'));

module.exports = router;