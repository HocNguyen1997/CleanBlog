const express = require('express');
const router = express.Router()
const Controller = require('../controller/api.controller')

router.get('/getUser', Controller.getUser)
router.post('/register', Controller.register)

module.exports = router;