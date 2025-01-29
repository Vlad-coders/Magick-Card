const express = require('express');
const { Card } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

const cardRouter = express.Router();

// Получение всех карточек товаров (доступно для всех)
cardRouter.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Создание новой карточки товара (требует аутентификации)
cardRouter.post('/', verifyAccessToken, async (req, res) => {
  const { name, price, img, city, wearLevel } = req.body;
  const userId = req.user.id;

  try {
    const card = await Card.create({ name, price, img, city, wearLevel, userId });
    res.status(201).json(card);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при создании карточки' });
  }
});

// Удаление карточки товара по ID (требует аутентификации)
cardRouter.delete('/:id', verifyAccessToken, async (req, res) => {
  const { id } = req.params;

  try {
    const card = await Card.findByPk(id);
    if (!card) {
      return res.status(404).json({ error: 'Карточка не найдена' });
    }

    if (card.userId !== res.locals.user.id) {
      return res
        .status(403)
        .json({ error: 'Недостаточно прав для удаления этой карточки' });
    }

    await card.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = cardRouter;
