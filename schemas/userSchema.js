const mongoose=require("mongoose");
const userSchema = mongoose.Schema({
    name:{
    type: String,
    required: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },

    password:{
        type: String,
        required:true
    },
    instId:{
        type:String,
        required:true

    },
    batch:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    university:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    jobPlace:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
});



module.exports=userSchema;