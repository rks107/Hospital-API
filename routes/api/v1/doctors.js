const express = require('express');
const router = express.Router();
const doctorApi = require('../../../controllers/api/v1/doctors_api');
router.get('/registration', doctorApi.registration);

module.exports = router;