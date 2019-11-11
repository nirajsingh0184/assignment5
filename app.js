var express=require("express");
var bodyParser=require('body-parser');

 
var connection = require('./config');
var app = express();
 
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var updateController=require('./controllers/update-controller');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/register', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
 
app.get('/login', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  
app.get('/update', function (req, res) {  
   res.sendFile( __dirname + "/" + "update.html" );  
})
 
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/update',updateController.update);
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.listen(8000);
