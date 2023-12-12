const express = require("express");

const router = express.Router(); 

router.use("/calendar", (req, res) => {
	try {
		return res.status(200).json({
			data: { bodyData: req.body},
			message: "version 2 in the process",
			success: true,
			err: {}
		})
	} catch (error) {
		return res.status(500).json({
			data: {},
			message: "something went wrong in parsing the request",
			success: false,
			err: error
		})
	}
});

module.exports = router;
