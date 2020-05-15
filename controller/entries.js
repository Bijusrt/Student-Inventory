const knex = require('../model/connector')

module.exports = (req,res)=>{

    let insert_Dic = {};

    insert_Dic.name = req.body.name;

    insert_Dic.userId = req.body.userid;

    insert_Dic.qualification = req.body.qualification;

    insert_Dic.dob = req.body.dob;

    insert_Dic.address = req.body.address;

    knex('details').insert(insert_Dic).then(result=>{
        
        res.send('success!!!');
    
    }).catch(err=>{

        console.log("thapula vennai!!!",err);
 
    })
 
}