const {token} = require("./middleware");
const express= require("express"); 
const app =express();
app.use(express.json());
// app.use(token);
app.get('/about',(req,res)=>{
    res.send("this is about page");
})
app.get('/news',token,(req,res)=>{
    res.send("there are many more thing that are not available in express");
});

app.listen(4000);
