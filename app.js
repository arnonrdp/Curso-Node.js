const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");

// Configure Handlebars - Template Engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// DB Connection
const sequelize = new Sequelize("learning", "root", "unitrends1", {
    host: "localhost",
    dialect: "mysql",
});

// Routes
app.get("/cad", (req, res) => {
    res.render("form");
});

app.listen(8081, () => {
    console.log("App running on port 8081!");
});
