

module.exports = function(sequelize,Sequelize){
    
    var User = sequelize.define('users',{

        id : {
            autoIncrement : true,
            primaryKey : true,
            type : Sequelize.INTEGER
        },
        firstName: {
            type : Sequelize.STRING,
            notEmpty : true
        },
        lastName : {
            type : Sequelize.STRING,
            notEmpty : true
        },
        email : {
            type : Sequelize.STRING,
            validate : {
                isEmail : true
            }
        },
        password : {
            type : Sequelize.STRING,
            allowNull : false
        },
        mobile : {
            type : Sequelize.BIGINT,
             
             
        },
        role : {
            type : Sequelize.ENUM('1','2','3'),
            defaultValue : '1'
        },
        createdAt :{
            type : Sequelize.DATE,
            notEmpty : true
        },
        updatedAt : {
            type : Sequelize.DATE,
            notEmpty : true
        }

    })

    return User;
}