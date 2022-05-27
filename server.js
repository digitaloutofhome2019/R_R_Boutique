const { urlencoded } = require("express");
const env = require('dotenv').config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectdb = require("./config/db.js");

connectdb();
app.use(express.json());
app.use(urlencoded({extended:false}))
app.use(cors({
    origin:['http://localhost/3000'],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))

app.use("/api/users",require("./routes/userRoute"));

app.listen(port,function(){
    console.log(`server started at port: ${port}`);
});