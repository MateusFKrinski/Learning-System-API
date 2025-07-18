"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.hasMany(models.Course, {
        foreignKey: "category_id",
      });
    }
  }
  Categories.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Categories",
      tableName: "categories",
    },
  );
  return Categories;
};
