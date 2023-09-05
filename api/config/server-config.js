const dotenv = require('dotenv');

dotenv.config({});

module.exports = {
	PORT: process.env.PORT ,
	CLIENT_ID : process.env.CLIENT_ID ,
	CLIENT_SECRET : process.env.CLIENT_SECRET ,
	REDIRECT_URL : process.env.REDIRECT_URL
}