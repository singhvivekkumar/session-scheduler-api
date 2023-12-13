const { oauth2Client, settingCredentials, calendar } = require("../utils/helper");

class EventService {

	async createEvent(data) {
		try {
			const { name, summary, location, startDateTime, endDateTime } =
				data;
			console.log(name, summary, startDateTime);
			await settingCredentials();

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

	async getEvent() {
		try {
			await settingCredentials();
			const response = await calendar.events.list({
				auth: oauth2Client,
				calendarId: "primary",
				timeZone: "Asia/Kolkata",
			});
			return response;
		} catch (error) {
			console.log(
				"something happen wrong in getEvent() of event-service"
			);
			throw error;
		}
	}

	async updateEvent(data) {
		try {
			const { name, email, comment, eventId } = data;
			await settingCredentials();
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
			await settingCredentials();
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
