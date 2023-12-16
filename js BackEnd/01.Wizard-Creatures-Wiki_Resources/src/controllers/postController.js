const router = require("express").Router();
const creatureService = require("../services/creatureServices");
const { isAuthenticated } = require("../middlewares/auth");
const { extractErrorMsgs } = require("../utils/errorHandler");
const User = require("../models/User");

router.get("/all", isAuthenticated, async (req, res) => {
  const creatures = await creatureService.getAll().lean();
  res.render("post/all-posts", { creatures });
});

router.get("/create", isAuthenticated, (req, res) => {
  res.render("post/create");
});

router.post("/create", async (req, res) => {
  const { name, species, skinColour, eyeColour, image, description } = req.body;
  const payload = {
    name,
    species,
    skinColour,
    eyeColour,
    image,
    description,
    owner: req.user,
  };

  try {
    await creatureService.create(payload);
    res.redirect("/posts/all");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("post/create", { errorMessages });
  }
});

router.get("/profile", isAuthenticated, async (req, res) => {
  const { user } = req;

  const myCreatures = await creatureService.getMyPosts(user?._id).lean();

  res.render("post/profile", { myCreatures });
});

router.get("/:creatureId/details", isAuthenticated, async (req, res) => {
  const { creatureId } = req.params;

  const creature = await creatureService.getSingleCreature(creatureId).lean();

  const { user } = req;
  const { owner } = creature;

  const ownerData = await User.findById(creature.owner);
  const ownerFullName = ownerData.firstName + " " + ownerData.lastName;

  const isOwner = user?._id === owner.toString();
  const hasVoted = creature.votes?.some((v) => v?._id.toString() === user?._id);
  const emailVoters = creature.votes.map((v) => v.email).join(", ");

  res.render("post/details", {
    creature,
    isOwner,
    hasVoted,
    emailVoters,
    ownerFullName,
  });
});

router.get("/:creatureId/edit", isAuthenticated, async (req, res) => {
  const { creatureId } = req.params;
  const creature = await creatureService.getSingleCreature(creatureId).lean();

  res.render("post/edit", { creature });
});

router.post("/:creatureId/edit", async (req, res) => {
  const { creatureId } = req.params;
  const { name, species, skinColour, eyeColour, image, description } = req.body;
  const payload = {
    name,
    species,
    skinColour,
    eyeColour,
    image,
    description,
    owner: req.user,
  };

  await creatureService.update(creatureId, payload);
  res.redirect(`/posts/${creatureId}/details`);
});

router.get("/:creatureId/delete", isAuthenticated, async (req, res) => {
  const { creatureId } = req.params;

  await creatureService.delete(creatureId);

  res.redirect("/posts/all");
});

router.get("/:creatureId/vote", isAuthenticated, async (req, res) => {
  const { creatureId } = req.params;
  const { user: _id } = req;

  const addVote = await creatureService.addVotesToCreature(
    creatureId,
    user._id
  );
  res.redirect(`/posts/${creatureId}/details`);
});

module.exports = router;
