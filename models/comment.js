
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
   
   name:{
    type:String
   },
   message:{
    type:String
   }
})

const Comment=mongoose.model("comment",userSchema);
module.exports=Comment;