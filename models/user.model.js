const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname:{
        type:String,
        required: true,
    },
    lname:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    mobile:{
        type: String,
        required: true,
        lowercase: true,
    },
    password:{
        type:String,
        minLength:4,
        required:true
    },
    usertype :{
        type :String
    }
})

const User = mongoose.model("user", UserSchema);
module.exports = User;