const express = require('express')
const auth = require('../middleware/auth')
const { transferFunds, getBalance } = require('../controller/bankController')

const router = express.Router() 


router.post("/transferFund/:to",auth,transferFunds)
router.get("/getBalance",auth,getBalance)




module.exports =  router