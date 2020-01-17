'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    category_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    catergory_name: DataTypes.STRING
  }, {});
  categories.associate = function (models) {
    // associations can be defined here
  };
  return categories;
};