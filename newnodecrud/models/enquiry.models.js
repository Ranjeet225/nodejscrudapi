const mongoose = require('mongoose');
const validator = require('validator');

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: (props) => `${props.value} is not a valid email address`
        }
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', enquirySchema);

