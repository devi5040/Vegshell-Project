const Cart = require("../models/cart.js");
const product = require("../models/product.js");

module.exports = {
  addToCart: async (req, res) => {
    const { userId, cartItem, quantity } = req.body;

    try {
      const cart = await Cart.findOne({ userId });

      if (cart) {
        let productExists = false;
        const existingProduct = cart.products.find(
          (product) => product.cartItem.toString() === cartItem
        );

        if (
          existingProduct !== undefined &&
          existingProduct.cartItem.toString() === cartItem
        ) {
          productExists = true;
        }
        if (productExists) {
          const productIndex = cart.products.findIndex(
            (product) => product.cartItem.toString() === cartItem
          );
          cart.products[productIndex].quantity += quantity;
        } else {
          cart.products.push({ cartItem, quantity });
        }
        await cart.save();
        res.status(200).json("Product Added");
      } else {
        const newCart = new Cart({
          userId,
          products: [{ cartItem, quantity: quantity }],
        });
        await newCart.save();
        res.status(200).json("Product Added");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getCart: async (req, res) => {
    const { userId, cartItem } = req.body;
    try {
      const cart = await Cart.find({ userId }).populate(
        "products.cartItem",
        "_id productName productDescription productPrice imageUrl"
      );

      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteItem: async (req, res) => {
    try {
      const { userId, cartItem } = req.body;

      const cart = await Cart.findOne({ userId });
      // cart.updateOne(
      //   { _id: userId },
      //   { $pull: { cartItem: { _id: cartItem } } }
      // );
      cart.products.pull({ _id: cartItem });
      cart.save();
      res.status(200).json("Delete successful");
      console.log(cart);
    } catch (error) {
      res.status(500).json("Unknown error");
    }
  },
};
