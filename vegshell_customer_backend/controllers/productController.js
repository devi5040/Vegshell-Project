const Product = require("../models/product");

module.exports = {
  addProduct: async (req, res) => {
    try {
      const newProduct = new Product({
        productName: req.body.name,
        productDescription: req.body.desc,
        productPrice: req.body.price,
        imageUrl: req.files[0].filename,
      });
      newProduct.save();
      res.status(200).json("Product added successfully");
    } catch (error) {
      res.status(500).json("error");
    }
  },
  getProduct: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Can't get products" });
    }
  },
  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: "searchProducts",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("No search happened");
    }
  },
};
