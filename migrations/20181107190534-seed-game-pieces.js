'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('game_pieces', [
      { game_id: 1, user_id: 1, col: 0, row: 3, piece_id: 1, state: 0},
      { game_id: 1, user_id: 1, col: 1, row: 2, piece_id: 2, state: 0},
      { game_id: 1, user_id: 1, col: 4, row: 6, piece_id: 3, state: 0},
      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('game_pieces');
  }
};
