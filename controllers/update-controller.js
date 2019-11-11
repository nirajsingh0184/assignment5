var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
var token=require('../jwt');
 
var connection = require('./../config');
module.exports.update=function(req,res){
  console.log("hello 9wrd");
  
    var email=req.body.email;
    var token=req.body.token;
   var Type=req.body.Type;
   console.log(email);
   console.log(token);
   console.log(Type);
   res.json({
     email:email,
     token:token,
     Type:Type
   })
   
   
   
}