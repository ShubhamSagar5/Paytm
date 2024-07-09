const mongoose = require('mongoose')


const connection = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"Paytm"
        })
        .then(()=>{
            console.log('Database Connnect Successfully')
        })
        .catch((err)=>{
            console.log("Something Error During Database Connection"+err.message)
        })
    } catch (error) {
        console.log("Something Error During Database Connection" + err.message)
    }
}

module.exports = connection