const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add Name']
    },
    email:{
        type:String,
        required:[true,'Please add Username'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add Password']
    },
    user_role:{
        type:String,
        required:[true,'Please add usr role']
    }
},
{
    timestamps:true   
})

module.exports = mongoose.model('User',userSchema)