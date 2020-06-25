var models = require("../models");
var https = require("https");
var fs = require("fs");
var bCrypt = require('bcrypt-nodejs');
var Sequelize = require("sequelize");
var path = require("path");
var config = require('../config.js');
module.exports = {

    signIn: function(req, res) {
        
        res.render('auth/login', {
            loginError: req.flash('loginerror')
        })
    },

    dashboard: function(req, res) {
    console.log("hello");
    res.render('/admin/shopper'); 
      
    },

    logout: function(req, res) {
        req.logout();
        req.session.destroy(function(err) {
            if (err)
                return err;

            res.redirect('/auth');
        })
    }
}