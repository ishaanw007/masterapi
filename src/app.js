const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const hbs = require("hbs");
const Template_path = path.join(__dirname, "../Templates/views");
app.set("view engine", "hbs");
app.set("views", Template_path);
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.get("/", (req, res) => res.render("index"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
