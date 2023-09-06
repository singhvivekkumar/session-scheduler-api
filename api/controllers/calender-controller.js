const { google } = require('googleapis');
const axios = require('axios');
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL} = require('../config/server-config');

const oauth2Client = new google.auth.OAuth2(
	CLIENT_ID ,
	CLIENT_SECRET ,
	REDIRECT_URL
);

const scopes = [
	'https://www.googleapis.com/auth/calendar'
]

const getCalender = async (req, res) => {
	try {
		const url = await oauth2Client.generateAuthUrl({
			access_type: "offline",
			scope: scopes,
		});

		return res.redirect(url);
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Something went wrong in calender",
			err: error
		})
	}
}

const redirect = async ( req, res) => {
	try {
		const code = await req.query.code;
		console.log(code)
		const user_info = await axios.get("http://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + code);
		const data = user_info.json();
		console.log(data);
		return res.send("it is not working properly")
	} catch (error) {
		console.log("something went wrong in redirect",req)
		return res.send(error)
	}
}

module.exports = {
	getCalender,
	redirect
}