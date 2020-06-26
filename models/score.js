module.exports = function(sequelize, Sequelize) {
    var Score = sequelize.define('scores', {
        scoreId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        shopperId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
        barId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
        param1: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            notEmpty: true
        },
        param2: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            notEmpty: true
        },
        param3: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            notEmpty: true
        },
        param4: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            notEmpty: true
        },
        param5: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            notEmpty: true
        },
        param6: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            notEmpty: true
        },
        param7: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            notEmpty: true
        },
        param8: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            notEmpty: true
        },
        param9: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            notEmpty: true
        },
        comments: {
            type: Sequelize.STRING
        },
        averageScore: {
            type: Sequelize.DECIMAL,
            defaultValue: 0,
            notEmpty: true
        },
        createdAt: {
            type: Sequelize.DATE,
            notEmpty: true
        },
        updatedAt: {
            type: Sequelize.DATE,
            notEmpty: true
        }
    });

    return Score;
}