const express = require("express");
const router = express.Router();
const { register_user,getMe} = require("../controllers/userController");
//router.get('/me');

//router.post('/login')
router.post('/register',register_user);



module.exports = router;