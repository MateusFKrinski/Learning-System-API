"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("courses", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE,
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn("courses", "deletedAt");
  },
};
