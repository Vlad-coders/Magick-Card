'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        name: 'Карта 1',
        img: 'abrade.jpg',
        price: 100,
        wearLevel: 'Заметно Поигранная',
        city: 'Москва',
      },
      {
        name: 'Карта 2',
        img: 'abundance.jpg',
        price: 200,
        wearLevel: 'Отличное',
        city: 'Санкт-Петербург',
      },

      {
        name: 'Карта 1',
        img: 'abundant-growth.jpg',
        price: 100,
        wearLevel: 'Слегка поигранная',
        city: 'Казань',
      },
      {
        name: 'Карта 2',
        img: 'abzan-ascendancy.jpg',
        price: 200,
        wearLevel: 'Новая',
        city: 'Нижний-Новгород',
      },

      {
        name: 'Карта 1',
        img: 'abzan-charm.jpg',
        price: 100,
        wearLevel: 'Слегка поигранная',
        city: 'Владивосток',
      },
      {
        name: 'Карта 2',
        img: 'academy-drake.jpg',
        price: 200,
        wearLevel: 'Отличное',
        city: 'Москва',
      },

      {
        name: 'Карта 1',
        img: 'acquisitions-expert.jpg',
        price: 100,
        wearLevel: 'Отличное',
        city: 'Казань',
      },
      {
        name: 'Карта 2',
        img: 'act-of-treason.jpg',
        price: 200,
        wearLevel: 'Новая',
        city: 'Екатеринбург',
      },

      {
        name: 'Карта 1',
        img: 'adaptive-shimmerer.jpg',
        price: 100,
        wearLevel: 'Новая',
        city: 'Владивосток',
      },
      {
        name: 'Карта 2',
        img: 'adeline-resplendent-cathar.jpg',
        price: 200,
        wearLevel: 'Заметно Поигранная',
        city: 'Нижний-Новгород',
      },

      {
        name: 'Карта 1',
        img: 'admiral-beckett-brass.jpg',
        price: 100,
        wearLevel: 'Отличное',
        city: 'Оренбург',
      },
      {
        name: 'Карта 2',
        img: 'aerial-engineer.jpg',
        price: 200,
        wearLevel: 'Слегка поигранная',
        city: 'Астрахань',
      },

      {
        name: 'Карта 1',
        img: 'aether-gale.jpg',
        price: 100,
        wearLevel: 'Заметно Поигранная',
        city: 'Екатеринбург',
      },
      {
        name: 'Карта 2',
        img: 'ainok-survivalist.jpg',
        price: 200,
        wearLevel: 'Слегка поигранная',
        city: 'Оренбург',
      },

      {
        name: 'Карта 1',
        img: 'air-elemental.jpg',
        price: 100,
        wearLevel: 'Новая',
        city: 'Москва',
      },

      // Добавьте другие карточки по аналогии
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
