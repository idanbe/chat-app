	
	var socket = io();
	socket.on('connect',function () {
		console.log('Connected to server');
	});

	socket.on('disconnect',function (){
		console.log('disconnect form server');
	});	


	socket.on('newMessage', function (message) {
		console.log('new message',message);
	});