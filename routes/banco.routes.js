var express = require('express');
var router = express.Router();
var controller = require('../controllers/banco.controller');
var jwt = require('../security/jwt')

router.get('/banco/get-all', jwt.authenticateToken, controller.getAllBancos);

module.exports = router;