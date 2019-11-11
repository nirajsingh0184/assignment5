
const jwt=require('jsonwebtoken');
var data={};

    data.verifying=(token)=>{
        return new Promise((resolve,reject)=>{
        jwt.verify(token,'secretkey',(err,authData)=>{
        if(err){
            resolve(err.message)
        }else{
   resolve(authData);
}
});
})
    }

    data.tokenGenerated=(name,email)=>{
        //console.log("hello world");
        
        return new Promise((resolve,reject)=>{
        jwt.sign({name:name,email:email},'secretkey',{expiresIn:"400s"},(err,token)=>{
if(!err){
    resolve(token)
}
    });
})
}

function verifyToken(req,res,next){
    const bearerHeader=req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
const bearer=bearerHeader.split(' ');
const bearerToken=bearer[1];
req.token=bearerToken;
next();
    }else{
        res.sendStatus(403);
    }
    }

module.exports = data;