const express = require('express')
const router = express.Router();
const Controller = require('../controller/infor.controller') 


router.get('/', Controller.getInfor);

module.exports = router;