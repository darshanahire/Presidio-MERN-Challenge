const mongoose = require("mongoose");
const { object } = require("webidl-conversions");
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    propimg:{
        type : String,
    },
    type:{
        type:String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    area:{
        type: Number,
        required: true,
    },
    owner:{
        type:String,
    },
    address :{
        type : Object,
    }
})

const Property = mongoose.model("property", PropertySchema);
module.exports = Property;