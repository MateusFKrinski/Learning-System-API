const dataSource = require("../database/models");

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAll(where = {}) {
    return dataSource[this.model].findAll({ where });
  }

  async getAllRecords(scope) {
    return dataSource[this.model].scope(scope).findAll();
  }

  async getById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async create(createData) {
    return dataSource[this.model].create(createData);
  }

  async update(updateData, id) {
    const data = dataSource[this.model].update(updateData, { where: { id } });
    return data[0] !== 0;
  }

  async delete(id) {
    return dataSource[this.model].destroy({ where: { id } });
  }
}

module.exports = Services;
