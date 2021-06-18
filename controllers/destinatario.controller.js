const  destinatarioCtrl = {};
const Destinatario = require('../models/destinatario.model');

destinatarioCtrl.createNewDestinatario = async (req, res) => {
	try{
		const { rut, nombre, correo, telefono , banco, numeroCuenta, cuenta } = req.body;
		const newDestinatario = new Destinatario({
			rut,
			nombre,
			correo,
			telefono,
			banco,
			numeroCuenta,
			cuenta
		});
		await newDestinatario.save();
		res.status(200).send({message: "OK"});
	}catch(err){
		res.status(500).send({message: "NOK"});
	}

};

destinatarioCtrl.getAllDestinatarios = async (req, res) => {
	const destinatarios = await Destinatario.find();
	if(destinatarios.length > 0){
		res.status(200).send({
			data: destinatarios,
			message: 'OK'
		});
	}else{ 
		res.status(204).send({message: "No content"})
	}
};

destinatarioCtrl.getDestinatario = async(req, res) => {
	const note = await Destinatario.findById(req.params.id).exec();
	if(note != null){
		res.status(200).send({
			message: 'OK',
			data: note
		});	
	}else{
		res.status(404).send({message: 'Note not found'});
	}
};

destinatarioCtrl.updateDestinatario = async(req, res) => {
	var query = {};
	
	for(var key in req.body){ //could also be req.query and req.params
	  req.body[key] !== "" ? query[key] = req.body[key] : null;
	}

	if(query != {}){
		const note = await Destinatario.findByIdAndUpdate(req.params.id, query, {new: true}).exec();
		if(note != null){
			res.status(200).send({
				message: 'OK',
				data: note
			});	
		}else{
			res.status(200).send({message: 'Destinatario not found'});
		}
			
	}else{
		res.status(200).send({message: 'Nothing to update'});
	}
};

destinatarioCtrl.deleteDestinatario = async(req, res) => {
	const note = await Destinatario.findByIdAndDelete(req.params.id);
	if(note != null){
		res.status(202).send({ 
			message: 'resource deleted',
			data: note
		});
	}else{
		res.status(200).send({message: 'Destinatario not found'});
	}
};

module.exports = destinatarioCtrl;