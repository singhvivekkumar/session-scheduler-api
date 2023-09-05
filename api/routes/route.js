const express = require('express');
const CalenderController = require('../controllers/calender-controller');
const RedirectController = require('../controllers/redirect-controller');

const router = express.Router();

router.get('/google', CalenderController.getCalender);
router.get('/google/redirect', RedirectController.redirect);

module.exports = router;
