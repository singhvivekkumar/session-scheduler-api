const express = require('express');

const { calendarController } = require('../../controllers');

const router = express.Router();

router.get("/", calendarController.getUrl);

module.exports = router;