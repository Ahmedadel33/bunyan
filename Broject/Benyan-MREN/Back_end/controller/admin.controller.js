//model
const Admin = require("../models/admin.model")
//joi validation
const joi = require("./validation/admin.validation")
//jwt
const jwt=require ("jsonwebtoken");
const signToken =(id)=>{
return jwt.sign({id} ,process.env.SK_JWT,{expiresin:"7d"})
};

//login controller
//Export