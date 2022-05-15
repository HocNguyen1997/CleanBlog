const jwt = require('jsonwebtoken')

module.exports = (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, 'jwt');

        // console.log(decoded);
        // req.userData = decoded;
        next();
    } catch(e){
        res.status(400).json({
            message: 'Auth failed'
        })
    }

}