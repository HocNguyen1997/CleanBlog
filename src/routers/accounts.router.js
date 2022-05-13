const express = require('express')
const router = express.Router();
const Controller = require('../controller/accounts.controller');
const access = require('../middleware/auth.middleware');

router.post('/login', Controller.login);
router.post('/register',access, Controller.register);

module.exports = router;