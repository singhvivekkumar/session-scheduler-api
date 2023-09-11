const mongoose = require("mongoose");
const { userSchema } = require("../db/schema");

// create a model with studentSchema
const UserDetails = mongoose.model("UserDetails", userSchema);

const dataSaver = async (clientId, refresh_token) => {
	// Create a new document
	const user = new UserDetails({
		clientId: clientId,
		refresh_token: refresh_token,
	});

	// Add the document to Collections
	user.save().then(
		() => console.log("One entry added"),
		(err) => console.log(err)
	);
};

const findUser = async (clientId) => {
	const result = await UserDetails.find({
		clientId: clientId,
	});
	return result;
};

module.exports = { dataSaver, findUser };
