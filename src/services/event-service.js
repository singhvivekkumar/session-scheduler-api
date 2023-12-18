const { API_KEY } = require("../config/server-config");
const { oauth2Client, calendar } = require("../utils/helper");
const TokenService = require("./token-serivce");

class EventService {
	
	constructor() {
		this.tokenService = new TokenService();
  }

	async createEvent(data) {
		try {
			const { name, summary, location, startDateTime, endDateTime, id } =
				data;
			const tokens = await this.tokenService.getUserToken(id);
			oauth2Client.setCredentials(tokens);
			console.log(name, summary, startDateTime);

			const event = await calendar.events.insert({
				auth: oauth2Client,
				calendarId: "primary",
				requestBody: {
					summary: name,
					location: location,
					description: summary,
					start: {
						dateTime: new Date(startDateTime),
						timeZone: "Asia/Kolkata",
					},
					end: {
						dateTime: new Date(endDateTime),
						timeZone: "Asia/Kolkata",
					},
				},
			});
			return event;
		} catch (error) {
			console.log(
				"something happen wrong in createEvent() of event-service"
			);
			throw error;
		}
	}

	async getEvent(id) {
		try {
			const tokens = await this.tokenService.getUserToken(id);
			oauth2Client.setCredentials(tokens);
			const events = await calendar.events.list({
				auth: oauth2Client,
				calendarId: "primary",
				key: API_KEY,
			})
			return events;
		} catch (error) {
			console.log(
				"something happen wrong in getEvent() of event-service",
				error
			);
			throw error;
		}
	}

	async updateEvent(data) {
		try {
			const { name, email, comment, eventId } = data;
			const tokens = await this.tokenService.getUserToken(id);
			oauth2Client.setCredentials(tokens);
			const response = await calendar.events.patch({
				auth: oauth2Client,
				calendarId: "primary",
				timeZone: "Asia/Kolkata",
				eventId: eventId,
				requestBody: {
					attendees: [
						{
							displayName: name,
							email: email,
							comment: comment,
						},
					],
				},
			});
			return response;
		} catch (error) {
			console.log(
				"something happen wrong in updateEvent() of event-service"
			);
			throw error;
		}
	}

	async deleteEvent(eventId) {
		try {
			const tokens = await this.tokenService.getUserToken(id);
			oauth2Client.setCredentials(tokens);
			const response = await calendar.events.delete({
				auth: oauth2Client,
				calendarId: "primary",
				eventId: eventId,
			});
			return response;
		} catch (error) {
			console.log(
				"something happen wrong in deleteEvent() of event-service"
			);
			throw error;
		}
	}
}

module.exports = EventService;
