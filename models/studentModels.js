const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 5
    },

    age : {
        type : Number,
        min : 18 , max : 30
    },
    email : {
        type : String,
        unique : true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("Invalid Email");
        }
    },
    phoneNumber : {
        type : Number,
        
        unique : true , required : true
    },
    address : {
        type : String,
        required : true
    }
});

// creating the model for queries

const studentModel = new mongoose.model("studentInfo",studentSchema);

module.exports = {studentModel};
