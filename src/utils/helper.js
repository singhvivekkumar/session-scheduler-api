const { google } = require("googleapis");

// const { TokenService } = require("../services/index");

const {
	CLIENT_ID,
	CLIENT_SECRET,
	REDIRECT_URL,
	API_KEY,
} = require("../config/server-config");

const oauth2Client = new google.auth.OAuth2(
	CLIENT_ID,
	CLIENT_SECRET,
	REDIRECT_URL
);

// const settingCredentials = async (clientId) => {
// 	const tokenService = new TokenService();
// 	const user = await tokenService.getToken(clientId);
// 	// console.log(user[0].refresh_token);

// 	oauth2Client.setCredentials({
// 		refresh_token: user[0].refresh_token,
// 	});
// };

const calendar = google.calendar({
	version: "v3",
	auth: API_KEY,
});

module.exports = {
	oauth2Client,
	calendar,
};
