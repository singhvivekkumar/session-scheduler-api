const { TokenRepository } = require("../repository/index");
const { oauth2Client } = require("../utils/helper");

class TokenService {
	constructor() {
		this.tokenRepository = new TokenRepository();
	}

	async setUserToken(userData, tokens) {
		try {
			const flag = await this.getUserToken(userData.id);
			if (!flag) {
				console.log("set the tokens");
				const token = await this.tokenRepository.createToken(
					userData,
					tokens
				);
				return token;
			}
			console.log("update the tokens");
			const token = await this.updateUserToken(flag.user_id, tokens);
			return token;
		} catch (error) {
			console.log("Error while setting tokens in service layer");
			throw error;
		}
	}

	async getUserToken(userId) {
		try {
			const user = await this.tokenRepository.getToken(userId);
			return user;
		} catch (error) {
			console.log("Error while getting tokens from service layer");
			throw error;
		}
	}

	async updateUserToken(userId, tokens) {
		try {
			const user = await this.tokenRepository.updateToken(userId, tokens);
			return user;
		} catch (error) {
			console.log("Error while updating tokens from service layer");
			throw error;
		}
	}
}

module.exports = TokenService;
