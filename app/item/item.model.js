const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
