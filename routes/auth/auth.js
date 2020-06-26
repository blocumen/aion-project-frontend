
var authenticateController = require('../../controllers/authenticateController.js');
var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/',authenticateController.signIn);
// router.get('/dashboard', isLoggedIn, authenticateController.dashboard);
// router.get('/logout', authenticateController.logout);
// router.post('/signin',authenticateController.dashboard);

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        res.redirect('/');
    }
}
module.exports = router;

