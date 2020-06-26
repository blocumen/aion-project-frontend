

module.exports = function(sequelize,Sequelize){
    
    var Image = sequelize.define('images',{

        imageId : {
            autoIncrement : true,
            primaryKey : true,
            type : Sequelize.INTEGER
        },
        barId: {
            type : Sequelize.INTEGER,
            notEmpty : true
        },
        shopperId : {
            type : Sequelize.INTEGER,
            notEmpty : true
        },
        imageName : {
            type : Sequelize.STRING,
            
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

    return Image;
}