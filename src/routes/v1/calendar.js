const express = require("express");

const {
	calendarController,
	eventsController,
	tokenController,
} = require("../../controllers/index");

const router = express.Router();

router.get("/redirect", calendarController.getRedirectUrl);
router.post("/create-event", eventsController.create);
router.get("/create-tokens", tokenController.createToken);
router.get("/list-event", eventsController.get);
router.delete("/delete-event/:eventId", eventsController.deleteE);
router.patch("/update-event", eventsController.update);

module.exports = router;
