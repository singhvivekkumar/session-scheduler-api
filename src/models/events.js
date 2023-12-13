const mongoose = require("mongoose");
const { userSchema } = require("../db/schema");

// create a model with studentSchema
const UserDetails = mongoose.model("UserDetails", userSchema);

module.exports = UserDetails;
