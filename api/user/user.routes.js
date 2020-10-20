const express = require('express');

const { getAllUsersData, getUserByEmail } = require('./user.controller');
const router = express.Router();

router.get("/", getAllUsersData);
router.post("/", getUserByEmail);

module.exports = router;
