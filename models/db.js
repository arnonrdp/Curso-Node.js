const Sequelize = require("sequelize");

// DB Connection
const sequelize = new Sequelize("postapp", "root", "unitrends1", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
};
