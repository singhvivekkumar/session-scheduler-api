const express = require('express');
const { getCalender } = require('../controllers/calender-controller');
const { redirectURI } = require('../controllers/redirect-controller');
const { eventSchedule } = require('../controllers/event-controller');
const { createToken } = require('../controllers/tokens-controller');

const router = express.Router();

router.get('/calendar', getCalender);
router.get('/calendar/redirect', redirectURI);
router.get('/calendar/event', eventSchedule);
router.get('/calendar/create-tokens', createToken);

module.exports = router;
