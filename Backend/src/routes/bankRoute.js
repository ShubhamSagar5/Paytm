const express = require('express')
const auth = require('../middleware/auth')
const { transferFunds } = require('../controller/bankController')

const router = express.Router() 


router.post("/transferFund/:to",auth,transferFunds)




module.exports =  router