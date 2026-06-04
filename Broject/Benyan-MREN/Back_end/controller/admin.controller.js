const Admin = require("../models/admin.model")
const joi = require("./validation/admin.validation")
const jwt=require ("jsonwebtoken");
const signToken =(id)=>{
return jwt.sign({id} ,process.env.SK_JWT,{expiresin:"7d"})
};

