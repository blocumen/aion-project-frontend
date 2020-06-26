var models = require('../models');
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');
var sequelize = require('../models/connection');
var dateTime = require('node-datetime')
var rawQuery = require('../dbmodels/query');
var _ = require('lodash');
var moment = require('moment');


var generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

function openBarScoreEditPage(email, cb) {
    var Bar = models.users;
    Bar.findOne({
        where: {
            email: email
        }
    }).then(function(user) {
        if (user) {
            cb(user);
        }
    })
}

function openBarUpdateModelInUser(updateModel, oldemail, cb) {
    var User = models.users;
    if (updateModel.password) {
        var password = generateHash(updateModel.password);
    }

    User.findOne({
        where: {
            email: oldemail
        }
    }).then(function(model) {
        Object.assign(updateModel, { firstName: updateModel.barName });
        Object.assign(updateModel, { lastName: updateModel.barName });
        if (updateModel.password)
            Object.assign(updateModel, { password: password })

        model.update(updateModel, {
            fields: Object.keys(updateModel)
        }).then(function(bar) {
            if (bar) {
                cb(bar)
            } else {
                cb(null)
            }

        })
    })
}



function addBarForLogin(req) {
    var password = generateHash('password');
    const Op = sequelize.Op
    var USER = models.users;
    USER.findOne({
        where: {
            email: req.body.email
        }
    }).then(function(user) {
        if (user) {
            res.json({
                status: false,
                message: [{
                    'msg': 'email should be unique'
                }]
            })
        } else {
            var password = generateHash(req.body.password);
            var data = {
                firstName: req.body.barName,
                lastName: req.body.barName,
                password: password,
                email: req.body.email,
                mobile: req.body.mobile || '',
                role: 3
            }
            USER.create(data).then(function(newUser, created) {
                if (!newUser) {
                    res.json({
                        status: false,
                        message: [{
                            'msg': 'something went wrong'
                        }]
                    })
                    return
                }
                if (newUser) {
                    req.body.role = 3,
                        res.json({
                            status: true
                        });
                    return res;
                }
            })
        }
    })


}

function decodeBase64Image(dataString) {

    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)

    var response = {};
    if (matches.length !== 3) {
        return new Error("Invalid input string");
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}


