const mongoose = require("mongoose");

const creatureSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 2 },
  species: { type: String, required: true, minLength: 3 },
  skinColour: { type: String, required: true, minLength: 3 },
  eyeColour: { type: String, required: true, minLength: 3 },
  image: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+/, "Invalid image link!"],
  },
  description: { type: String, required: true, minLength: 5, maxLength: 500 },
  votes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Creature = mongoose.model("Creature", creatureSchema);
module.exports = Creature;