// const = require('')

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