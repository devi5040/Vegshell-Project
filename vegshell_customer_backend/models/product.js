const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      require: true,
    },
    productDescription: {
      type: String,
      require: true,
    },
    productPrice: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
