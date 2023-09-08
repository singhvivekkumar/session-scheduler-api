// Refer to the Node.js quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/node

const { google } = require("googleapis");
const { oauth2Client } = require("./calender-controller");
const { API_KEY } = require("../config/server-config");
const  dayjs = require('dayjs')

const calendar = google.calendar({
	version: "v3",
	auth: API_KEY,
});

const eventmmnn = {
	summary: "schedule the event for 10th ",
	location: "Pillar no. 35,Bailey Road , Patna 800014",
	description: "This is an event created for get the session project",
	start: {
		dateTime: dayjs( new Date()).add(1, "day").toISOString(),
		timeZone: "Asia/Kolkata",
	},
	end: {
		dateTime: "2015-05-28T17:00:00-08:00",
		timeZone: "Aisa/Kolkata",
	},
	recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
	attendees: [{ email: "lpage@example.com" }, { email: "sbrin@example.com" }],
	reminders: {
		useDefault: false,
		overrides: [
			{ method: "email", minutes: 24 * 60 },
			{ method: "popup", minutes: 10 },
		],
	},
};

const eventSchedule = async (req, res) => {
	console.log(oauth2Client.credentials)
	try {

		calendar.events.insert({
			auth: oauth2Client,
			calendarId: "primary",
			requestBody: {
				summary: "schedule the event for 10th ",
				location: "Pillar no. 35,Bailey Road , Patna 800014",
				description:
					"This is an event created for get the session project",
				start: {
					dateTime: dayjs( new Date()).add(1, "day").toISOString(),
					timeZone: "Asia/Kolkata",
				},
				end: {
					dateTime: dayjs( new Date()).add(1, "day").add(1, "hour").toISOString(),
					timeZone: "Asia/Kolkata",
				},
			},
		});
		res.send({
			success: true,
			message: "event is successfully inserted in calendar",
		});
	} catch (error) {
		console.log(error);
		res.send({
			success: false,
			message: "problem event controller",
			error: error,
		});
	}
};

module.exports = {
	eventSchedule,
};
