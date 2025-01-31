const basketRouter = require('express').Router();
const { Card, Basket, User } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');
const sender = require('./nodemailer');

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

    const existingBasketItem = await Basket.findOne({
      where: { cardId: id, userId: user.id },
    });

    if (existingBasketItem) {
      return res.status(409).json({ message: 'Карточка уже в корзине' });
    }

    const newBasketItem = await Basket.create({
      userId: user.id,
      cardId: id,
    });

    res
      .status(201)
      .json({ message: 'Карточка добавлена в корзину', data: newBasketItem });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

basketRouter.route('/getCard').get(verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;

    const myBas = await Basket.findAll({
      where: { userId: user.id },
      include: [
        {
          model: Card,
          attributes: ['id', 'name', 'img', 'price', 'wearLevel', 'city'],
        },
      ],
    });
    console.log('myBas ==========', myBas);

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

    const mail = {
      from: 'rasulmagomedov7005@gmail.com',
      to: existingUser.email,
      subject: 'Заказ',
      text: 'Ваш заказ принят',
    };

    sender.sendMail(mail, (error, info) => {
      if (error) {
        console.log('Ошибка при отправке письма:', error);
      } else {
        console.log(`Письмо успешно отправлено: ${info.response}`);
      }
    });

    const existingCard = await Card.findByPk(id);
    if (!existingCard) {
      return res.status(404).json({ message: 'Карта не найдена' });
    }

    const myBas = await Basket.destroy({
      where: { cardId: id, userId: user.id },
    });

    res.status(200).json({ message: 'Карточка удалена из корзины', data: myBas });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = basketRouter;
