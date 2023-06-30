'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Destination.init({
    destination_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    continent_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
    country_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
  },
    author:{
      type: DataTypes.STRING,
      allowNull: false
  },
    date_posted: {
      type: DataTypes.DATE,
      timestamps: false,
      allowNull: false
  },
  picture: {
    type: DataTypes.TEXT
},
 }, {
    sequelize,
    modelName: 'Destination',
    tableName:'destinations',
    timestamps: false
  });
  return Destination;
};
