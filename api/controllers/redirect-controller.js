const { oauth2Client } = require('./calender-controller');

const redirectURI = async ( req, res) => {
	try {
		const code = await req.query.code;
		const { tokens } = await oauth2Client.getToken(code);
		oauth2Client.setCredentials(tokens);

		return res.send({
			message: "You have successfully logged in",
			success: true,
		})
	} catch (error) {
		console.log("something went wrong in redirecting phase",req)
		return res.send(error)
	}
}

module.exports = { redirectURI }