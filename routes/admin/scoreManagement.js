var express = require('express');
var router = express.Router();
var adminController = require('../../controllers/adminController.js');


router.get('/scores',isLoggedIn,adminController.showScoreManagement);
router.post('/bar/score/detailById',isLoggedIn,adminController.editScore);
router.post('/scoreUpdate',isLoggedIn,adminController.scoreUpdate);
router.get('/scoreManagement/ajax',isLoggedIn,adminController.showScoreManagementWithDate);


function isLoggedIn(req,res,next){

    if(req.isAuthenticated()){
        return next();
    }else{
        res.redirect('/auth');
    }
}


module.exports = router;
