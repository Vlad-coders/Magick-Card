'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Basket.init({
    userId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};