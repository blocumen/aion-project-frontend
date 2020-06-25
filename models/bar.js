module.exports = function(sequelize,Sequelize){
    var Bar = sequelize.define('bars',{
        barId : {
            autoIncrement : true,
            primaryKey : true,
            type : Sequelize.INTEGER
        },
        barName : {
            type : Sequelize.STRING,
            notEmpty : true
        },
        email : {
            type :  Sequelize.STRING,
            validate : {
                isEmail :  true
            }
       },
       mobile : {
           type : Sequelize.BIGINT,
           defaultValue : 0
       },
       address : {
          type : Sequelize.STRING,
          notEmpty : true
       },
        createdAt : {
            type : Sequelize.DATE,
            notEmpty : true
        },
        updatedAt : {
            type : Sequelize.DATE,
            notEmpty : true
        }

    })

    return Bar;
}