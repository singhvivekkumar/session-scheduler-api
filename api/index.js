const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/server-config');
const apiRoutes = require('./routes/route');

// app is created 
const app = express();


const StartServer = ()=> {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true}));

	app.use('/api', apiRoutes);
	
	app.listen(PORT, ()=> {
		console.log('Server is started on :',PORT);
	})
}

StartServer();