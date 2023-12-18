const express = require('express');

const { calendarController, tokenController } = require('../../controllers');

const router = express.Router();

router.get("/", calendarController.getUrl);
router.get("/user", tokenController.getUser);

module.exports = router;