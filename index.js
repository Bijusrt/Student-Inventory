const mysql = require('mysql');

const express = require('express');

const app = express();

app.use(express.json());

var con = mysql.createConnection({

  host: "localhost",
  
  user: "root",
  
  password: "bijusrt123",

  database : "student_inventory"

});

con.connect();

app.post('/login',(req,res)=>{
  
  let userName = req.body.username;
  
  let passWord = req.body.password;

  con.query("select* from login_details",(err,result)=>{

    if (err) throw (err);

    for(var i of result){

      if (userName === i.Username){

        if (passWord === i.Password){

          con.query("select * from details where UserId = ?",[i.Id],(err,result)=>{

            res.send(result);

          });

        };

      };

    };

  });

});

app.post('/signup',(req,res)=>{

  let userName = req.body.username;
  
  let passWord = req.body.password;

  let id = req.body.id;

  con.query("insert into login_details (Id,Username,Password) values(?,?,?)",[id,userName,passWord],(err,result)=>{
    
    if (err) throw (err);
  
    res.send("registered successfully!!!");

  });

});
``
app.post('/entries',(req,res)=>{

  let name = req.body.name;

  let userId = req.body.userid;

  let qualification = req.body.qualification;

  let dob = req.body.dob;

  let address = req.body.address;

  con.query("insert into details (Name,UserId,Qualification,DOB,Address) values(?,?,?,?,?)",[name,userId,qualification,dob,address],(err,result)=>{
    
    if (err) throw (err);
    
    res.send('success!!!')
  
  });
  
})

app.listen(8080, () =>{ 
  
  console.log(`successfully connected to the host!!!`)

});

