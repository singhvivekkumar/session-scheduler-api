const express = require("express");

const {
	calendarController,
	eventsController,
	redirectController,
	tokenController,
} = require("../../controllers/index");

const router = express.Router();

router.get("/", calendarController.getUrl);
router.get("/redirect", redirectController.redirectURI);
router.post("/create-event", eventsController.createEvent);
router.get("/create-tokens", tokenController.createToken);
router.get("/list-event", eventsController.getEvent);
router.delete("/delete-event/:eventId", eventsController.deleteEvent);
router.patch("/update-event", eventsController.updateEvent);

module.exports = router;
