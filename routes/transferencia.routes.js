var express = require('express');
var router = express.Router();
var controller = require('../controllers/transferencia.controller');
var jwt = require('../security/jwt')

router.post('/transferencia/create', jwt.authenticateToken, controller.createNewTransferencia);
router.get('/transferencia/get-all', jwt.authenticateToken, controller.getAllTransferencias);

module.exports = router;