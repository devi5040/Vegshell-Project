const productController = require("../controllers/productController");
const Router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
//create uploads directory
const dir = "./uploads";
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      return callback(null, false);
    }
    callback(null, true);
  },
});

Router.post("/add-product", upload.any(), productController.addProduct);
Router.post("/get-products", productController.getProduct);
Router.post("/search/:key", productController.searchProduct);

module.exports = Router;
