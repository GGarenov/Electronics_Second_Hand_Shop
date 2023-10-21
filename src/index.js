const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const { PORT } = require("./contants");
const routes = require("./router");

//Init
const app = express();

//Express configs
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "./public")));

//Handlebars COnfiguration
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

//Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on ${PORT}.`));
