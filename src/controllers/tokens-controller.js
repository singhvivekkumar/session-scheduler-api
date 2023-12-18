const { TokenService } = require("../services");

const tokenService = new TokenService();

const getUser = async (req, res) => {
	try {
		const user = await tokenService.getUserToken(req.query.id);
		console.log(req.query.id)
		return res.status(200).json({
			data: {
				userId: user.user_id,
				name: user.name,
				picture: user.picture,
			},
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

module.exports = { getUser };
