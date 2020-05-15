var knex = require('knex')({

    client: 'mysql',
    
    connection: {
    
        host : 'localhost',
    
        user : 'root',
    
        password : 'bijusrt123',
    
        database : 'student_inventory'
    
    }
 
});

module.exports = knex;