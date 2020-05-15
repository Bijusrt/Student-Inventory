var jwt = require('jsonwebtoken');

module.exports = function middleware (req,res,next) {

    var authentication = jwt.verify(req.headers.authorization,"solla matene ne ena panuva!")
    
    if (authentication === "bijusrt"){
    
        next()
    
    }else{
    
        res.json({data : "You are not admin! "})
    
    }

};