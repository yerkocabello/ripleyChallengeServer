const {Schema, model} = require('mongoose');

const DestinatarioSchema = new Schema({
	rut: {
		type: String,
		required: true
	},
	nombre: {
		type: String,
		required: true
	},
	correo: {
		type: String,
		required: true
	},
	telefono: {
		type: Number,
		required: true
	},
	banco: {
		id: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
	},
	numeroCuenta: {
		type: String,
		required: true
	},
	cuenta: {
		type:{
			id: {
				type: Number,
				required: true
			},
			descripcion: {
				type: String,
				required: true
			}
		},
	}
}, {
	timestamps: true
});

module.exports = model('Destinatario', DestinatarioSchema);