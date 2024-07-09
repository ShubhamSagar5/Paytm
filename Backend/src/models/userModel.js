const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre('save',async function (next){
    if(!this.isModified("password")){
        next()
    }
    this.password =  await bcrypt.hash(this.password,10)
})


const User = mongoose.model("User",userSchema)

module.exports = User