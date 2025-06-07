const {MongoClient} =  require("mongodb");
const dburl="mongodb://127.0.0.1:27017";

const client =new MongoClient(dburl);
const dbconnect = async()=>{
    try{
        await client.connect();
        console.log("Connected successfully to database");
        let db= client.db("nodejs");
        return db;
    }
    catch(err){
        console.error("Failed to connect to database:", err);
        throw err;
    }
}
module.exports={dbconnect};