const Services = require("./Services.js");
const dataSource = require("../database/models");
const { where } = require("sequelize");

class EnrollmentServices extends Services {
  constructor() {
    super("Enrollment");
  }

  async getByParams(where) {
    return dataSource[this.model].findOne({ where });
  }

  async getCountRegisters(where) {
    return dataSource[this.model].findAndCountAll({ where });
  }
}

module.exports = EnrollmentServices;
