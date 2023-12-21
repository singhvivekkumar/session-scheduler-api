const { EventService } = require("../services");

const eventService = new EventService();

const create = async (req, res) => {
	try {
		const { name, summary, location, startDateTime, endDateTime } =
			req.body;
		const { id } = req.query;
		const event = await eventService.createEvent({
			name,
			summary,
			location,
			startDateTime,
			endDateTime,
			id
		});
		return res.status(201).json({
			data: event.data,
			message: "Event successfully created",
			success: true,
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			message: "Not able to create an event",
			success: false,
			err: error,
		});
	}
};

const get = async (req, res) => {
	try {
		// console.log(req.query);
		const events = await eventService.getEvent(req.query.id);
		// console.log("controller ........",events.data);
		return res.status(200).json({
			data: events.data,
			message: "list of all events",
			success: true,
			err: {},
		});
	} catch (error) {
		return res.status(500).json({
			data: {},
			message: "Not able to show list of events",
			success: true,
			err: error,
		});
	}
};

const update = async (req, res) => {
	try {
		const { name, email, comment, eventId } = req.body;
		const { id } = req.query;
		const response = await eventService.updateEvent({
			name,
			email,
			comment,
			eventId,
			id
		});
		return res.status(200).json({
			data: response,
			message: "event updated successfully",
			success: true,
			err: {},
		});
	} catch (error) {
		return res.status(500).json({
			data: {},
			message: "Can't update your data in event",
			success: false,
			err: error,
		});
	}
};

const deleteE = async (req, res) => {
	try {
		const { eventId } = await req.params;
		const { id } = await req.query;
		const response = await eventService.deleteEvent({eventId, id});
		return res.status(200).json({
			data: response,
			message: "Event is deleted successfully",
			success: true,
			err: {},
		});
	} catch (error) {
		return res.status(500).json({
			data: {},
			message: "Event is not deleted",
			success: false,
			err: error,
		});
	}
};

module.exports = {
	create,
	get,
	deleteE,
	update,
};
