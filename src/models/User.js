const {Model,DataTypes} = require ('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.INTEGER,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            phone: DataTypes.STRING,
            responsible_lawyer: DataTypes.STRING

        }, {
            sequelize
        })
    }


}

module.exports = User;