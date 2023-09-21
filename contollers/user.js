const User = require('../models/admin');
const Comment=require('../models/comment');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'mynameisjaykarnsinghrawatiamfromuttarakhand';


// Login admin...............................
// const loginUser = async (req, res, next) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
  
//   if (!user) {
//     return res.status(401).json({ error: 'Invalid email or password' });
//   }
  
//   if (user.password !== password) {
//     return res.status(403).json({ error: 'Invalid  password' });
//   }
  
//   res.json({
//     status: 200,
//     message: "success",
//     data: {
//       firstName: user.firstName,
//       lastName: user.lastName,
//       email: user.email,
//       phone: user.phone,
//       userRole: user.userRole,
      
//     },
//   });
// }


const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  if (user.password !== password) {
    return res.status(403).json({ error: 'Invalid password' });
  }

  // Create a JWT token
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    JWT_SECRET_KEY,
    { expiresIn: '1h' } // Token expires in 1 hour (adjust as needed)
  );

  res.json({
    status: 200,
    message: 'success',
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      userRole: user.userRole,
    },
    token: token, // Send the generated token back to the client
  });
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token is invalid' });
    }
    req.userId = decoded.userId;
    next();
  });
};




//admin data get
const getAdminData = async (req, res, next) => {
const user=await User.find();
if (!user) {
  return res.status(401).json({ error: 'not admin data' });
}

if (user) {
  return res.status(200).json(user);
}

}

//comment data........................
const postComment=(req,res,next)=>{
  const user=new Comment(req.body)
  const result=user.save();
  res.send(result);
  }
  //get user data
  const getComment = async (req, res, next) => {
      try {
        const users = await Comment.find();
        if (users.length > 0) {
          res.send(users);
        } else {
          res.send({ result: "no users found" });
        }
      } catch (error) {
        next(error); 
      }
    };



module.exports = {
  loginUser,
  verifyToken,
  getAdminData,

  postComment,
  getComment
};
