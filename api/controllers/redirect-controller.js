const redirect = async ( req, res) => {
	try {
		return res.send("it is not working properly")
	} catch (error) {
		console.log("something went wrong in redirect",req)
		return res.send(error)
	}
}

module.exports = {
	redirect
}