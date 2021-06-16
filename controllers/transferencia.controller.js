const  transferenciaCtrl = {};
const Transferencia = require('../models/transferencia.model');
const Destinatario = require('../models/destinatario.model');

transferenciaCtrl.createNewTransferencia = async (req, res) => {
	try{
		const { destinatario , monto } = req.body;
		var _destinatario = await Destinatario.findOne({rut: destinatario.rut}).exec();
		var newDestinatario;
		if(_destinatario == null){
			_destinatario = new Destinatario(destinatario);
			 newDestinatario = await _destinatario.save();
		}else{
			newDestinatario = _destinatario;
		}
		const newTransferencia = new Transferencia({
			destinatario: newDestinatario,
			monto: monto
		});
		await newTransferencia.save();
		res.status(200).send({message: "OK"});
	}catch(err){
		res.status(500).send({message: err});
	}

};

transferenciaCtrl.getAllTransferencias = async (req, res) => {
	const transferencias= await Transferencia.find();
	if(transferencias.length > 0){
		var destinatario = null;
		for(var i=0; i<transferencias.length; i++){
			destinatario = await Destinatario.findById(transferencias[i].destinatario);
			transferencias[i].destinatario = destinatario;
		}
		res.status(200).send({
			data: transferencias,
			message: 'OK'
		});
	}else{ 
		res.status(204).send({message: "No content"})
	}
};



module.exports = transferenciaCtrl;