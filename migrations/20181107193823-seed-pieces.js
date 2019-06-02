'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('pieces', [
      { name: 'rook',   default_col: 0, default_row: 0, img_src:'/images/rWhite.png'}, //id 1
      { name: 'knight', default_col: 1, default_row: 0, img_src:'/images/kWhite.png'},
      { name: 'bishop', default_col: 2, default_row: 0, img_src:'/images/bWhite.png'},
      { name: 'queen',  default_col: 3, default_row: 0, img_src:'/images/qWhite.png'},
      { name: 'king',   default_col: 4, default_row: 0, img_src:'/images/kingWhite.png'},
      { name: 'bishop', default_col: 5, default_row: 0, img_src:'/images/bWhite.png'},
      { name: 'knight', default_col: 6, default_row: 0, img_src:'/images/kWhite.png'},
      { name: 'rook',   default_col: 7, default_row: 0, img_src:'/images/rWhite.png'}, //id 8
      { name: 'pawn',   default_col: 0, default_row: 1, img_src:'/images/pWhite.png'}, //pawns id 9 -18
      { name: 'pawn',   default_col: 1, default_row: 1, img_src:'/images/pWhite.png'},
      { name: 'pawn',   default_col: 2, default_row: 1, img_src:'/images/pWhite.png'},
      { name: 'pawn',   default_col: 3, default_row: 1, img_src:'/images/pWhite.png'},
      { name: 'pawn',   default_col: 4, default_row: 1, img_src:'/images/pWhite.png'},
      { name: 'pawn',   default_col: 5, default_row: 1, img_src:'/images/pWhite.png'},
      { name: 'pawn',   default_col: 6, default_row: 1, img_src:'/images/pWhite.png'},
      { name: 'pawn',   default_col: 7, default_row: 1, img_src:'/images/pWhite.png'}, // id 18
      { name: 'rook',   default_col: 0, default_row: 7, img_src:'/images/rBlack.png'},
      { name: 'knight', default_col: 1, default_row: 7, img_src:'/images/kBlack.png'},
      { name: 'bishop', default_col: 2, default_row: 7, img_src:'/images/bBlack.png'},
      { name: 'queen',  default_col: 3, default_row: 7, img_src:'/images/qBlack.png'},
      { name: 'king',   default_col: 4, default_row: 7, img_src:'/images/kingBlack.png'},
      { name: 'bishop', default_col: 5, default_row: 7, img_src:'/images/bBlack.png'},
      { name: 'knight', default_col: 6, default_row: 7, img_src:'/images/kBlack.png'},
      { name: 'rook',   default_col: 7, default_row: 7, img_src:'/images/rBlack.png'},
      { name: 'pawn',   default_col: 0, default_row: 6, img_src:'/images/pBlack.png'},
      { name: 'pawn',   default_col: 1, default_row: 6, img_src:'/images/pBlack.png'},
      { name: 'pawn',   default_col: 2, default_row: 6, img_src:'/images/pBlack.png'},
      { name: 'pawn',   default_col: 3, default_row: 6, img_src:'/images/pBlack.png'},
      { name: 'pawn',   default_col: 4, default_row: 6, img_src:'/images/pBlack.png'},
      { name: 'pawn',   default_col: 5, default_row: 6, img_src:'/images/pBlack.png'},
      { name: 'pawn',   default_col: 6, default_row: 6, img_src:'/images/pBlack.png'},
      { name: 'pawn',   default_col: 7, default_row: 6, img_src:'/images/pBlack.png'},
      ]);
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
