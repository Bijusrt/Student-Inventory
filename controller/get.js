const knex = require('../model/connector')

exports.getall = (req,res)=>{

    knex.select().from('login_details').then(result=>{

        res.json(result)

    }).catch(err=>{
        
        res.send(err)

    })

};

exports.get = (req,res)=>{

    knex.select().from('details').where('UserId',req.params.userid).then(result=>{
            
        res.send(result);

    }).catch(err=>{
        
        res.send(err)

    })

};