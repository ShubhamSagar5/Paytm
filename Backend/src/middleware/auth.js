const jwt = require('jsonwebtoken')


const auth = async (req,res,next) => {
    try {
        const authHeader  = req.headers['authorization']
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized: Missing or invalid token',
            });
        }

        const Token = authHeader.split(' ')[1];
        
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