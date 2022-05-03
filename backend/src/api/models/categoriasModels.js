const {Model, DataTypes, Sequelize} = require('sequelize')
const configConn = require('../../config/database.js')
const sequalize = new Sequelize(configConn)

class Categorias extends Model {
    static init(sequalize) {
        super.init({
            cat_descricao: DataTypes.STRING,
        },{
            sequalize,
            tableName: 'categorias',
        });
        return this;
    }
}
module.exports = Categorias