const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Items extends Model {}

Items.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              isUrl: true,
            }
        },
        hoursLeft: {
            type: DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Items'
    }
)

module.exports = Items;