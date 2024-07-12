const mongoose = require('mongoose')
const Account = require('../models/bankModel')
const User = require('../models/userModel')


const transferFunds = async(req,res) => {
    const session = await mongoose.startSession()
    try {
       
        session.startTransaction() 

        const from = req.userId
        const to = req.params.to
        const amount = req.body.amount 

        // console.log(from,to,amount)

        const account = await Account.findOne({userId:from}).session(session)

        if(!account){
            await session.abortTransaction()
            return res.status(401).json({
                success:false,
                message:"Account Not Found Please LogIn or SignUp"
            })
        }

        if(account.balance < amount){
            await session.abortTransaction()
            return res.status(400).json({
                success:false,
                message:"You have insufficient balance"
            })
        }

        const toAcc = await Account.findOne({userId: to}).session(session)

        if(!toAcc){
            await session.abortTransaction()
            return res.status(404).json({
                success:false,
                message:"Invalid Account of Reciver please check reciver ID"
            })
        }
       
       const fromAccUpdate =  await Account.updateOne(
            {userId:from},
        {'$inc':{
            balance: -amount}},
            {session:session}
        )

        if(!fromAccUpdate){
            return res.status(404).json({
                success:false,
                message:"Failed to update Sender Acc"
            })
        }

        const toAccUpdate  = await Account.updateOne({userId:to},{'$inc':{balance: amount}},{session:session})
       

        if(!toAccUpdate){
            return res.status(404).json({
                success:false,
                message:"Failed to update Reciver Acc"
            })
        }


        await session.commitTransaction()
        session.endSession();
        return res.status(200).json({
            success:true,
            message:"Money Transfer Successfull "
        })

    } catch (error) {
        await session.abortTransaction();
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const getBalance = async(req,res) => {
    try {
        const userId = req.userId 

        const balance = await Account.findOne({userId:userId})
        
        return res.status(200).json({
            success:true,
            message:`Your Available Balance is Rs:-${balance.balance.toFixed(2)}`
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


module.exports = {
    transferFunds,
    getBalance
}