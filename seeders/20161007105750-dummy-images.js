'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Images', [
      {
        description: 'John Doe',
        url: 'http://thecatapi.com/?id=5n1',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      },
      {
        description: 'Max Moe',
        url: 'http://thecatapi.com/?id=554',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      },
      {
        description: '#fanccy',
        url: 'http://thecatapi.com/?id=552',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      },
      {
        description: 'ridicoulous',
        url: 'http://thecatapi.com/?id=551',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      },
      {
        description: null,
        url: 'http://thecatapi.com/?id=550',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      },
      {
        description: null,
        url: 'http://thecatapi.com/?id=556',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('Images', null, {});
  }
};
