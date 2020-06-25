var express = require('express');
var router = express.Router();
var adminController = require('../../controllers/adminController.js')

router.get('/bar',isLoggedIn,adminController.showBar);
router.post('/bar/create',isLoggedIn,adminController.addBar);
router.get('/bar/list',isLoggedIn,adminController.getAllBars);
router.post('/bar/detailById',isLoggedIn,adminController.barDetailById);
router.post('/bar/update',isLoggedIn,adminController.updateBar)
router.delete('/bar/delete', isLoggedIn, adminController.deleteBar);
router.get('/bar/viewScore/:barId/:barName',adminController.viewBarScore);
router.get('/viewScoreBar/ajax',isLoggedIn,adminController.viewScoreBarWithDate);
router.post('/bar/images',adminController.openImageUpdate);
router.post('/bar/updateImage',adminController.imageUpdate);
router.delete('/image/delete',adminController.deleteImage);

function isLoggedIn(req,res,next){

    if(req.isAuthenticated()){
        return next();
    }else{
        res.redirect('/auth');
    }
}

module.exports = router;