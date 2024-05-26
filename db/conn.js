   
// database connections
const mongoose = require("mongoose");
require("dotenv").config();

// const uri =process.env.Mongo_URI ;
const uri ='mongodb+srv://jwtuser:pass%4011@cluster0.vzhly.mongodb.net/Rentify' ;

mongoose.connect(uri).then((data) => {
    console.log("DB is connected..");
}).catch((err) => {
    console.log(err);
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database connected sucessfully");
})