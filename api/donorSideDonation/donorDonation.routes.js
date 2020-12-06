const express = require('express');

const { donor } = require('./donorDonation.controller');
const router = express.Router();

router.post("/", donor);

module.exports = router;
 