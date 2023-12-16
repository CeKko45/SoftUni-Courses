const router = require("express").Router();
const offerService = require("../services/offerService");
const { isAuthenticated } = require("../middlewares/auth");
const { extractErrorMsgs } = require("../utils/errorHandler");
const User = require("../models/User");

router.get("/catalog", async (req, res) => {
  const offers = await offerService.getAll().lean();
  res.render("offer/catalog", { offers });
});

router.get("/create", isAuthenticated, (req, res) => {
  res.render("offer/create");
});

router.post("/create", async (req, res) => {
  const {
    name,
    type,
    damages,
    description,
    image,
    production,
    exploitation,
    price,
  } = req.body;

  const payload = {
    name,
    type,
    damages,
    production,
    exploitation,
    price,
    image,
    description,
    owner: req.user,
  };

  try {
    await offerService.create(payload);
    res.redirect("/offers/catalog");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("offer/create", { errorMessages });
  }
});

router.get("/:offerId/details", isAuthenticated, async (req, res) => {
  const { offerId } = req.params;

  const offer = await offerService.getSingleOffer(offerId).lean();

  const { user } = req;
  const { owner } = offer;

  const isOwner = user?._id === owner.toString();
  const hasBought = offer.buyingList?.some(
    (b) => b?._id.toString() === user?._id
  );
  const emailBuyers = offer.buyingList.map((b) => b.email).join(", ");

  res.render("offer/details", {
    offer,
    isOwner,
    hasBought,
    emailBuyers,
  });
});

router.get("/:offerId/edit", isAuthenticated, async (req, res) => {
  const { offerId } = req.params;
  const offer = await offerService.getSingleOffer(offerId).lean();

  res.render("offer/edit", { offer });
});

router.post("/:offerId/edit", async (req, res) => {
  const { offerId } = req.params;
  const {
    name,
    type,
    damages,
    description,
    image,
    production,
    exploitation,
    price,
  } = req.body;

  const payload = {
    name,
    type,
    damages,
    production,
    exploitation,
    price,
    image,
    description,
    owner: req.user,
  };

  await offerService.update(offerId, payload);
  res.redirect(`/offers/${offerId}/details`);
});

router.get("/:offerId/delete", isAuthenticated, async (req, res) => {
  const { offerId } = req.params;

  await offerService.delete(offerId);

  res.redirect("/offers/catalog");
});

router.get("/:offerId/buy", isAuthenticated, async (req, res) => {
  const { offerId } = req.params;
  const { user: _id } = req;

  const addBuyer = await offerService.buyItem(offerId, _id);
  res.redirect(`/offers/${offerId}/details`);
});

router.get("/search", isAuthenticated, async (req, res) => {
  const { searchName, searchType } = req.query;
  const offers = await offerService.searchOffers(searchName, searchType);

  res.render("offer/search", { offers });
});

router.post("/search", isAuthenticated, async (req, res) => {
  const { searchName, searchType } = req.query;
  const offers = await offerService.searchOffers(searchName, searchType);

  res.render("offer/search", { offers });
});

module.exports = router;
