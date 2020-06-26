var express = require('express');
var router = express.Router();
var shopperController = require('../../controllers/shopperController.js')

router.get('/bar',shopperController.showBars);
router.get('/bar/list',shopperController.getAllBars);
router.post('/bar/score/detailById',shopperController.editScore);
router.get('/bar/ajax',shopperController.getScoresWithDate);
router.get('/bar/viewScore/:barId/:barName',shopperController.viewScore);
router.post('/bar/detailById',shopperController.barDetailById)
router.post('/bar/scoreUpdate',shopperController.scoreUpdate);
router.post('/bar/ratingUpdate',shopperController.ratingUpdate);
router.post('/bar/images',shopperController.openImageUpdate);
router.post('/bar/updateImage',shopperController.imageUpdate);
router.delete('/image/delete',shopperController.deleteImage);
module.exports = router;
