const Joi = require('joi');
const mongoose = require('mongoose');
//
// class Member {
//
// }

const User = mongoose.model('User', new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    contactNumber: {
        type: Number,
        required: true,
        length: 10
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    city:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1024
    },
    member:{
        type: String,
        required: true
    }
}));

function validateUser(user) {
    const schema = {
        firstName: Joi.string().min(2).max(50).required(),
        lastName: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        contactNumber: Joi.number(),
        city: Joi.string().min(2).max(1024).required(),
        member: Joi.string()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
