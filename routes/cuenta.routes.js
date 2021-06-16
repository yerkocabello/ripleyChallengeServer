var express = require('express');
var router = express.Router();
var controller = require('../controllers/cuenta.controller');
var jwt = require('../security/jwt')

router.get('/cuenta/get-all', jwt.authenticateToken, controller.getAllCuentas);

module.exports = router;