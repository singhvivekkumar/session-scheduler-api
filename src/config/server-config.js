const dotenv = require('dotenv');

dotenv.config({});

module.exports = {
	PORT: process.env.PORT ,
	CLIENT_ID : process.env.CLIENT_ID ,
	CLIENT_SECRET : process.env.CLIENT_SECRET ,
	REDIRECT_URL : process.env.REDIRECT_URL,
	API_KEY : process.env.API_KEY,
	MONGODB_URI : process.env.MONGODB_URI,
	FRONTEND_URL: process.env.FRONTEND_URL
}