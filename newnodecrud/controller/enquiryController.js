const enquiryModels = require("../models/enquiry.models");

let getAllEnquiries = (req, res) => {
    enquiryModels.find()
        .then(enquiries => {
            res.status(200).json({
                message: "Enquiries fetched successfully",
                enquiries
            });
        })
        .catch(err => {
            console.error("Error fetching enquiries:", err);
            res.status(500).json({
                message: "Error fetching enquiries",
                error: err.message
            });
        }
        )
};
const saveEnquiry = (req, res) => {
    // const name = req.body.name;
    // const email = req.body.email;
    // const message = req.body.message;
    // const { name, email, message } = req.body;
    // console.log("Received enquiry:", req.body);
    const data = req.body;
    console.log("Received enquiry:", data);
    const enquiry = new Enquiry({
        name: data.name,
        email: data.email,
        message: data.message
    });
    enquiry.save().then((result) => {
        res.status(201).json({
            message: "Enquiry submitted successfully",
            enquiry: result
        });
    }).catch((err) => {
        console.error("Error saving enquiry:", err);
        res.status(500).json({
            message: "Error saving enquiry",
            error: err.message
        });
    });
};
const updateEnquiry = (req,res)=>{
    const id = req.params.id;
    const updatedData = req.body;
    Enquiry.findByIdAndUpdate(id, updatedData, { new: true }).then((result)=>{
        if (!result) {
            return res.status(404).json({
                message: "Enquiry not found"
            });
        }
        res.status(200).json({
            message: "Enquiry updated successfully",
            enquiry: result
        });
    }).catch((err)=>{
        console.error("Error updating enquiry:", err);
        res.status(500).json({
            message: "Error updating enquiry",
            error: err.message
        });
});
};

const deleteEnquiry = (req,res)=>{
    const id = req.params.id;
    Enquiry.findByIdAndDelete(id).then((result)=>{
        if (!result) {
            return res.status(404).json({
                message: "Enquiry not found"
            });
        }
        res.status(200).json({
            message: "Enquiry deleted successfully"
        });
    }).catch((err)=>{
        console.error("Error deleting enquiry:", err);
        res.status(500).json({
            message: "Error deleting enquiry",
            error: err.message
        });
    });
};
module.exports = { getAllEnquiries, saveEnquiry, updateEnquiry,deleteEnquiry };
