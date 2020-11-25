const express = require('express');

const { donor, } = require('./user.controller');
const router = express.Router();

router.post("/", donor);

module.exports = router;
 