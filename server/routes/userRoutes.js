const express = require('express');
const router = express.Router();
const user = require('../controllers/authController')

router.post('/signup', user.signUpController);

router.post('/login',user.loginController);


module.exports = router;