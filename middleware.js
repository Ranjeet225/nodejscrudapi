// import { config } from "dotenv";
// config();
require('dotenv').config();

const token = (req, res, next) => {
    if (req.query.token === process.env.TOKEN) {
        console.log('token',process);
        console.log(req.query.token);
        // res.send(process.env);
        next();
    } else {
        res.status(401).send({ error: 'please provide a valid token' });
    }
};

module.exports = { token };

db.ranjeet1.find(_id:ObjectId('684181a09672a5aa19a8e4e7'));
