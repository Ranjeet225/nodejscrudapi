const express = require("express");
const app=express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send([
        {
            name: "Ranjeet",
            age: 22,
            gender: "male",
            status: 200
        },
        {
            name: "shailender",
            age: 21,
            gender: "male",
            status: 200
        }
    ]);
});

app.post('/contact', (req, res) => {
    res.send({
        status: 200,
        data: {
            name: req.body.name,
            age: req.body.age
        },
        query: req.query,
        params: req.params
    });
});
app.listen(4000,()=>{
    console.log("server is running");
});
