const router = require("express").Router();
const userService = require("../services/userService");

router.get("/register", (req, res) => {
  res.render("user/register");
});

router.post("/register", async (req, res) => {
  const { email, username, password, rePassword } = req.body;

  await userService.register({ email, username, password, rePassword });
  res.redirect("/users/login");
});

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //   try {
  //     const token = await userService.login(email, password);

  //     res.cookie("token", token, { httpOnly: true });
  //     res.redirect("/");
  //   } catch (error) {
  //     const errorMessages = extractErrorMsgs(error);

  //     res.status(404).render("user/login", { errorMessages });
  //   }
});

module.exports = router;
