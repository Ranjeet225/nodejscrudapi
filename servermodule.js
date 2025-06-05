const http = require("http");
const server = http.createServer((req,res)=> {
    if(req.url=="/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Home Page</h1>");
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>About Page</h1>");
        res.end();
    }
    else if(req.url=="/service"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Service Page</h1>");
        res.end();
    }
    else if(req.url=="/contact"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Contact Page</h1>");
        res.end();
    }
    else if(req.url=="/gallery"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Gallery Page</h1>");
        res.end();
    }
    else if(req.url=="/blog"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Blog Page</h1>");
        res.end();
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
});
server.listen(3000,()=>console.log("server is running"));
