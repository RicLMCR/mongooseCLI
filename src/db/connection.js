require("dotenv").config();
const mongoose = require("mongoose");

const connection = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);//Connect to DB
        console.log("Succesfully connected");

    } catch (error){
        console.log(error)
    }
}

connection();
