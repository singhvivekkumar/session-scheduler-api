const { FRONTEND_URL } = require('../config/server-config');
const { connectionDatabase } = require('../db');
const { dataSaver } = require('../models/events');
const { oauth2Client } = require('./calender-controller');

let REFRESH_TOKEN;
const redirectURI = async ( req, res) => {
	try {
		const code = await req.query.code;
		const clientId = await oauth2Client._clientId;
		const { tokens } = await oauth2Client.getToken(code);
		oauth2Client.setCredentials(tokens);
		REFRESH_TOKEN = tokens.refresh_token;
		console.log(token,"clientId", clientId);

		// database work
		connectionDatabase();
		dataSaver(clientId, REFRESH_TOKEN)
		
		res.status(301).redirect(`${FRONTEND_URL}/main`)
	} catch (error) {
		console.log("something went wrong in redirecting phase",req)
		return res.status(500).send(error)
	}
}

module.exports = { redirectURI, REFRESH_TOKEN }