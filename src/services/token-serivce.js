const { TokenRepository } = require("../repository/index");

class TokenService {
	constructor() {
		this.tokenRepository = new TokenRepository();
	}

	async setToken(userData, tokens) {
		try {
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
			const token = await this.tokenRepository.getToken(userId);
			return token;
		} catch (error) {
			console.log("Error while getting tokens from service layer");
			throw error;
		}
	}
}

module.exports = TokenService;