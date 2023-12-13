const UserDetails = require("../models/events");

class TokenRepository {
	
	async dataSaver(clientId, refresh_token) {
		try {
		// Create a new document
		const user = new UserDetails({
			clientId: clientId,
			refresh_token: refresh_token,
		});

		// Add the document to Collections
		await user.save().then(
			(data) => console.log("One entry added :", data),
			(err) => console.log(err)
		);
		} catch (error) {
			console.log("error in dataSaver() of repository")
			throw error;
		}
	}

	async findUser(clientId) {
		try {
			const result = await UserDetails.find({
				clientId: clientId,
			});
			return result;
		} catch (error) {
			console.log("error in dataSaver() of repository")
			throw error;
		}
	}
}

module.exports = TokenRepository;
