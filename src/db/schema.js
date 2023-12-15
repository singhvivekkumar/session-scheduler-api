const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	clientId: String,
	refresh_token: String,
	access_token: String,
	expiry_date: String,
	scope: String,
	token_type: String,
});

module.exports = {
	userSchema,
};
