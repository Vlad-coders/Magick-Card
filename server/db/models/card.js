'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Basket }) {
      this.belongsToMany(User, { through: Basket, foreignKey: 'cardId' }); // define association here
    }
  }
  Card.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      price: DataTypes.INTEGER,
      wearLevel: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Card',
    },
  );
  return Card;
};
