const mongoose = require('mongoose')

const bankSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    balance:{
        type:Number,
        required:true
    }
})

const Account = mongoose.model("Account",bankSchema)

module.exports = Account