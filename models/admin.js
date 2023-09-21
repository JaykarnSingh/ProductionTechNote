
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
   
   firstName:{
    type:String
   },
   lastName:{
    type:String
   },
   email:{
    type:String
   },
   password:{
    type:String
   },
   phone:{
    type:String
   },
   userRole:{
    type:String
   }
})

const User=mongoose.model("admin",userSchema);
module.exports=User;