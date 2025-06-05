// const {home,about,service,contact,gallery,blog} = require("./home");
let http = require("http");
// let createServer = require("http").createServer;
let server = http.createServer();

server.listen(4000,()=>console.log("server is running"));
// import {home1} from "./home.js";
// console.log(home());
// console.log(about());
// console.log(service());
// console.log(contact());
// console.log(gallery());
// console.log(blog());
console.log(createServer);

