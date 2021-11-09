const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/post");

// Configure Handlebars - Template Engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
    Post.findAll({ order: [["id", "DESC"]] }).then((posts) => {
        res.render("home", { posts: posts });
    });
});

app.get("/write", (req, res) => {
    res.render("form");
});

app.post("/add", (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
    })
        .then(() => res.redirect("/"))
        .catch((err) => res.send("Unable to add post\n" + err));
});

app.get("/delete/:id", (req, res) => {
    Post.destroy({ where: { id: req.params.id } })
        .then(() => res.redirect("/"))
        .catch((err) => res.send("Unable to delete post\n" + err));
});

app.listen(8081, () => {
    console.log("Front-End running on port 8081!");
});
