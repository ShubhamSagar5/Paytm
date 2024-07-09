const express = require('express') 
const cors = require('cors')
const dotenv = require('dotenv')
const userRouter = require("./routes/userRroute")
const bankRouter = require("./routes/bankRoute")
const connection = require('./database/database')

const app = express() 

dotenv.config({
    path:"./config/.env"
})

app.use(cors())
app.use(express.json()) 

app.use("/api/v1/user",userRouter)
app.use("/api/v1/bank",bankRouter)






connection()

app.use((error,req,res,next)=>{
    return res.status(500).json({
        message:error.message
    })
})

app.listen(process.env.PORT,(req,res)=>{
    console.log("Server is listing on Port No " + process.env.PORT)
})