'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('pieces',
          {
              id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
              },
              name: {
                type: Sequelize.STRING,
                allowNull: false
              },
              default_col: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              default_row: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              img_src: {
                  type: Sequelize.STRING,
                  allowNul: false
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
    return queryInterface.dropTable('pieces');
  }
};
