const { google } = require('googleapis');

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL} = require('../config/server-config');

const oauth2Client = new google.auth.OAuth2(
	CLIENT_ID ,
	CLIENT_SECRET ,
	REDIRECT_URL
);

// console.log(' DEBUG : ',CLIENT_ID , CLIENT_SECRET , REDIRECT_URL)

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

module.exports = {
	getCalender
}