const express = require('express');

const { singUp,singIn } = require('./user.controller');
const router = express.Router();

router.post("/signup", singUp);
router.post("/signin", singIn);

module.exports = router;
