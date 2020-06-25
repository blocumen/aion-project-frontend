var express = require('express');
var router = express.Router();
var shopperController = require('../../controllers/shopperController.js');

router.get('/scores',shopperController.showScoreManagement);
router.post('/bar/score/detailById',shopperController.editScoreManagement);
router.post('/scoreUpdateManagement',shopperController.scoreUpdateManagement);
router.get('/scoreManagement/ajax',shopperController.scoreManagementWithDate);

module.exports = router;
