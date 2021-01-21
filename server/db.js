const Sequelize = require("sequelize");

//Option 1: Passing parameters seperately
const sequelize = new Sequelize("journal-walkthrough", "postgres", "password",{
    host: "localhost",
    dialect:"postgres",
});

sequelize
  .authenticate()
  .then(() => {
      console.log("Connection has been established successfully.");
  })
  .catch((err) => {
      console.error(err);
  });

  module.exports = sequelize;