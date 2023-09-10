// Refer to the Node.js quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/node

const { google } = require("googleapis");
const { oauth2Client } = require("./calender-controller");
const { API_KEY } = require("../config/server-config");
const { REFRESH_TOKEN } = require("./redirect-controller")

const calendar = google.calendar({
	version: "v3",
	auth: API_KEY,
});

// const eventmmnn = {
// 	summary: "schedule the event for 10th ",
// 	location: "Pillar no. 35,Bailey Road , Patna 800014",
// 	description: "This is an event created for get the session project",
// 	start: {
// 		dateTime: dayjs( new Date()).add(1, "day").toISOString(),
// 		timeZone: "Asia/Kolkata",
// 	},
// 	end: {
// 		dateTime: "2015-05-28T17:00:00-08:00",
// 		timeZone: "Aisa/Kolkata",
// 	},
// 	recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
// 	attendees: [{ email: "lpage@example.com" }, { email: "sbrin@example.com" }],
// 	reminders: {
// 		useDefault: false,
// 		overrides: [
// 			{ method: "email", minutes: 24 * 60 },
// 			{ method: "popup", minutes: 10 },
// 		],
// 	},
// };

const createEvent = async (req, res) => {
	try {
		const { name, summary, location, startDateTime, endDateTime } =
			req.body;
		// oauth2Client.setCredentials(REFRESH_TOKEN);
		const refresh_token = await REFRESH_TOKEN;
		console.log({refresh_token: refresh_token});
		const response = await calendar.events.insert({
			auth: oauth2Client,
			calendarId: "primary",
			requestBody: {
				summary: name,
				location: location,
				description:summary,
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
		res.send(response);
	} catch (error) {
		console.log(error);
		res.send({
			success: false,
			message: "problem event controller",
			error: error,
		});
	}
};

const getEvent = async (req, res) => {
	try {
		console.log("event is ");
	} catch (error) {
		console.log(error.message);
	}
};

const updateEvent = async (req, res) => {
	try {
		console.log("event is ");
	} catch (error) {
		console.log(error.message);
	}
};

const deleteEvent = async (req, res) => {
	try {
		console.log("event is ");
	} catch (error) {
		console.log(error.message);
	}
};
module.exports = {
	createEvent,
	getEvent,
	deleteEvent,
	updateEvent,
};
