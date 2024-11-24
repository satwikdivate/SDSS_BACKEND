const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/db");
const app = express();
const cors=require("cors")
const port = process.env.PORT || 4000;
const userRouter=require("./router/userRouter");
const personalProfileRouter=require("./router/Profile");
const fileUpload=require("express-fileupload");
const { cloudinaryConnect } = require("./config/cloundinary");
require("dotenv").config();
app.use(bodyParser.json());
app.use(express.json());
// app.use(cookieParser())
app.use(
 cors({
    origin:'http://localhost:3000',
    credentials:true
 })   
)

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp"
}))

app.listen(process.env.PORT,(req,res)=>{
  console.log(`Conneted at ${process.env.PORT}`)
})

cloudinaryConnect();
app.use("/v1/user",userRouter);
app.use("/v1/profile/personalProfile",personalProfileRouter);


















