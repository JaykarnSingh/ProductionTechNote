const mongoose=require('mongoose')
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, 'config.env') });




    const DB =process.env.DATABASE;

   mongoose.connect(DB, {
    useNewUrlParser: true,
  
   }).then(() => {
 console.log('Connected to MongoDB Atlas');
  }).catch((error) => {
 console.log('Error connecting to MongoDB Atlas:', error);
  });


