const mongoose = require("mongoose")
const {models} = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    name : String,
    email :  String,
    password : String

})

const RegisterModel = mongoose.model("users", RegisterSchema)

module.exports = RegisterModel