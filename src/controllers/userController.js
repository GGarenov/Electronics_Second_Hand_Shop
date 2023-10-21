const router = require("express").Router();

router.get("/register", (req, res) => {
  res.render("user/register");
});

router.post("/register", (req, res) => {
  const { email, username, password, rePassword } = req.body;
  res.redirect("/users/login");
});

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  res.redirect("/");
});

module.exports = router;
