const { TokenRepository } = require("../repository/index");
const { oauth2Client } = require("../utils/helper");

class TokenService {
	constructor() {
		this.tokenRepository = new TokenRepository();
	}

	async setToken(userData, tokens) {
		try {
			oauth2Client.setCredentials(tokens);
			const token = await this.tokenRepository.createToken(
				userData,
				tokens
			);
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
}

module.exports = TokenService;