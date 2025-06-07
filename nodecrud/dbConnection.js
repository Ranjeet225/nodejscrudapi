const { MongoClient } = require("mongodb");
var dbConnecturl = "mongodb://127.0.0.1:27017";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
// const client = new MongoClient(dbConnecturl);
// let dbconnect = async ()=>{
//     await client.connect();
//     let db = client.db("nodejs");
//     return db;
// }

const client = new MongoClient(dbConnecturl);
let dbconnect = async () => {
    try {
        await client.connect();
        console.log("Connected successfully to database");
        let db = client.db("nodejs");
        return db;
    } catch (err) {
        console.error("Failed to connect to database:", err);
        throw err;
    }
};


module.exports = {dbconnect};