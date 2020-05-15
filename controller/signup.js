const knex = require('../model/connector')

module.exports=(req,res)=>{

    let signup_Dic = {};

    signup_Dic.userName = req.body.username;    `1                                                                                                                                                                                                                                  `
  
    signup_Dic.passWord = req.body.password;

    signup_Dic.id = req.body.id;

    knex('login_details').insert(signup_Dic).then(result=>{

        res.send('successfully registered!!!');

    }).catch(err=>{

        res.send(err)

    })
}