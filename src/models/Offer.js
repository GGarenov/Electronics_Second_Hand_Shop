const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  type: {
    type: String,
    required: true,
    minLength: 3,
  },
  year: {
    type: Number,
    required: true,
    minLength: 3,
  },
  exploit: {
    type: Number,
    required: true,
    minLength: 3,
  },
  damage: {
    type: String,
    required: true,
    minLength: 3,
  },
  imageUrl: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+/, "Provide valid creature image link!"],
  },
  price: {
    type: Number,
    required: true,
    minLength: 3,
  },
  description: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 500,
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Offer = mongoose.model("Offer", offerSchema);
module.exports = Offer;
