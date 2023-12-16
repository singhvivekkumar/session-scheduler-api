const TokenService = require("./token-serivce");
const { oauth2Client } = require("../utils/helper");
const { FRONTEND_URL } = require("../config/server-config");
const axios = require('axios');

const scopes = [
	"https://www.googleapis.com/auth/calendar",
	"https://www.googleapis.com/auth/userinfo.profile",
];

class CalendarService {
	constructor() {
		this.tokenService = new TokenService();
	}
	async getAuthUrl() {
		try {
			const url = await oauth2Client.generateAuthUrl({
				access_type: "offline",
				scope: scopes,
			});
			console.log(url);
			return url;
		} catch (error) {
			console.log(
				"something went wrong in getAuthUrl() of calendar service"
			);
			throw error;
		}
	}

	async redirectUrl(client) {
		try {
			const code = await client.code;
			const { tokens } = await oauth2Client.getToken(code);
			const { data } = await axios.get(
				"https://www.googleapis.com/oauth2/v1/userinfo",
				{headers: { Authorization: `Bearer ${tokens.access_token}` },}
			);
			console.log(data);

			await this.tokenService.setToken(data, tokens);

			return `${FRONTEND_URL}/main/${encodeURIComponent(data.id)}`;
		} catch (error) {
			console.log(
				"something went wrong in redirectUrl() of calendar service"
			);
			throw error;
		}
	}
}

module.exports = CalendarService;
