const mongoose = require('mongoose')     //search mongoose schema
const { Schema } =mongoose;              //destructing in js   //call back funtionality in js
const UserSchema = new Schema({         //read about models 
    name:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    }
});
 module.exports = mongoose.model('user', UserSchema)     //whenever it is used, user named collection will be created inside your db                                     
