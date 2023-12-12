// Refer to the Node.js quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/node

const { google } = require("googleapis");
const { oauth2Client } = require("./calender-controller");
const { API_KEY, CLIENT_ID } = require("../config/server-config");
const { findUser } = require("../models/events");

const settingTokens = async () => {
	const user = await findUser(CLIENT_ID);
	// console.log(user[0].refresh_token);

	oauth2Client.setCredentials({
		refresh_token: user[0].refresh_token,
	});
}

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
		const { name, summary, location, startDateTime, endDateTime } = req.body;
		await settingTokens();

		const response = await calendar.events.insert({
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
		return res.status(201).json(response);
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			success: false,
			message: "problem event controller",
			error: error,
		});
	}
};

const getEvent = async (req, res) => {
	try {
		await settingTokens();
		const response = await calendar.events.list({
			auth: oauth2Client,
			calendarId: "primary",
			timeZone: "Asia/Kolkata"
		})
		// console.log(response.data)
		res.send(response);
	} catch (error) {
		console.log(error.message);
		res.send({
			success: false,
			message: "problem getEvent() controller",
			error: error,
		});
	}
};

const updateEvent = async (req, res) => {
	try {
		const { name, email, comment, eventId} = req.body;
		// console.log(req)
		await settingTokens();
		const response = await calendar.events.patch({
			auth: oauth2Client,
			calendarId: "primary",
			timeZone: "Asia/Kolkata",
			eventId: eventId,
			requestBody: {
				attendees: [
					{
						displayName:name,
						email: email,
						comment: comment
					}
				]
			}
			
		})
		// console.log(response.data)
		res.send(response);	} catch (error) {
		console.log(error.message);
		res.send({
			success: false,
			message: "problem updateEvent() controller",
			error: error,
		});
	}
};

const deleteEvent = async (req, res) => {
	try { 
		await settingTokens();
		const { eventId } = await req.params ;
		// console.log("params : ", req.params,req);
		console.log("params : ", req.params);
		const response = await calendar.events.delete({
			auth:oauth2Client,
			calendarId: "primary",
			eventId: eventId,
		})
		console.log("deleted");
		res.send(response);
	} catch (error) {
		console.log(error.message);
		res.send({
			success: false,
			message: "problem deleteEvent() controller",
			error: error,
		});
	}
};

module.exports = {
	createEvent,
	getEvent,
	deleteEvent,
	updateEvent,
};
