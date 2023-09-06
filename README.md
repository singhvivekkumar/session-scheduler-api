# Get The Session
---


## Creation of Project
- Firstly, I create a repository by the name of get me session means `appointment scheduling 	application` then I had initialized  `npm init` in cmd. After that two more folder are created 	in which one for backend(api) or `node` and another frontend or `react`.

### Create Express App
- Create a express app by installing these dependencies in `api` folder. Run the following command in you cmd prompt which given below.
-- ```npm install express body-parser``` in cmd

### Add .env file
- This is file where you hide details which may sensitive in you case like password and port number. All the details like this you can in this file futher it is configured by a package which is known as `dotenv`.

- Run the following command to install the dependencies.
-- ```npm install dotenv```

- After this create folder `config` in which create a file `server-config.js`
- Add the following code:
```
const dotenv = require('dotenv');

dotenv.config({});

module.exports = {
	PORT: process.env.PORT ,
	CLIENT_ID : process.env.CLIENT_ID ,
	CLIENT_SECRET : process.env.CLIENT_SECRET ,
	REDIRECT_URL : process.env.REDIRECT_URL
}
```
- futher you can see file index.js of `api`.

### Create Google Credentials
I move to connect the app with googleapis for calender details and their features which help our scheduling app.

- Run the following command to install `googleapis`.
```npm install googleapis```

* Visit Google Developer Console*
- Go to [Google Developer Console](https://console.cloud.google.com/apis/credentials) login with your google account and create credentials.
	* First create a project in GCD 
	* Then set oAuth consent screen
	* Go to `create credentials` and click on `OAuth Client ID`.
	* Set the redirect `url` which can be default.
	* Copy the `CLIENT_ID`, `CLIENT_SECRET` and `REDIRECT`.
	* Paste all these in .env file.
	
- for more details [Google calendar API](https://developers.google.com/calendar/api/quickstart/nodejs)
### love

** vivek **