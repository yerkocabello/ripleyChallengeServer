const mongoose= require('mongoose');
const Destinatario= mongoose.model('Destinatario');
const TransferenciaSchema = new mongoose.Schema({
	destinatario: {
		type: mongoose.Schema.Types.ObjectId, ref: 'Destinatario',
		required: true
	},
	monto: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
});

module.exports =	mongoose.model('Transferencia', TransferenciaSchema);