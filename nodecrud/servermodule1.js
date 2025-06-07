const http = require("http");
const server =http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>Hello i am good</h1>");
        res.end("<h1>Hello i am good</h1>");
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write(`<h1>404 page not found ${req.url}</h1>`);
        res.end("<h1>Hello i am good</h1>");
    }
});
// server.listen(8000,()=>console.log("server is running"));
server.listen(8000);

