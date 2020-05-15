const knex = require('../model/connector')

module.exports = (req,res)=>{

    let userid = req.params.userid;

    knex('details').where('UserId',req.params.userid).del().then(result=>{

        res.send('Successfully Deleted!')

    })
};