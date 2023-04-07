const express = require('express');
const router = express.Router();

const { reisterUser, registerUser } = require('../controllers/userContoller');

router.post('/register', registerUser);

module.exports = router;
