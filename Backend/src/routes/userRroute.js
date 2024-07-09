const express = require('express')
const { signUp, login, updateData } = require('../controller/userController')
const auth = require('../middleware/auth')

const router = express.Router() 

router.post("/signUp",signUp)
router.post("/login",login)
router.post("/update",auth,updateData)


module.exports =  router