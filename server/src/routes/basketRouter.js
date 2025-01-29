const basketRouter = require('express').Router();
const generateTokens = require('../utils/generateTokens');
const cookieConfig = require('../configs/сookie.config');
const { Card, Basket, User } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

basketRouter.route('/:id').post(verifyAccessToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = res.locals;
    const existingUser = await User.findByPk(user.id);

    if (!existingUser) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    const existingCard = await Card.findByPk(id);
    if (!existingCard) {
      return res.status(404).json({ message: 'Карта не найдена' });
    }

    const favBas = await Basket.create({
      userId: user.id,
      cardId: id,
    });
    res.status(200).json(favBas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});
basketRouter.route('/').get(verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    console.log(user, '------user in basket');

    const myBas = await Basket.findAll({
      where: { userId: user.id },
      include: [
        {
          model: Card,
          attributes: ['id', 'name', 'img', 'price', 'wearLevel', 'city'],
        },
      ],
    });

    console.log(myBas, '------------- card in basket');

    res.json(myBas);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

basketRouter.delete('/:id', verifyAccessToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = res.locals;

    const existingUser = await User.findByPk(user.id);
    if (!existingUser) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    const existingCard = await Card.findByPk(id);
    if (!existingCard) {
      return res.status(404).json({ message: 'Карта не найдена' });
    }

    const myBas = await Basket.destroy({
      where: { cardId: id },
    });

    res.status(200).json(myBas);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = basketRouter;
