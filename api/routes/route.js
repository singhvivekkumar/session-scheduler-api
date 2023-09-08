const express = require('express');
const {getCalender, redirect} = require('../controllers/calender-controller');
const { eventSchedule } = require('../controllers/event-controller');
const { eventSchedule } = require('../controllers/tokens-controller');

const router = express.Router();

router.get('/calendar', getCalender);
router.get('/calendar/redirect', redirect);
router.get('/calendar/event', eventSchedule);
router.get('/calendar/create-tokens', eventSchedule);

module.exports = router;
