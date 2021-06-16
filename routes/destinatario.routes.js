const { Router } = require('express')
const router = Router();

const { 
	createNewDestinatario,
	getAllDestinatarios,
	getDestinatario,
	updateDestinatario,
	deleteDestinatario
} = require('../controllers/destinatario.controller');

const jwt = require('../security/jwt')

router.get('/destinatario/all-destinatarios', jwt.authenticateToken, getAllDestinatarios);
router.post('/destinatario/add-destinatario', jwt.authenticateToken, createNewDestinatario);
router.get('/destinatario/get-destinatario/:id', jwt.authenticateToken, getDestinatario);
router.put('/destinatario/update/:id', jwt.authenticateToken, updateDestinatario);
router.delete('/destinatario/delete/:id', jwt.authenticateToken, deleteDestinatario);

module.exports = router;