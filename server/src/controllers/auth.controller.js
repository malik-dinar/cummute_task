import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// import flash from "express-flash"
// import session from 'express-session'
import initializePassport from "../config/passport-config.js";
import passport from "passport";
initializePassport(
    passport, 
    async email => checkEmailExist(email)   // array -> mongodB
)

const checkEmailExist=async(email)=> {
   const exist = User.findOne({email})
   if(exist) {
     return true;
   }else {
      return false
   }
}

export const userRegister = async (req, res) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).json("Email already exists");

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const { value: userData, error } = await registerSChema.validateAsync(
    req.body
  );
  if (error) return res.status(400).json(error.details[0].message);

  const user = new User({
    fname: userData.fname,
    lname: userData.lname,
    email: userData.email,
    password: hashedPassword,
  });
   
  await user.save().catch((err) => {
    console.log('error while creating user -',err)
    res.status(500).json({ message: "Internal Server Error" });
  });

  res.status(200).json("User Created successfully");
};





export const userLogin = async(req, res, next) => {
  console.log(req);
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, jwtSecret);
  
      return res.json({ token: token });
    });
  })
}




















// async (req, res) => {
//   // validate email and password received
//   const { value: userData, error } = await loginSChema.validateAsync(req.body);
//   if (error) return res.status(400).json(error.details[0].message);

//   // return error response if the a user with email doesnt exist
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) return res.status(404).json("Email not registered");

//   const validPassword = await bcrypt.compare(req.body.password, user.password);
//   if (!validPassword) return res.status(400).json("Incorrect Password");

//   const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

//   res.status(200).json({ token });
// }
