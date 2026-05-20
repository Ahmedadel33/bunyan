const mongoose = require("mongoose");
const connect_db=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL)
      console.log("connected");
  }catch(error){
    console.log(error);
  }
}
module.exports =connect_db;