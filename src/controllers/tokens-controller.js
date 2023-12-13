const { TokenService } = require("../services");

const tokenService = new TokenService();

const createToken = async (req, res, next) => { 
	try {
		console.log("nothing");
	} catch (error) {
		res.send({
			status: error.status,
			message: error.message
		})
	}
}

module.exports = {createToken};