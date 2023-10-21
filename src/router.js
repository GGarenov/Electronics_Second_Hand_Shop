const router = require("express").Router();
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");
const catalogController = require("./controllers/catalogController");

//TODO add endpoints with controllers here...
router.use(homeController);
router.use("/users", userController);
router.use("/posts", catalogController);

// Define a specific 404 route
router.get("/404", (req, res) => {
  res.render("404"); // Render your 404 page
});

// Catch-all route for unmatched routes
router.get("*", (req, res) => {
  res.redirect("/404"); // Redirect to the specific 404 route
});

module.exports = router;
