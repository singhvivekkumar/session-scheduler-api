const { CalendarService } = require("../services");

const calendarService = new CalendarService();

const getUrl = async (req, res) => {
	try {
		const authUrl = await calendarService.getAuthUrl();
		return res.status(201).json({
			data: authUrl,
			success: true,
			message: "successfully OAuth is generated",
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Something went wrong in Oauth2 client",
			err: error,
		});
	}
};

module.exports = {
	getUrl,
};
