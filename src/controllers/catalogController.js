const router = require("express").Router();
const postService = require("../services/postService");
const { isAuth } = require("./../middlewares/authMiddleware");
const { extractErrorMsgs } = require("./../utils/errorHandler");

router.get("/all", async (req, res) => {
  const offers = await postService.getAll().lean();
  res.render("posts/catalog", { offers });
});

router.get("/create", isAuth, (req, res) => {
  res.render("posts/create");
});

router.post("/create", async (req, res) => {
  const { name, type, year, exploit, damage, imageUrl, price, description } = req.body;
  const payload = {
    name,
    type,
    year,
    exploit,
    damage,
    imageUrl,
    price,
    description,
    owner: req.user,
  };
  try {
    await postService.create(payload);
    res.redirect("/posts/all");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("posts/create", { errorMessages });
  }
});

// router.get("/profile", isAuth, async (req, res) => {
//   const { user } = req;
//   const myCreatures = await creatureService.getMyCreatures(user?._id).lean();

//   res.render("post/profile", { myCreatures });
// });

router.get("/:offerId/details", async (req, res) => {
  const { offerId } = req.params;

  const offer = await postService.singleOffer(offerId).lean();
  const { user } = req;
  const { owner } = offer;
  const isOwner = user?._id === owner.toString();

  res.render("posts/details", { offer, isOwner });
});

router.get("/:offerId/edit", async (req, res) => {
  const { offerId } = req.params;

  const offer = await postService.singleOffer(offerId).lean();
  res.render("posts/edit", { offer });
});

router.post("/:offerId/edit", async (req, res) => {
  const { offerId } = req.params;
  const { name, type, year, exploit, damage, imageUrl, price, description } = req.body;
  const payload = {
    name,
    type,
    year,
    exploit,
    damage,
    imageUrl,
    price,
    description,
    owner: req.user,
  };

  await postService.update(offerId, payload);
  res.redirect(`/posts/${offerId}/details`);
});

router.get("/:offerId/delete", async (req, res) => {
  const { offerId } = req.params;

  await postService.delete(offerId);
  res.redirect("/posts/all");
});

router.get("/:creatureId/", (req, res) => {
  const { creatureId } = req.params;
  const { _id } = req.user;
  res.redirect(`/posts/${creatureId}/details`);
});

module.exports = router;
