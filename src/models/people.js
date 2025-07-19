"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      People.hasMany(models.Courses, {
        foreignKey: "teacher_id",
      });
      People.hasMany(models.Enrollment, {
        foreignKey: "student_id",
        //scope: "matriculado",
        as: "enrollment",
      });
    }
  }
  People.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "People",
      tableName: "people",
    },
  );
  return People;
};
