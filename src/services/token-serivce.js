const { TokenRepository } = require("../repository/index");

class TokenService {
	constructor() {
		this.tokenRepository = new TokenRepository();
	}

	async setToken(clientId, tokens) {
		try {
			const token = await this.tokenRepository.createToken(
				clientId,
				tokens
			);
			return token;
		} catch (error) {
			console.log("Error while setting tokens in service layer");
			throw error;
		}
	}

	async getUser(clientId) {
		try {
			const token = await this.tokenRepository.getToken(clientId);
			return token;
		} catch (error) {
			console.log("Error while getting tokens from service layer");
			throw error;
		}
	}
}

module.exports = TokenService;