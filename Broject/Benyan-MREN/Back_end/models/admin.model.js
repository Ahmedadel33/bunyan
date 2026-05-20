//require mongoose
const mongoose=require ("moongose")
const bcrybt= require("bcrypt");
// schema 
const adminschema=new mongoose.schema({
username:{
  type :String,
  required :[true , "userName is required"]
},
Email:{
  type :String,
  required :[true , "userName is required"]
  },

password:{
  type :String,
  required :[true , "password is required"],
  minlength:[6 ,"Password must be 6 char"],
  select:false,

}
},{timestamps :true})

//Hook
 adminschema.pre("save",async function(next){
  if(!this.isModified("password") )return next();
  this.password=await bcrybt.hash(this.password , 10)  
 })

//methods
adminschema.methods.comparePassword = async function(matched) {
  return await bcrypt.compare(matched , this.password);
};


 //model 
const Admin=mongoose.model("admin",adminschema)
//Export
module.exports=Admin;