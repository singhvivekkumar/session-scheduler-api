const { TokenRepository } = require("../repository/index");

class TokenService {

	constructor() {
		this.tokenRepository = new TokenRepository();
	}

	async setToken(clientId, refresh_token) {
		try {
			const token = await this.tokenRepository.dataSaver(clientId, refresh_token);
			return token;
		} catch (error) {
			console.log("something went wrong in service layer");
			throw error;
		}
	}

	async getToken(clientId) {
		try {
			const token = await this.tokenRepository.findUser(clientId);
			return token; 
		} catch (error) {
			console.log("something went wrong in service layer");
			throw error;
		}
	}

}

module.exports = TokenService