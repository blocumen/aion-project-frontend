var models = require('../models');
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');
var sequelize = require('../models/connection');
var dateTime = require('node-datetime');
var rawQuery = require('../dbmodels/query');
var _ = require('lodash');
var moment = require('moment');
var multer = require('multer');


function decodeBase64Image(dataString) {

    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
    var response = {}

    if (matches.length !== 3) {
        return new Error('Invalid input string')
    }

    response.type = matches[1]
    response.data = new Buffer(matches[2], 'base64')

    return response
}


module.exports = {
    getBarScore: function(req, res) {

        var Bar = models.bars;
        var Score = models.scores;
        Bar.findOne({
            where: {
                email: req.session.email
            }
        }).then(function(bar) {
            Score.findAll({
                where: {
                    barId: bar.barId
                }
            }).then(function(scores) {
                if (scores) {
                    req.session.barName = bar.barName;
                    res.json({
                        message: scores,
                        barname: bar.barName,
                        status: true
                    })
                }
            })
        })
    },
    showBarScore: function(req, res) {
        res.render('bar/barScore', { 'session': req.session });
    },
    deleteImage: function(req, res) {
        var IMAGE = models.images;

        IMAGE.findOne({
            where: {
                imageId: req.body.imageId
            }
        }).then(function(bar) {
            bar.destroy();
            res.json({
                status: true
            })
        })
    },
    openImageUpdate: function(req, res) {
        req.checkBody('barId', 'Bar Id is Required').notEmpty()
        const Op = sequelize.Op;
        var Image = models.images;

        Image.findAll({
            where: {
                [Op.or]: [{
                    [Op.and]: [{
                        barId: req.body.barId,
                    }, {
                        shopperId: global.userid
                    }]
                }, {
                    [Op.and]: [{
                        barId: req.body.barId,
                    }, {
                        shopperId: null
                    }]
                }]

            }
        }).then(function(image) {
            if (image) {
                res.json({
                    status: true,
                    message: image
                })
                return
            } else {
                res.json({
                    status: false,

                })
                return
            }
        }, function(err) {
            if (err)
                console.log(err);
            res.status(400).send();
        })
    },
    imageUpdate: function(req, res) {
        var Image = models.images;
        if (req.body.logo != '') {
            var n = Date.now()
            var name = 'productlogo' + n
            var imageTypeRegularExpression = /\/(.*?)$/
                // var base64Data = req.body.logo.replace(/^data:image\/png;base64,/, "");

            var base64Data = decodeBase64Image(req.body.logo)
            console.log(base64Data)
            var imageTypeDetected = base64Data.type.match(imageTypeRegularExpression)
            var userUploadedImagePath = 'assets/public/img/' + name + '.' + imageTypeDetected[1]

            require('fs').writeFile(userUploadedImagePath, base64Data.data, function(err) {
                // oPost.productImage =
                var updateModel = {}
                updateModel['imageName'] = name + '.' + imageTypeDetected[1]
                updateModel['barId'] = req.body.barId
                updateModel['shopperId'] = global.userid

                Image.create(updateModel).then(function(image, created) {
                    if (image) {
                        res.json({
                            status: true,
                            message: image
                        });

                        return
                    }
                })

            })
        }
    },
    showBars: function(req, res) {

        res.render('shopper/bar', { 'session': req.session });
    },


    getAllBars: function(req, res) {
        var BARS = models.bars;
        BARS.findAll({}).then(function(bar) {
            if (bar) {
                res.json({
                    status: true,
                    message: bar
                })

                return
            } else {
                res.json({
                    status: false,
                })
                return
            }
        }, function(err) {
            if (err)
                res.status(400).send()
        })
    },




    scoreUpdate: function(req, res) {
        //req.checkBody('barId','Bar Id is required').notEmpty()
        console.log(req.params.scoreId, "1266")
        var Score = models.scores;
        Score.findOne({
            where: {
                scoreId: req.body.scoreId
            }
        }).then(function(score) {
            if (score) {
                var updateScore = {};
                _.forEach(req.body, function(value, key) {

                    updateScore[key] = value;
                })

                var averageScore = (parseInt(updateScore.param1) + parseInt(updateScore.param2) + parseInt(updateScore.param3) + parseInt(updateScore.param4) + parseInt(updateScore.param5) + parseInt(updateScore.param6) + parseInt(updateScore.param7) + parseInt(updateScore.param8) + parseInt(updateScore.param9));
                Object.assign(updateScore, { averageScore: averageScore });


                score.update(updateScore, {
                    fields: Object.keys(updateScore)
                }).then(function(scoreUpdate) {

                    if (scoreUpdate) {
                        res.json({
                            status: true,
                            message: scoreUpdate
                        })
                    } else {
                        res.json({
                            status: false
                        })
                    }
                })
            }
        })
    },
    getScoresWithDate: function(req, res) {
        const Op = sequelize.Op;
        var startDate = req.query.minD + " 00:00:00 UTC";
        console.log(startDate, "822")
        var endDate = req.query.maxD + " 23:59:59 UTC";
        var newDate1 = new Date(startDate);
        var newDate2 = new Date(endDate);
        // var startDate =  req.query.minD;
        // var endDate =  req.query.maxD;
        var Score = models.scores;
        Score.findAll({
            where: {
                [Op.and]: [{
                        barId: req.query.barId,
                    }, {
                        shopperId: global.userid
                    },
                    {
                        createdAt: {
                            [Op.gte]: startDate,
                            [Op.lte]: endDate
                        }
                    }
                ]
            }
        }).then(function(scores) {
            if (scores) {
                res.json({
                    status: true,
                    moment: moment,
                    message: scores
                })


            }
        })
    },

    viewScore: function(req, res) {
        const Op = sequelize.Op;
        var Score = models.scores;
        Score.findAll({
            where: {
                [Op.and]: [{
                    barId: req.params.barId,
                }, {
                    shopperId: global.userid
                }]
            }
        }).then(function(scores) {

            if (scores) {
                res.render('shopper/viewScore', { message: scores, moment: moment, barId: req.params.barId, barName: req.params.barName, 'session': req.session });

                return
            } else {
                res.json({
                    status: false
                })
                return
            }

        }, function(err) {
            if (err) {
                res.status(400).send();
            }
        })
    },

    editScore: function(req, res) {
        var Score = models.scores;
        Score.findOne({
            where: {
                scoreId: req.body.scoreId
            }
        }).then(function(score) {
            if (score) {
                res.json({
                    status: true,
                    message: score
                })
                return
            } else {
                res.json({
                    status: false
                })
                return
            }
        }, function(err) {
            if (err) {
                res.status(400).send();
            }
        })
    },


    ratingUpdate: function(req, res) {
        var Score = models.scores;
        var data = {
                shopperId: global.userid,
                barId: req.body.barId,
                param1: req.body.param1,
                param2: req.body.param2,
                param3: req.body.param3,
                param4: req.body.param4,
                param5: req.body.param5,
                param6: req.body.param6,
                param7: req.body.param7,
                param8: req.body.param8,
                param9: req.body.param9,
                comments: req.body.comments

            }
            //  imageUpdate(req.body);
        var averageScore = (parseInt(req.body.param1) + parseInt(req.body.param2) + parseInt(req.body.param3) + parseInt(req.body.param4) + parseInt(req.body.param5) + parseInt(req.body.param6) + parseInt(req.body.param7) + parseInt(req.body.param8) + parseInt(req.body.param9));
        Object.assign(data, { averageScore: averageScore });
        Score.create(data).then(function(newScore, created) {
            if (newScore) {
                res.json({
                    status: true,
                    message: newScore
                });
                return
            }
        })
    },
    barDetailById: function(req, res) {
        req.checkBody('barId', 'Bar Id is Required').notEmpty()
        var BAR = models.bars;

        BAR.findOne({
            where: {
                barId: req.body.barId
            }
        }).then(function(bar) {
            if (bar) {
                res.json({
                    status: true,
                    message: bar
                })
                return
            } else {
                res.json({
                    status: false,

                })
                return
            }
        }, function(err) {
            if (err)
                console.log(err);
            res.status(400).send();
        })
    },

    showScoreManagement: function(req, res) {
        var Scores = models.scores;
        var Bars = models.bars;
        var Users = models.users;
        Scores.findAll({
            where: {
                shopperId: global.userid
            }
        }).then(function(scores) {
            if (scores) {

                var shopperId = global.userid
                var tbl = sequelize.query("Select B.barName,C.* from  scores C JOIN bars B ON C.barId =B.barID where C.shopperId =  " + global.userid + "", {
                    type: sequelize.QueryTypes.SELECT
                }).then(function(rows) {
                    if (rows) {
                        res.render('shopper/scoreManagement', { message: rows, moment: moment, 'session': req.session })
                        return
                    } else {
                        res.json({
                            status: false,
                        });
                    }
                }, function(err) {
                    console.log(err);
                    res.status(400).send();
                });

                return
            } else {
                res.json({
                    status: false
                })
                return
            }
        }, function(err) {
            if (err)
                res.status(400).send();
        })
    },

    editScoreManagement: function(req, res) {
        var Score = models.scores;
        Score.findOne({
            where: {
                scoreId: req.body.scoreId
            }
        }).then(function(score) {
            if (score) {
                res.json({
                    status: true,
                    message: score
                })
                return
            } else {
                res.json({
                    status: false
                })
                return
            }
        }, function(err) {
            if (err) {
                res.status(400).send();
            }
        })
    },

    scoreUpdateManagement: function(req, res) {
        var Score = models.scores;
        Score.findOne({
            where: {
                scoreId: req.body.scoreId
            }
        }).then(function(score) {
            if (score) {
                var updateScore = {};
                _.forEach(req.body, function(value, key) {
                    console.log(key)
                    updateScore[key] = value;
                    console.log(updateScore[key])
                })

                JSON.stringify(updateScore)
                var averageScore = (parseInt(updateScore.param1) + parseInt(updateScore.param2) + parseInt(updateScore.param3) + parseInt(updateScore.param4) + parseInt(updateScore.param5) + parseInt(updateScore.param6) + parseInt(updateScore.param7) + parseInt(updateScore.param8) + parseInt(updateScore.param9));
                Object.assign(updateScore, { averageScore: averageScore });
                score.update(updateScore, {
                    fields: Object.keys(updateScore)
                }).then(function(scoreUpdate) {

                    if (scoreUpdate) {
                        res.json({
                            status: true,
                            message: scoreUpdate
                        })
                    } else {
                        res.json({
                            status: false
                        })
                    }
                })
            }
        })
    },

    scoreManagementWithDate: function(req, res) {
        var Score = models.scores;
        Score.findAll({
            where: {
                shopperId: global.userid
            }
        }).then(function(scores) {
            if (scores) {
                var minDate = req.query.minD + " 00:00:00";
                var maxDate = req.query.maxD + " 23:59:59";
                var tbl = sequelize.query("Select B.barName,C.* from  scores C JOIN bars B ON C.barId =B.barID where (C.shopperId =  " + global.userid + ") AND (C.createdAt BETWEEN " + "'" + minDate + "'" + " AND " + "'" + maxDate + "'" + ")", {
                    type: sequelize.QueryTypes.SELECT
                }).then(function(rows) {
                    if (rows) {
                        console.log(rows)
                        res.json({
                            status: true,
                            moment: moment,
                            message: rows
                        })
                        return
                    }
                })
            } else {
                res.json({
                    status: false
                })
                return
            }
        })
    }
}