var express = require('express');
var adminController  = require('../../controllers/adminController.js')
var router = express.Router();



router.get('/shopper',isLoggedIn,adminController.showShopper);
router.post('/shopper/create', isLoggedIn, adminController.addShopper);
router.post('/shopper/detailById', isLoggedIn, adminController.shopperDetailById);
router.post('/shopper/update', isLoggedIn, adminController.updateShopper);
router.get('/shopper/list', isLoggedIn, adminController.getAllShoppers);

router.delete('/shopper/delete', isLoggedIn, adminController.deleteShopper);

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        res.redirect('/auth');
    }
}

module.exports = router;