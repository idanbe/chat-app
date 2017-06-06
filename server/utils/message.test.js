var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');



describe('generateMessage', () =>{
	it('should generate correct message object' ,() =>{
		var from = 'idan';
		var text = 'hay';
		var message = generateMessage(from,text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,text});
	});	
});


describe('generateLocationMessage', () =>{
	it('should generate correct location message object' ,() =>{
		var from = 'idan';
		var latitide=15;
		var longitude=19;
		var url = 'https://www.google.co.il/maps?q=15,19';
		var message = generateLocationMessage(from,latitide,longitude);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,url});

	});	
});