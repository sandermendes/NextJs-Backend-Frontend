'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  doctor.init({
    name: DataTypes.STRING,
    medCertId: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobilePhone: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    speciality: DataTypes.TEXT,
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'doctor',
  });
  return doctor;
};