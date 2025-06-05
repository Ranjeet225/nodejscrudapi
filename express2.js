const express =require("express");
const app=express();
app.use(express.json());
app.get('/:id',(req,res)=>{
    var id=req.params.id
    res.send("<h1>Home Page the id is "+id+" </h1>");
});
app.listen(4000);