"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    static associate(models) {
      Courses.belongsTo(models.Categories, {
        foreignKey: "category_id",
      });
      Courses.belongsTo(models.People, {
        foreignKey: "teacher_id",
      });
      Courses.hasMany(models.Enrollment, {
        foreignKey: "course_id",
      });
    }
  }
  Courses.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      start_data: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Courses",
      tableName: "courses",
      paranoid: true,
    },
  );
  return Courses;
};
