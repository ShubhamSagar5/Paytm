const express = require('express')
const { signUp, login, updateData, findUSer, findAdminData } = require('../controller/userController')
const auth = require('../middleware/auth')

const router = express.Router() 

router.post("/signUp",signUp)
router.post("/login",login)
router.post("/update",auth,updateData)
router.get("/findUser",findUSer),
router.get("/admin/:id",findAdminData)



module.exports =  router