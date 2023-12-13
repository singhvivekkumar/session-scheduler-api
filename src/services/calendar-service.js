const { oauth2Client } = require("../utils/helper");

const scopes = ["https://www.googleapis.com/auth/calendar"];

class CalendarService {
	async getAuthUrl() {
		try {
			const url = await oauth2Client.generateAuthUrl({
				access_type: "offline",
				scope: scopes,
			});
			return url;
		} catch (error) {
			console.log(
				"something went wrong in getAuthUrl() of calendar service"
			);
			throw error;
		}
	}
}

module.exports = CalendarService;
