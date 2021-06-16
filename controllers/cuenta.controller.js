const  cuentaCtrl = {};

cuentaCtrl.getAllCuentas = async (req, res) => {
	try{
		const cuentas = [
			{
				id: 1,
				descripcion: 'Cuenta Corriente'
			},
			{
				id: 2,
				descripcion: 'Cuenta Vista'
			},
			{
				id: 3,
				descripcion: 'Chequera electrónica'
			},
			{
				id: 4,
				descripcion: 'Cuenta de Ahorro'
			}
		]
		res.status(200).send({message: "OK", data: cuentas});
	}catch(err){
		res.status(500).send({message: err});
	}
}
module.exports = cuentaCtrl;