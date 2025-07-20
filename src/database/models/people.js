"use strict";
const { Model } = require("sequelize");
const isValidCpf = require("../../utils/validateCpfHelper.js");
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      People.hasMany(models.Courses, {
        foreignKey: "teacher_id",
      });
      People.hasMany(models.Enrollment, {
        foreignKey: "student_id",
        scope: { status: "matriculado" },
        as: "activeEnrollment",
      });
      People.hasMany(models.Enrollment, {
        foreignKey: "student_id",
        as: "allEnrollment",
      });
    }
  }
  People.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 30],
            msg: "Name is invalid",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "email is invalid",
          },
        },
      },
      cpf: {
        type: DataTypes.STRING,
        validate: {
          isCpfValid: (cpf) => {
            if (!isValidCpf(cpf)) throw new Error("cpf is invalid");
          },
        },
      },
      status: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "People",
      tableName: "people",
      paranoid: true,
      defaultScope: {
        where: { status: true },
      },
      scopes: {
        allRecords: {
          where: {},
        },
      },
    },
  );
  return People;
};
