const knex = require('../model/connector')

module.exports = (req,res)=>{

    let userName = req.body.username;
  
    let passWord = req.body.password;

    knex.select().from('login_details').then(result=>{

        var user_Flag = true;

        var password_Flag = true;

        for (var i of result){

            if (i.Username === userName){

                user_Flag = false;
            
                if (i.Password === passWord){

                    password_Flag = false;
            
                }
            
            }
        
        }

        if (user_Flag === true){

            res.send('username thapula vennai!!!');
        
        }else if(password_Flag === true){

            res.send('password thapula komba!!!')
        }else{

            jwt.sign(userName,'solla matene ne ena panuva!',(err,token)=>{

                if (err) throw err;

                res.json(token)

            })
            
        }
    
    })

}