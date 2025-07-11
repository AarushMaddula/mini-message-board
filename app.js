const path = require("node:path");
const express = require("express");

const app = express();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: messages }))
app.get("/new", (req, res) => {res.render("form")});

app.post("/new", (req, res) => {
    messages.push({ text: req.body.message, user: req.body.username, added: new Date()})
    res.redirect("/")
})

app.get("/{*splat}", (req, res) => res.send("Error"))


app.listen(3000, () => {
    console.log("Server up!")
})