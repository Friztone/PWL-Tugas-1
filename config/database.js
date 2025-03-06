const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  database: "LK01",
  username: "127.0.0.1",
  password: "",
  host: "localhost",
  port: 3306,
  define: {
    timestamps: true,
  },
});

module.exports = sequelize;
