const express = require('express')
const router = express.Router();
const UserController = require('../controller/user.controller');
const access = require('../middleware/auth.middleware');

router.post('/login', UserController.login);
router.post('/register',access, UserController.register);

module.exports = router;