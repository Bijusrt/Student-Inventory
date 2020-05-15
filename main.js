const express = require('express');

const app = express();

const router = express.Router();


app.use(express.json());

app.use(require('morgan')('dev'));



app.use(require('./router/signup'));

app.use(require('./router/login'));
 
app.use(require('./router/entries'));

app.use(require('./router/get'));

app.use(require('./router/delete'));



app.use((req,res,next)=>{

    var error = new Error("Could Not Find What You Expected! ")
    
    error.status = 404;
    
    next(error);

});


app.use((error,req,res,next)=>{

    // console.log(error);
    
    error.status = (error.status || 500 );
   
    res.json({
   
        message:error.message
   
    })

});



app.listen(8080, () =>{ 
  
    console.log(`successfully connected to the host with knex!!!`)
  
});
  