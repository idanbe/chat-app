	
	var socket = io();
	socket.on('connect',function () {
		console.log('Connected to server');

		socket.emit('createMessage',{
			from: 'idan@beck.com',
			text: 'hayyyyyyyyyyyyyyy'
		});

	});

	socket.on('disconnect',function (){
		console.log('disconnect form server');
	});	


	socket.on('newMessage', function (message) {
		console.log('new message',message);
	});00