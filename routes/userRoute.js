//importing modules
const express = require('express')
const userController = require('../controllers/userControllers')
const { signup, login, verifyEmail } = userController
const userAuth = require('../middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middlieware function to the signup 
router.post('/signup', userAuth.saveUser, signup)


//login route
router.post('/login', login )

//email verification route
router.get('/verify-email/:id/:token', verifyEmail)

module.exports = router