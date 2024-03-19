const http=require('http');
const fs=require('fs');
const path=require('path');


var homeData='';
var aboutData='';
console.log('This is server file');

fs.readFile('static/home.html','utf8',(err,data)=>{
	if(err){
		console.error(`Error reading file :${err.message}`);
	}else{
		homeData=data;
	}
});
fs.readFile('static/about.html','utf8',(err,data)=>{
	if(err){
		console.error(`Error reading file :${err.message}`);
	}else{
		aboutData=data;
	}
});

const server=http.createServer((req,res)=>{
	if(req.url=='/about'){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(aboutData);
	}else if(req.url=='/home'){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(homeData);
	}else{
		res.writeHead(404,{'Content-Type':'text/html'});
		res.end('/home');
	}
});
// Start the server
const port = process.env.PORT || 3300; 
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
