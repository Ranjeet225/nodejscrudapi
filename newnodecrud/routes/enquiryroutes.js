const express = require('express');
const routes = express.Router();
const { getAllEnquiries, saveEnquiry, updateEnquiry, deleteEnquiry } = require('../controller/enquiryController');

routes.get('/',getAllEnquiries);
routes.post('/enquiry',saveEnquiry);
routes.put('/enquiry/:id', updateEnquiry);
routes.delete('/enquiry/:id',deleteEnquiry);

module.exports = routes;
