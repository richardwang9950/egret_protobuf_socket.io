var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);
  var protobuf = require('protobufjs');


server.listen(3000);

io.sockets.on('connection', function (socket) {


	socket.on('send', function(data){
		protobuf.load("./proto/test.proto", function(err, root) {
			if (err)
				throw err;
			/**
			 * 接收消息
			 *
			 * */
			//obj to Uint8Array
			let bit=new Uint8Array(Object.values(data));
			var SearchRequest = root.lookupType("test.SearchRequest");
			//解码
			var message = SearchRequest.decode(bit);
			console.log("msg",message);

			/**
			 * 发送消息
			 *
			 * */
			var SearchRespond = root.lookupType("test.SearchRespond");
			var payload = { name: "AwesomeString",id:2001,score:200 };
			var errMsg = SearchRespond.verify(payload);
			if (errMsg)
				throw Error(errMsg);
			var sendMessage = SearchRespond.create(payload);
			//加码
			let buffer = SearchRespond.encode(sendMessage).finish();
			console.log(buffer);
			socket.emit('receive',buffer);
		});


	});

	socket.on('disconnect', function(){
		console.log("disconnect")
	});
});
