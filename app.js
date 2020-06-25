var authenticateController = require('./controllers/authenticateController.js');
var env = require('dotenv').load()
var express = require('express');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var passport = require('passport');
var path = require('path');
var app = express();
var validator = require('express-validator');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var compression = require('compression');
var minify = require('express-minify');
var fileUpload = require('express-fileupload')


// Importing Config File
var config = require('./config')


app.use(bodyParser.urlencoded({limit:"50mb",extended:false,parameterLimit:50000}))
app.use(bodyParser.json({limit : "50mb"}));
app.use(cookieParser());
app.use(compression());
app.use(minify());
app.use(express.static(path.join(__dirname, 'assets')))



// Session Configuration
app.use(session({
    secret : 'keyboard cat',
    session : config.session.secret,
    resave : config.session.resave,
    saveUninitialized : config.session.saveUninitialized
}))

  
app.use(flash());

//Intializing passport
app.use(passport.initialize());
app.use(passport.session());
app.use(validator());

// view engine setup
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

var rroute = require('path').join(__dirname,'/routes')

require('fs').readdirSync(rroute).forEach(function(folder){
    var allRoute = require('path').join(__dirname,'/routes/'+folder)
    require('fs').readdirSync(allRoute).forEach(function(file){
    var routeFile = require(allRoute +'/'+file);
    if(folder==='auth'){
        folder = ''
   }
   app.use('/' +folder, routeFile)
})
})

var models = require('./models'); 
require('./passport.js')(passport,models.users);

models.sequelize.sync().then(function(){
    console.log("Database looks fine")
}).catch(function(err){
    console.log("Something went wrong with the database");
})
var port = process.env.PORT || 8010;
app.listen(port);


module.exports = app