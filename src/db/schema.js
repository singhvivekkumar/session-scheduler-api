const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	clientId: String,
	refresh_token: String,
});

module.exports = {
	userSchema,
};