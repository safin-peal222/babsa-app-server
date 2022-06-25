const mongoose = require('mongoose');
const express= require("express");
const app= express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const port = 5000;
const userHandler=require('./routerHandler/userHandler');

mongoose.connect('mongodb+srv://babsa-app:2pnw6Hf4no1P9oJf@cluster0.h0u2e.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("connection successfull")
}).catch((err)=>{
    console.log(err);
});


    //  mongoose.connect('mongodb+srv://geniusMechanic:odZHdr44UD75TWx1@cluster0.h0u2e.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    //      console.log("connection successfull")
    //  }).catch((err)=>console.log(err));
 

 app.use("/users",userHandler);


app.get("/",(req,res)=>{
    res.send("hello word");
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })