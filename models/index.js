"use strict";
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var config = require('../config.js')
var sequelize = new Sequelize(config.dbdatabase, config.dbusername, config.dbpassword, config);
var db = {};


fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js") && (file !== "connection.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        console.log(model)
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
