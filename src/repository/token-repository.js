const UserDetails = require("../models/events");

class TokenRepository {
	async createToken(clientId, tokens) {
		try {
			// Create a new document
			const user = new UserDetails({
				clientId: clientId,
				refresh_token: tokens.refresh_token,
				access_token: tokens.access_token,
				expiry_date: tokens.expiry_date,
				scope: tokens.scope,
				token_type: tokens.token_type,
			});

			// Add the document to Collections
			await user.save().then(
				(data) => console.log("One entry added :", data),
				(err) => console.log(err)
			);
		} catch (error) {
			console.log("error in dataSaver() of repository");
			throw error;
		}
	}

	async getToken(clientId) {
		try {
			const result = await UserDetails.find({
				clientId: clientId,
			});
			return result;
		} catch (error) {
			console.log("error in dataSaver() of repository");
			throw error;
		}
	}
}

module.exports = TokenRepository;
