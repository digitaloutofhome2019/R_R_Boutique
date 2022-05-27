const asyncHandler = require("express-async-handler");
const { model } = require("mongoose");
const User = require("../models/userModel");

// @desc		Get user data
// @route		/api/users/me
// @access		Public
const getMe = asyncHandler(async function(req,res){
    const {_id,name,username} = await User.findById(rec.user.id);
    const data = {
        id:_id,
        name:name,
        username:username
    }

    res.status(200).json({
        data:data
    })
});

// @desc		Get user register
// @route		/api/user
// @access		Public
const register_user = asyncHandler(async function(req,res)
{
 const {name,email,username,password} = req.body

console.log(name,email,username,password);


});



module.exports = {
    getMe,
    register_user
}
