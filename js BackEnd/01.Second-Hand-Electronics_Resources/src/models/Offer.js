const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 10 },
  type: { type: String, required: true, minLength: 2 },
  damages: { type: String, required: true, minLength: 10 },
  description: { type: String, required: true, minLength: 10, maxLength: 200 },
  production: { type: Number, required: true, min: 1900, max: 2023 },
  exploitation: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },

  image: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+/, "Invalid image link!"],
  },
  buyingList: [
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

const Offer = mongoose.model("Offer", offerSchema);
module.exports = Offer;