module.exports = {

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
                barId: req.body.barId,
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

            var imageTypeDetected = base64Data.type.match(imageTypeRegularExpression)
            var userUploadedImagePath = 'assets/public/img/' + name + '.' + imageTypeDetected[1]

            require('fs').writeFile(userUploadedImagePath, base64Data.data, function(err) {
                // oPost.productImage =
                var updateModel = {}
                updateModel['imageName'] = name + '.' + imageTypeDetected[1]
                updateModel['barId'] = req.body.barId
                updateModel['shopperId'] = null

                Image.create(updateModel).then(function(image, created) {
                    if (image) {
                        res.json({
                            status: true,
                            message: image
                        });
                        console.log(image)
                        return
                    }
                })
                console.log(req)
            })
        }
    },
    /*score crud*/
    /*show score management*/
    showScoreManagement: function(req, res) {
        var Scores = models.scores;
        var Bars = models.bars;
        var Users = models.users;
        Scores.findAll().then(function(scores) {
            if (scores) {
                var tbl = sequelize.query("Select B.barName,C.*,S.firstName,S.lastName from  scores C JOIN bars B ON C.barId =B.barID  JOIN users S  ON S.id=C.shopperId", {
                    type: sequelize.QueryTypes.SELECT
                }).then(function(rows) {
                    if (rows) {

                        res.render('admin/scoreManagement', { message: rows, moment: moment, 'session': req.session })
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


    /*show score management with date api*/
    showScoreManagementWithDate: function(req, res) {
        var Score = models.scores;
        Score.findAll({}).then(function(scores) {
            if (scores) {
                var minDate = req.query.minD + " 00:00:00";
                var maxDate = req.query.maxD + " 23:59:59";
                sequelize.query("SELECT B.barName,C.*,S.firstName,S.lastName from  scores C JOIN bars B ON C.barId =B.barID  JOIN users S  ON S.id=C.shopperId where  C.createdAt BETWEEN " + "'" + minDate + "'" + " AND " + "'" + maxDate + "'" + " ", {
                    type: sequelize.QueryTypes.SELECT

                }).then(function(rows) {
                    if (rows) {
                        res.json({
                            status: true,
                            moment: moment,
                            message: rows
                        })
                    }
                })
            } else {
                res.json({
                    status: false
                })
            }
        })
    },


    /*To view score of particular bar with date api */

    viewScoreBarWithDate: function(req, res) {
        const Op = sequelize.Op;

        var startDate = req.query.minD + " 00:00:00 UTC";
        var newDate1 = new Date(startDate);
        var endDate = req.query.maxD + " 23:59:59 UTC";
        var newDate2 = new Date(endDate);
        console.log(req)
        var Score = models.scores;
        Score.findAll({
            where: {
                [Op.and]: [{
                        barId: req.query.barId,
                    },
                    {
                        createdAt: {
                            [Op.gte]: newDate1,
                            [Op.lte]: newDate2
                        }
                    }
                ]
            }
        }).then(function(scores) {
            if (scores) {

                res.json({
                    status: true,
                    message: scores
                })


            }
        })

    },

    /*to change the score parameters api */

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


    /* to update the score on editing api */


    scoreUpdate: function(req, res) {

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

                JSON.stringify(updateScore)
                console.log(updateScore)

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

    /*to view the all the bar score of a particular bar */

    viewBarScore: function(req, res) {
        const Op = sequelize.Op;
        var Score = models.scores;
        Score.findAll({
            where: {
                barId: req.params.barId,
            }
        }).then(function(scores) {
            var barId = req.params.barId;
            if (scores) {
                console.log(scores)
                res.render('admin/viewBarScore', { message: scores, moment: moment, barId: barId, barName: req.params.barName, 'session': req.session });
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


    /*shopper crud*/
    showShopper: function(req, res) {
        res.render('admin/shopper', { 'session': req.session });
    },


    addShopper: function(req, res) {
        req.checkBody('firstName', 'First Name is required').notEmpty();
        req.checkBody('lastName', 'Last Name is required').notEmpty();
        req.checkBody('email', 'Email is required').notEmpty();
        //  req.checkBody('mobile','Mobile Number is Not Valid').notEmpty();
        //req.checkBody('mobile','Only Numbers allowed in mobile number').isInt();
        req.checkBody('password', 'Password is required').notEmpty();

        var errors = req.validationErrors();

        if (errors) {
            res.json({
                status: false,
                message: errors
            })
        } else {
            var password = generateHash('password');
            const Op = sequelize.Op
            var USER = models.users;
            USER.findOne({
                where: {
                    email: req.body.email
                }
            }).then(function(user) {
                if (user) {
                    res.json({
                        status: false,
                        message: [{
                            'msg': 'email should be unique'
                        }]
                    })
                } else {
                    var password = generateHash(req.body.password);
                    var data = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        password: password,
                        email: req.body.email,
                        mobile: req.body.mobile || '',
                        role: 2
                    }
                    USER.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            res.json({
                                status: false,
                                message: [{
                                    'msg': 'something went wrong'
                                }]
                            })
                            return
                        }
                        if (newUser) {
                            req.body.role = 2,
                                res.json({
                                    status: true
                                });
                            return res;
                        }
                    })
                }
            })

        }
    },

    getAllShoppers: function(req, res) {
        var USER = models.users;
        console.log(USER, "105")
        USER.findAll({
            where: {
                role: 2
            }
        }).then(function(shopper) {
            if (shopper) {
                res.json({
                    status: true,
                    message: shopper
                })
                return
            } else {
                res.json({
                    status: false
                });
                return
            }
        }, function(err) {
            if (err)
                console.log(err);
            res.status(400).send();
        })
    },

    shopperDetailById: function(req, res) {
        req.checkBody('id', 'Shopper Id is Required').notEmpty()
        var USER = models.users;

        USER.findOne({
            where: {
                id: req.body.id
            }
        }).then(function(shopper) {
            if (shopper) {
                res.json({
                    status: true,
                    message: shopper
                })
                return
            } else {
                res.json({
                    status: false,
                    message: error
                })
                return
            }
        }, function(err) {
            if (err)
                console.log(err);
            res.status(400).send();
        })
    },


    updateShopper: function(req, res) {
        req.checkBody('firstName', 'FirstName is required').notEmpty();
        req.checkBody('lastName', 'Last Name is required').notEmpty();
        // req.checkBody('mobile','Mobile No. is not valid').notEmpty();
        //req.checkBody('mobile','Only numbers allowed in mobile no').isInt();
        //req.checkBody('password','Password could not be blank').notEmpty();
        console.log("updateShopper")
        console.log(req.body)
        var errors = req.validationErrors();

        if (errors) {
            res.json({
                status: false,
                message: errors
            })
        } else {
            var USER = models.users;
            USER.findOne({
                where: {
                    id: req.body.id
                }
            }).then(function(model) {
                if (!model) {
                    res.status(400).send()
                    return
                }
                var updateModel = {};
                var updateParams = req.body;
                if (updateParams.password == "") {
                    delete updateParams['password']
                }
                _.forEach(updateParams, function(value, key) {
                    updateModel[key] = value;
                })
                console.log(updateModel)
                if (updateModel.password) {
                    console.log("123456")
                    updateModel.password = generateHash(updateModel.password);
                }

                console.log(updateModel.password)
                model.update(updateModel, {
                    fields: Object.keys(updateModel)
                }).then(function(shopper) {
                    if (shopper) {
                        res.json({
                            status: true,
                            message: shopper
                        })
                    } else {
                        res.json({
                            status: false
                        })
                    }

                });

            })
        }

    },

    deleteShopper: function(req, res) {
        var USER = models.users;
        USER.findOne({
            where: {
                id: req.body.id
            }
        }).then(function(shopper) {
            shopper.destroy();
            res.json({
                status: true
            })
        })
    },


    //Bar Crud Operations
    showBar: function(req, res) {
        res.render('admin/bar', { 'session': req.session });
    },
    addBar: function(req, res) {

        req.checkBody('barName', 'Bar Name is required').notEmpty();
        req.checkBody('email', 'Email is required').notEmpty();
        var errors = req.validationErrors();

        if (errors) {
            res.json({
                status: false,
                message: errors
            })
        } else {

            const Op = sequelize.Op
            var BAR = models.bars;

            BAR.findOne({
                where: {
                    email: req.body.email
                }
            }).then(function(user) {
                if (user) {
                    res.json({
                        status: false,
                        message: [{
                            'msg': 'email should be unique'
                        }]
                    })
                } else {

                    var data = {
                        barName: req.body.barName,
                        email: req.body.email,
                        mobile: req.body.mobile || '',
                        address: req.body.address
                    }
                    addBarForLogin(req);
                    BAR.create(data).then(function(newBAR, created) {
                        if (!newBAR) {
                            res.json({
                                status: false,
                                message: [{
                                    'msg': 'something went wrong'
                                }]
                            })
                            return
                        }
                        if (newBAR) {

                            res.json({
                                status: true
                            });
                            return res;
                        }
                    })
                }
            })

        }
    },

    getAllBars: function(req, res) {
        var BAR = models.bars;

        BAR.findAll({}).then(function(bar) {
            if (bar) {

                var tbl = sequelize.query("Select B.*,sum(C.averageScore) AS averageScore from bars B LEFT JOIN  scores C ON C.barId = B.barId GROUP BY  B.barId", {
                    type: sequelize.QueryTypes.SELECT
                }).then(function(rows) {
                    console.log(rows)
                    if (rows) {
                        res.json({
                            status: true,
                            message: rows
                        })
                        return
                    }
                })

            } else {
                res.json({
                    status: false
                });
                return
            }
        }, function(err) {
            if (err)
                console.log(err);
            res.status(400).send();
        })
    },

    deleteBar: function(req, res) {
        var BAR = models.bars;

        BAR.findOne({
            where: {
                barId: req.body.barId
            }
        }).then(function(bar) {
            bar.destroy();
            res.json({
                status: true
            })
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
                openBarScoreEditPage(bar.email, function(user) {
                    res.json({
                        status: true,
                        message: bar,
                        user: user
                    })
                    return
                })

            } else {
                res.json({
                    status: false,
                    message: error
                })
                return
            }
        }, function(err) {
            if (err)
                console.log(err);
            res.status(400).send();
        })
    },

    updateBar: function(req, res) {
        var oldemail = req.body.oldemail
        req.checkBody('barName', 'Bar Name is required').notEmpty();
        // req.checkBody('mobile','Mobile No. is not valid').notEmpty();
        // req.checkBody('mobile','Only numbers allowed in mobile no').isInt();
        var errors = req.validationErrors();

        if (errors) {
            res.json({
                status: false,
                message: errors
            })
        } else {
            var BAR = models.bars;
            BAR.findOne({
                where: {
                    barId: req.body.barId
                }
            }).then(function(model) {
                if (!model) {
                    res.status(400).send()
                    return
                }
                var updateModel = {};
                var updateParams = req.body;
                if (updateParams.password == "") {
                    delete updateParams['password']
                }
                _.forEach(updateParams, function(value, key) {
                    updateModel[key] = value;
                })
                openBarUpdateModelInUser(updateModel, oldemail, function(user) {
                    console.log(user)
                })
                console.log(updateModel)

                model.update(updateModel, {
                    fields: Object.keys(updateModel)
                }).then(function(bar) {
                    if (bar) {
                        res.json({
                            status: true,
                            message: bar
                        })
                    } else {
                        res.json({
                            status: false
                        })
                    }

                });

            })
        }

    },


}