//req-responses
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signUpController = async (req, res) => {
    try {
      const { name, email, password, role, className, enrollmentNumber } = req.body;
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
      const newUser = new User({
        name,
        email,
        password,
        role,
        className,
        enrollmentNumber,
      });
  
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  const loginController = async(req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });   
        if (!user) {
          return res.status(401).json({ message: 'Authentication failed' });
        }
        // const isRole = await User.findOne({role});
        // if(!isRole){
        //     return res.status(401).json({ message: 'Authentication failed' });
        // }
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Authentication failed' });
        }
    
        // Generate a JWT token for the user
        const token = jwt.sign(
          { userId: user._id, email: user.email },
          'your-secret-key', // Replace with a strong, secret key
          { expiresIn: '1h' } // Token expiration time
        );
    
        res.status(200).json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
  }
  module.exports={
    signUpController,
    loginController
  }