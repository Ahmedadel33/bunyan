const autuhController = require('../controller/auth.controller');
const express = require('express');
const router = express.Router();

router.post('/signup', autuhController.register);
router.post('/signin', autuhController.login);
module.exports = router;
