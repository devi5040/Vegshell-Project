const route = require("express").Router();
const cartController = require("../controllers/cartController.js");

route.post("/add-item", cartController.addToCart);
route.post("/get-item", cartController.getCart);
route.post("/deleteItem", cartController.deleteItem);

module.exports = route;
