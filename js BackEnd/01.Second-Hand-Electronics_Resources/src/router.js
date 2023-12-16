const router = require("express").Router();
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");
const allOffersController = require("./controllers/offerController");

// Endpoints and Controllers
router.use(homeController);
router.use("/user", userController);
router.use("/offers", allOffersController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
