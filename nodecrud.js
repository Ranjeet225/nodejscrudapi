const express = require("express");
const {dbconnect} = require("./dbConnection");
const { ObjectId } = require('mongodb');

const app = express();
app.use(express.json());

const handleReq = async (res, db, fn, msg) => {
  try {
    const result = await fn();
    if (result.acknowledged) {
      res.status(201).send({ message: msg, data: result });
    } else {
      res.status(400).send({ message: `student not ${msg}`, error: result });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "internal server error" });
  }
};

app.get("/student-view", async (req, res) => {
  const db = await dbconnect();
  handleReq(res, db, () => db.collection("student").find({}).toArray(), "viewed");
});

app.post("/student-insert", async (req, res) => {
  const db = await dbconnect();
  handleReq(res, db, () => db.collection("student").insertOne(req.body), "inserted");
});

app.put("/student-update/:id", async (req, res) => {
  const db = await dbconnect();
  handleReq(
    res,
    db,
    () => db.collection("student").updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body }),
    "updated"
  );
});

app.delete("/student-delete/:id", async (req, res) => {
  const db = await dbconnect();
  handleReq(res, db, () => db.collection("student").deleteOne({ _id: new ObjectId(req.params.id) }), "deleted");
});

app.listen(4000);



// short version of this code  



const express = require("express");
const { dbconnect } = require("./dbConnection");
const { ObjectId } = require('mongodb');

const app = express();
app.use(express.json());

const handleReq = async (res, fn, msg) => {
  try {
    const db = await dbconnect();
    const result = await fn(db);
    if (result.acknowledged) {
      res.status(201).send({ message: msg, data: result });
    } else {
      res.status(400).send({ message: `student not ${msg}`, error: result });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "internal server error" });
  }
};

app.get("/student-view", async (req, res) => {
  handleReq(res, (db) => db.collection("student").find({}).toArray(), "viewed");
});

app.post("/student-insert", async (req, res) => {
  handleReq(res, (db) => db.collection("student").insertOne(req.body), "inserted");
});

app.put("/student-update/:id", async (req, res) => {
  handleReq(
    res,
    (db) => db.collection("student").updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body }),
    "updated"
  );
});

app.delete("/student-delete/:id", async (req, res) => {
  handleReq(res, (db) => db.collection("student").deleteOne({ _id: new ObjectId(req.params.id) }), "deleted");
});

app.listen(4000);

