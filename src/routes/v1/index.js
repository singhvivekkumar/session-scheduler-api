const express = require("express");

const calendarRouter = require('./calendar');

const router = express.Router(); 

router.use("/calendar", calendarRouter);

module.exports = router;
