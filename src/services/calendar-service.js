const TokenService = require("./token-serivce");
const { oauth2Client } = require("../utils/helper");
const { FRONTEND_URL } = require("../config/server-config");

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

	async redirectUrl(data) {
		try {
			const code = await data.code;
			const clientId = oauth2Client._clientId;
			const { tokens } = await oauth2Client.getToken(code);
			oauth2Client.setCredentials(tokens);
			console.log(tokens, "clientId", clientId);

			await this.tokenService.setToken(clientId, tokens);

			return `${FRONTEND_URL}/main`;
		} catch (error) {
			console.log(
				"something went wrong in redirectUrl() of calendar service"
			);
			throw error;
		}
	}
}

module.exports = CalendarService;
