const express = require("express");
const app = express();
const { PORT } = require("./contants");

app.get("/", (req, res) => {
  res.send("Hellow from home page");
});

app.listen(PORT, () => console.log(`Server is listening on ${PORT}.`));
