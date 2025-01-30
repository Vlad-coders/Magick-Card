'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User, Basket }) {
      this.belongsToMany(User, { through: Basket, foreignKey: 'cardId' });
      this.hasMany(Basket, { foreignKey: 'cardId' }); // Важно для связи Basket и Card
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
