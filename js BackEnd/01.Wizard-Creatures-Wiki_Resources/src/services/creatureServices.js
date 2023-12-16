const Creature = require("../models/Creature");

exports.create = (creatureData) => Creature.create(creatureData);

exports.getAll = () => Creature.find();

exports.getSingleCreature = (creatureId) =>
  Creature.findById(creatureId).populate("votes");

exports.update = (creatureId, creatureData) =>
  Creature.findByIdAndUpdate(creatureId, creatureData);

exports.delete = (creatureId) => Creature.findByIdAndRemove(creatureId);

exports.getMyPosts = (ownerId) =>
  Creature.find({ owner: ownerId }).populate("owner");

exports.addVotesToCreature = async (creatureId, userId) => {
  const creature = await this.getSingleCreature(creatureId);
  const isExistingVote = creature.votes.some((v) => v?.toString() === userId);

  if (isExistingVote) {
    return;
  }

  creature.votes.push(userId);
  return creature.save();
};

