const express = require('express');
const mongoose = require("mongoose");
const Enquiry = require('./models/enquiry.models');
const routes = require('./routes/enquiryroutes');
const { getAllEnquiries ,saveEnquiry,updateEnquiry,deleteEnquiry} = require('./controller/enquiryController');
require("dotenv").config();
const app= express();
app.use(express.json());


app.use('/api',routes);


mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to MongoDB database");
    app.listen(process.env.PORT,()=>{
        console.log("Server started on port", process.env.PORT);
    });
}).catch((err)=>{
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process if connection fails
});