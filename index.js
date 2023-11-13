const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {PORT} = require('./config/server-config');
const apiRoutes = require('./routes/route');
const { connectionDatabase } = require("./db");

// app is created 
const app = express();


const StartServer =async ()=> {
	app.use(cors());

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true}));

	//connect ot database
	await connectionDatabase();

	app.use('/api', apiRoutes);

	app.listen(PORT, ()=> {
		console.log('Server is started on :',PORT);
	})
}

StartServer();