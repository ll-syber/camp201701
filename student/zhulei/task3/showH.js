var http = require("http"); 
var fs = require('fs'); 
var url = require('url'); 
// exports.start = function(){ 
	http.createServer(function(request, response) { 
		var pathname = url.parse(request.url).pathname; 
		var ext = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名 
		switch(ext){ 
			case ".css": 
			case ".js": 
			fs.readFile("."+request.url, 'utf-8',function (err, data) {//读取内容 
				if (err) throw err; 
				response.writeHead(200, { 
					"Content-Type": { 
					".css":"text/css", 
					".js":"application/javascript", 
					}[ext] 
				}); 
				response.write(data); 
				response.end(); 
			}); 
			break;
			case ".png":
			case ".jpg":
			fs.readFile("."+ decodeURI(request.url),function (err, data) {//读取内容 
				if (err) throw err; 
				response.writeHead(200, { 
					"Content-Type": {
					".png":"image/png",
					".jpg":"image/jpg",
					}[ext] 
				}); 
				response.write(data); 
				response.end(); 
			});
			break;			 
			default: 
			fs.readFile('./yd_note_mobile_copy.html', 'utf-8',function (err, data) {//读取内容 
				if (err) throw err; 
				response.writeHead(200, { 
					"Content-Type": "text/html" 
					}); 
					response.write(data); 
					response.end(); 
			}); 
		} 
	}).listen(8888); 
	console.log("server start..."); 
// };


// var http = require('http');  
//     http.createServer(function(req, res){  
//         var html = '<html>'  
//         +'<head>'  
//         +'<title>nodejs</title>'  
//         +'</head>'  
//         +'<body>'  
//         +   'hello world! 1234'  
//         +'</body>'  
//         +'</html>';  
//         res.writeHead(200,{'Content-Type' : 'text/html'});  
//         res.write(html);  
//         res.end();  
//     }).listen(8888);  