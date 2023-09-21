const mongoose=require('mongoose')
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, 'config.env') });




    const DB = "mongodb+srv://jaykarn:jaykarn@cluster0.ujncegx.mongodb.net/";

   mongoose.connect(DB, {
    useNewUrlParser: true,
   useUnifiedTopology: true,
   }).then(() => {
 console.log('Connected to MongoDB Atlas');
  }).catch((error) => {
 console.log('Error connecting to MongoDB Atlas:', error);
  });


