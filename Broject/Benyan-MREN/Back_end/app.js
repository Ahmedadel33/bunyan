const connect_db =require ("./config/db")
const mongoose = require("mongoose")
require("dotenv").config();
const express =require("express")
const app = express();
app.use(express.json());

//logs
if(process.env.NODE_ENV === "dev"){
app.use((req,res,next)=>{
  console.log(`${req.method} ${req.originalUrl}`);
  next();
})
}

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);


app.get("/test" , (req,res)=>{
res.status(200).json({msg:"Test route"})
})

const PORT =process.env.PORT || 3000

connect_db()


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
