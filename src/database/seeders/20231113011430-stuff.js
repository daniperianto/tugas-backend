'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkInsert('stuff', [{
      name: 'Laptop',
      price: 4_000_000,
      dateBought: new Date,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: "headset",
      price: 30_000,
      dateBought: new Date,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: "mouse",
      price: 60_000,
      dateBought: new Date,
      createdAt: new Date,
      updatedAt: new Date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('stuff', null, {});
     
  }
};
