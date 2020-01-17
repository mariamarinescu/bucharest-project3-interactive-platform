'use strict';
module.exports = (sequelize, DataTypes) => {
  const quizzes = sequelize.define('quizzes', {
    quizz_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    question: DataTypes.STRING,
    answer1: DataTypes.STRING,
    answer2: DataTypes.STRING,
    correct_answer: DataTypes.STRING,
    image_link: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {});
  quizzes.associate = function (models) {
    // associations can be defined here
  };
  return quizzes;
};