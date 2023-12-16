const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	user_id: Number,
	name: String,
	picture: String,
	refresh_token: String,
	access_token: String,
	expiry_date: Date,
	scope: String,
	token_type: String,
});

module.exports = {
	userSchema,
};
