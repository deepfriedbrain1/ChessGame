var socketio = require('socket.io');
var session = require('../config/session');
var io = require('socket.io')();

//init socket here instead of io = require('socket.io')(http) in server
const initialize = function(server){
	
	io.use(({request}, next) => {
		session(request, request.res, next);
		console.log("Session ID: " + request.sessionID);
		
	});

	io.attach(server);

};

io.on('connection', function(socket) {

	console.log(`Socket: User Connected`);

	// default username
	//socket.username = "Anonymous";

	/*
	// listen on change_username
	socket.on('change_username', (data) => {
		socket.username = data.username
	});

	// listen on new_message
	socket.on('new_message', (data) => {
		// broadcast the new message
		io.sockets.emit('new_message', {message: data.message, username: socket.username});
	})
	*/
	

	//this works for lobby chat. move to chat.js to allow user name, etc.
	
	socket.on("testing", function(msg){
		console.log('testing: ' + msg);
		//o.emit(`chat_0`,  msg);
	});
	

	socket.on('disconnect', function() {
		console.log('a user disconnected');
	});

	
});

module.exports = { io, initialize};

