var http = require('http'),
	linz = require('linz'),
	routes = require('./lib/loader')('./routes'),
	express = require('express'),
	mongoose = require('mongoose'),
	port = 3701,
	app = express();

mongoose.connect('mongodb://localhost/linzminitwitter');

// initialize linz, without express (it will be provided)
linz.init(app, mongoose, {
	'admin path': '/webtop',
	'admin title': 'Mini-twitter'
});

app.get('/', routes.home);

// start the app
http.createServer(app).listen(port, function(){
	console.log('mini-twitter app started and running on port %s', port);
});