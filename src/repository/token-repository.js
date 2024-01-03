const UserDetails = require("../models/events");

class TokenRepository {
	async createToken(data, tokens) {
		try {
			// Create a new document
			const user = new UserDetails({
				user_id: data.id,
				name: data.name,
				picture: data.picture,
				refresh_token: tokens.refresh_token,
				access_token: tokens.access_token,
				expiry_date: new Date(tokens.expiry_date),
				scope: tokens.scope,
				token_type: tokens.token_type,
			});

			// Add the document to Collections
			await user.save().then(
				(data) => console.log("New user is added to database :", data),
				(err) => console.log(err)
			);
		} catch (error) {
			console.log("error in createToken() of repository");
			throw error;
		}
	}

	async getToken(userId) {
		try {
			const result = await UserDetails.findOne({
				user_id: userId,
			}).exec();
			// console.log("respo",result)
			return result;
		} catch (error) {
			console.log("error in getToken() of repository");
			throw error;
		}
	}

	async updateToken(userId, tokens) {
		try {
			const fliter = { user_id: userId };
			const updatedTokens = {
				$set: {
					refresh_token: tokens.refresh_token,
					access_token: tokens.access_token,
					expiry_date: new Date(tokens.expiry_date),
				},
			};
			console.log("update with new tokens data of existing user :", fliter, updatedTokens);
			const result = await UserDetails.updateOne(fliter, updatedTokens);
			return result;
		} catch (error) {
			console.log("error in updateToken() of repository");
			throw error;
		}
	}
}

module.exports = TokenRepository;
