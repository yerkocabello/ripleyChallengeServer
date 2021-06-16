const  bancoCtrl = {};
const axios = require("axios");


bancoCtrl.getAllBancos = async (req, res) => {
	try{
		const bancos = await axios.get(`https://bast.dev/api/banks.php`);
		res.status(200).send({message: "OK", data: bancos.data.banks});
	}catch(err){
		res.status(500).send({message: err});
	}

};

module.exports = bancoCtrl;