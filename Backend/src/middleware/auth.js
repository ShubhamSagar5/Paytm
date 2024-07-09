const jwt = require('jsonwebtoken')


const auth = async (req,res,next) => {
    try {
        const {Token} = req.cookies
        if(!Token){
            return res.status(404).json({
                success:false,
                message:"Token Not Found please SignUp or Login"
            })
      }
        const decode = jwt.verify(Token,process.env.JWT_SECRET_KEY)
    
        if(!decode){
            return res.status(403).json({
                success:false,
                message:"Invalid Token"
            })
        }
    
        req.userId = decode.userId

        next()
            
      
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = auth