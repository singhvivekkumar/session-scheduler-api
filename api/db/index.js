const mongoose = require("mongoose");
const { MONGODB_URI } = require('../config/server-config');

const connectionDatabase = async () => {
	await mongoose
		.connect(process.env.MONGODB_URI , {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log("MongoDB connected"))
		.catch((err) => console.log(err));
};

module.exports = { connectionDatabase }