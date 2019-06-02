'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable(
          'game_pieces',
          {
              game_id: {
                type: Sequelize.INTEGER,
                  allowNull: false
              },
              user_id: {
                type: Sequelize.INTEGER,
                  allowNull: false
              },
              col: {
                type: Sequelize.INTEGER,
                  allowNull: false
              },
              row: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              piece_id: {
                type: Sequelize.INTEGER,
                  allowNull: false
                
              },
              captured: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false
              },
              state: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                allowNull: false
              }
          }
      );
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
