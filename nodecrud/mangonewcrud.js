const express =require("express");
const { dbconnect } = require("./dbconnect2");
const { ObjectId } = require('mongodb');

const app =express();
app.use(express.json());

app.get('/student-view',async(req,res)=>{
    const data =await dbconnect();
    const result = await data.collection("student").find({}).toArray();
    res.send({status:"success",data:result});
});

app.get('/student-insert',async(req,res)=>{
    const db =await dbconnect();
    const result =await db.collection("student").insertOne(req.body);
    res.send({status:"success",data:result});
});
app.put('/student-update/:id',async(req,res)=>{
    const db =await dbconnect();
    const result = await db.collection("student").updateOne({_id:new ObjectId(req.params.id)},{$set:req.body});
    res.send({status:"success",data:result});
});

app.delete('/student-delete/:id',async(req,res)=>{
    const db =await dbconnect();
    const result =await db.collection("student").deleteOne({_id:new ObjectId(req.params.id)});
    res.send({status:"success",data:result});
});
app.listen(4000);
