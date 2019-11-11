var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
var token=require('../jwt');
 
var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   var Type=req.body.Type;
   
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
              async function tokeng(){
var data=await token.tokenGenerated(results[0].name,results[0].email);

console.log(data);
}
tokeng(results)

              
                res.json({
                    status:true,
                    message:`successfully authenticated and logged in as ${Type}`
                })
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}