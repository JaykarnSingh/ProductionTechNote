const express=require('express');
const router=express.Router();
const handleAllUsers=require('../contollers/user')

//admin login api
router.post('/PostUserData',handleAllUsers.loginUser);
router.get('/getAdmindata',handleAllUsers.getAdminData);

router.post('/PostCommentData',handleAllUsers.postComment);
router.get('/getCommentdata',handleAllUsers.getComment);

module.exports=router;