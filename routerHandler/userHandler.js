const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();
const ObjectId = require('mongodb').ObjectId;
const app= express();
app.use(express.json());
const userSchema= require("../schemas/userSchema");
const users = new mongoose.model("users",userSchema);



router.post("/sign-up",(req,res)=>{
    // const user= JSON.parse(req.body);

    // console.log(typeof(req.body.email));
    const user= req.body;
    console.log(user);

     var ourUsers = new users(user);
     ourUsers.save((err)=>{
       if(err){
        console.log("there is an error");
        res.send(err);
       }else{
           console.log("added");
       }
     })
    //  .then(() => {
    //   console.log("added in database");
    //  })
    //  .catch((err) => {
    //      res.json(err)
    //  })
});

router.get("/all-users",async(req,res)=>{
  // const allUsers =await users.find({}).catch((err)=>{
  //   console.log(err);
  // });
  // console.log(allUsers);
  // res.send(allUsers);

  // res.send("hello world");

  await users.find({status:"unconfirmed"}).then((result)=>{
    // console.log("sent");
    res.send(result);
  
  }).catch((err)=>{
    console.log(err);
  })

});


router.get("/all-users/confirmed-users",async(req,res)=>{
  const doc = await users.find({status:"confirmed"});
 res.send(doc);
})

router.get("/all-users/:id",async(req,res)=>{
  
  id= req.params.id;
  
const filter={_id:ObjectId(id)};
const update={status:"confirmed"};
let doc = await users.findOneAndUpdate(filter, update, {
  new: true,
  upsert: true
});
 res.send(id);
 console.log(id);
});

router.get("/all-users/confirmed-users/:id",async(req,res)=>{
  console.log(req.params.id);
  const id = req.params.id;
  const doc = await users.findById(id);
  res.send(doc);
})

module.exports =router;