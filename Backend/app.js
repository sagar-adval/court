const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('./db/mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const app = express();


app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/users', users);
app.use('/auth', auth);
const port = process.env.PORT || 7300;
app.listen(port, () => console.log(`Listening on port ${port}...`));
