const express = require("express");

const calendarRouter = require('./calendar');
const authRouter = require('./auth');

const router = express.Router(); 

router.use("/calendar", calendarRouter);
router.use("/auth", authRouter);

module.exports = router;
