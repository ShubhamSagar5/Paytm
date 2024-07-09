const zod = require('zod')
const User = require('../models/userModel')
const Account = require('../models/bankModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const zodSchema = zod.object({
    email:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()
    
})

//User Sign Up

const signUp = async(req,res) => {
    try {
        
        const {email,firstName,lastName,password} = req.body 

        if(!email || !firstName || !lastName || !password){
            return res.status(400).json({
                success:false,
                message:"Please Provide All Details,some of the field missing!"
            })
        }

        const zodCheck = zodSchema.safeParse(req.body)

        if(!zodCheck.success){
            return res.status(400).json({
                success:false,
                message:"Please Provide valid data"
            })
        } 

        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({
                success:false,
                message:"User Already Available with this email"
            })
        }

        const createUser = await User.create({
            email:email,
            firstName:firstName,
            lastName:lastName,
            password:password
        })

        const createAccountBalance = await Account.create({
            userId:createUser._id,
            balance: 1 + Math.random() * 10000
        })

       

        const token = jwt.sign({userId:createUser._id},process.env.JWT_SECRET_KEY,{
            expiresIn:process.env.JWT_EXPIRES
        })

        return res.cookie("Token",token).status(200).json({
            success:true,
            message:"User Sign In Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


const login = async(req,res) => {
    try {
        const {email,password} = req.body

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please Provide Email and Password,some of the field missing!"
            })
        }

        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User Not Found With this email "
            })
        }

        const passwordCheck = await bcrypt.compare(password,user.password)

        if(!passwordCheck){
            return res.status(401).json({
                success:false,
                message:"Password do not match "
            })
        }

        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY,{
            expiresIn:process.env.JWT_EXPIRES
        })

        return res.cookie("Token",token).status(200).json({
            success:true,
            message:"User Login In Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


const updateData = async(req,res)=>{
    try {
        const {email,firstName,lastName,password} = req.body 

        const userId = req.userId

        if(!email || !firstName || !lastName || !password){
            return res.status(400).json({
                success:false,
                message:"Please Provide All Details,some of the field missing!"
            })
        }

        const zodCheck = zodSchema.safeParse(req.body)

        if(!zodCheck.success){
            return res.status(400).json({
                success:false,
                message:"Please Provide valid data"
            })
        } 

        const hashPassword = await bcrypt.hash(password,10)
        const user = await User.findByIdAndUpdate(userId,{email,firstName,lastName,password:hashPassword})

        if(!user){
            return res.status(400).json({
                success:false,
                message:"Error During User Data Update"
            })
        }

        return res.status(200).json({
            success:true,
            message:"User Data Update Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}



module.exports = {
    signUp,
    login,
    updateData
}