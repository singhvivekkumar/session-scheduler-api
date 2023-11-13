const express = require("express");
const { getCalender } = require("../controllers/calender-controller");
const { redirectURI } = require("../controllers/redirect-controller");
const {
	createEvent,
	getEvent,
	deleteEvent,
	updateEvent,
} = require("../controllers/event-controller");
const { createToken } = require("../controllers/tokens-controller");

const router = express.Router();

router.get("/calendar", getCalender);
router.get("/calendar/redirect", redirectURI);
router.post("/calendar/create-event", createEvent);
router.get("/calendar/create-tokens", createToken);
router.get("/calendar/list-event", getEvent);
router.delete("/calendar/delete-event/:eventId", deleteEvent);
router.patch("/calendar/update-event", updateEvent);

module.exports = router;
