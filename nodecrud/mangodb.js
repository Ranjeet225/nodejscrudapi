const express = require("express");
const {dbconnect} = require("./dbConnection");
const { ObjectId } = require('mongodb');

const app=express();
app.use(express.json());
app.get('/student-view',async(req,res)=>{
    let db = await dbconnect();
    let result = await db.collection("student").find({}).toArray();
    res.send(result);
});
app.post('/student-insert',async(req,res)=>{
    let db = await dbconnect();
    let result = await db.collection("student").insertOne(req.body);
    if(result.acknowledged){
        res.status(201).send({message:"student inserted",data:req.body});
    }else{
        res.status(400).send({message:"student not inserted",error:result});
    }
});
app.put('/student-update/:id', async (req, res) => {
  let db = await dbconnect();
  let result = await db.collection("student").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  if (result.acknowledged) {
    res.send({ message: "student updated", data: req.body });
  } else {
    res.send({ message: "student not updated", error: result });
  }
});

app.delete('/student-delete/:id',async(req,res)=>{
    let db = await dbconnect();
    let result = await db.collection("student").deleteOne({_id: new ObjectId(req.params.id)});
    if(result.acknowledged){
        res.send("student deleted");
    }else{
        res.send("student not deleted");
    }
})
app.listen(4000);
