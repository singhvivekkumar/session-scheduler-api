const express = require('express');
const {getCalender, redirect} = require('../controllers/calender-controller');

const router = express.Router();

router.get('/calendar', getCalender);
router.get('/calendar/redirect', redirect);

module.exports = router;
