const express = require('express');
const mongoose =require("mongoose");
const Enquiry = require('./models/enquiry.models');
require("dotenv").config();
const app= express();
app.use(express.json());

app.post('/enquiry',(req,res)=>{
    const  { name, email, message } = req.body;
    console.log("Received enquiry:", req.body);
    const enquiry = new Enquiry({
        name,
        email,
        message
    });
  
    // const enquiry = new Enquiry({
    //     name:,
    //     email,
    //     message
    // });
    // enquiry.save().then((result)=>{
    //     res.status(201).json({
    //         message: "Enquiry submitted successfully",
    //         enquiry: result
    //     });
    // }).catch((err)=>{
    //     console.error("Error saving enquiry:", err);
    //     res.status(500).json({
    //         message: "Error saving enquiry",
    //         error: err.message
    //     });
    // });
});

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to MongoDB database");
    app.listen(process.env.PORT,()=>{
        console.log("Server started on port", process.env.PORT);
    });
}).catch((err)=>{
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process if connection fails
});
// mongoose.connect(process.env.DBURL, () =>{
//     console.log("Connected to MongoDB");
// });
// app.listen(3000, () => {
//     console.log("Server started on port 3000");
//   });
// mongoose.connect(process.env.DBURL).then(()=>{
//     console.log("Connected to MongoDB");
//     app.listen(process.env.PORT || 3000,()=>{
//         console.log("Server started on port", process.env.PORT || 3000);
//     });
// }).catch((err)=>{
//    console.error("Error connecting to MongoDB:", err);
// });
   
