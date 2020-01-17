'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fullname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    date: DataTypes.DATE,
    acces_level: DataTypes.STRING
  }, {});
  user.associate = function (models) {
    // associations can be defined here
  };
  return user;
};