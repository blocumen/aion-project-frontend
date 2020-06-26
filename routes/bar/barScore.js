var express = require('express');
var router = express.Router();
var shopperController = require('../../controllers/shopperController.js')

router.get('/barScore',shopperController.showBarScore);
router.get('/barScore/list',shopperController.getBarScore);


module.exports = router;
