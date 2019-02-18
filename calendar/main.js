var fs = require("fs"),
	http = require("http"),
	path = require("path");

http.createServer(function(req,res){
	res.writeHead(200,{
		"Content-Type":getType(req.url)
	})
	var pathname = "";
	if(req.url == "/"){
		pathname = __dirname+"/index.html";
	}else{
		pathname = __dirname+"/"+req.url;
	}

	var file = fs.readFileSync(pathname);
	res.end(file);
}).listen(8080)

function getType(url){
	let name = path.extname(url);
	let strUrl = "";
	console.log(name)
	switch(url){
		case "":
			strUrl = "text/html;charset=utf-8";
		break;
		case ".css":
			strUrl = "text/css";
		break;
		case ".js":
			strUrl = "application/javascript";
		break;
		case ".png":
			strUrl = "text/png";
		break;
		default:
			strUrl = "text/html;charset=utf-8";
	}
	return strUrl;
}