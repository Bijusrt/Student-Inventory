var jwt = require('jsonwebtoken');

module.exports = function middleware (req,res,next) {

    var authentication = jwt.verify(req.headers.authorization,"solla matene ne ena panuva!")
    
    if (authentication === "bijusrt"){
    
        next()
    
    }else if(authentication === req.params.username){

        next()

    }else{

        res.status(400).json('You Must Be Admin To Delete This! ')
        
    }

};