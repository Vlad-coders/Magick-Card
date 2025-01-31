'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        name: 'Истерание',
        img: 'abrade.jpg',
        price: 100,
        wearLevel: 'Заметно Поигранная',
        city: 'Москва',
      },
      {
        name: 'Изобилие',
        img: 'abundance.jpg',
        price: 200,
        wearLevel: 'Отличное',
        city: 'Санкт-Петербург',
      },

      {
        name: 'Обильный Рост',
        img: 'abundant-growth.jpg',
        price: 100,
        wearLevel: 'Слегка поигранная',
        city: 'Казань',
      },
      {
        name: 'Возвышение Абзана',
        img: 'abzan-ascendancy.jpg',
        price: 200,
        wearLevel: 'Новая',
        city: 'Нижний-Новгород',
      },

      {
        name: 'Талимсман Абзана',
        img: 'abzan-charm.jpg',
        price: 100,
        wearLevel: 'Слегка поигранная',
        city: 'Владивосток',
      },
      {
        name: 'Дрейк Академии',
        img: 'academy-drake.jpg',
        price: 200,
        wearLevel: 'Отличное',
        city: 'Москва',
      },

      {
        name: 'Знаток Приобретений',
        img: 'acquisitions-expert.jpg',
        price: 100,
        wearLevel: 'Отличное',
        city: 'Казань',
      },
      {
        name: 'Акт Измены',
        img: 'act-of-treason.jpg',
        price: 200,
        wearLevel: 'Новая',
        city: 'Екатеринбург',
      },

      {
        name: 'Адаптируюещаяся Система',
        img: 'adaptive-shimmerer.jpg',
        price: 100,
        wearLevel: 'Новая',
        city: 'Владивосток',
      },
      {
        name: 'Адель, Блистательный Катар',
        img: 'adeline-resplendent-cathar.jpg',
        price: 200,
        wearLevel: 'Заметно Поигранная',
        city: 'Нижний-Новгород',
      },

      {
        name: 'Адмирал Бекед Бравада',
        img: 'admiral-beckett-brass.jpg',
        price: 100,
        wearLevel: 'Отличное',
        city: 'Оренбург',
      },
      {
        name: 'Воздушный Инженер',
        img: 'aerial-engineer.jpg',
        price: 200,
        wearLevel: 'Слегка поигранная',
        city: 'Астрахань',
      },

      {
        name: 'Эфирная Буря',
        img: 'aether-gale.jpg',
        price: 100,
        wearLevel: 'Заметно Поигранная',
        city: 'Екатеринбург',
      },
      {
        name: 'Анинок выживатель',
        img: 'ainok-survivalist.jpg',
        price: 200,
        wearLevel: 'Слегка поигранная',
        city: 'Оренбург',
      },

      {
        name: 'Элементаль Воздуха',
        img: 'air-elemental.jpg',
        price: 100,
        wearLevel: 'Новая',
        city: 'Москва',
      },

      // Добавьте другие карточки по аналогии
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
