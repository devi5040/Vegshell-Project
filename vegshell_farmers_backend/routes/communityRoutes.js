const communityController = require("../controllers/communityController");
const Router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const aws = require("aws-sdk");

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const upload = multer({
  storage: multer.memoryStorage(), // Use memory storage for uploading to S3
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      return callback(
        new Error("Only .png, .jpg, and .jpeg files are allowed")
      );
    }
    callback(null, true);
  },
});

// Route for adding land
Router.post("/add-land", upload.single("file"), async (req, res) => {
  const file = req.file;
  const { city, description, area, phone, latitude, longitude, soil } =
    req.body; // Assuming these fields are submitted along with the file

  // Create an object to store equipment data
  const communityData = {
    city,
    description,
    area,
    phone,
    latitude,
    longitude,
    soil,
    imageUrl: "", // Placeholder for the S3 image URL
  };

  const filename =
    file.fieldname + "-" + Date.now() + path.extname(file.originalname);
  try {
    const uploadParams = {
      Bucket: "vegshell",
      Key: `uploads/${filename}`, // Add folder name here
      Body: file.buffer,
    };
    const s3UploadResponse = await s3.upload(uploadParams).promise();

    // Update equipment data with S3 image URL
    communityData.imageUrl = s3UploadResponse.Location;

    // Add equipment data to the database using equipmentController
    await communityController.addLand(communityData);

    // Return success response
    res.json({
      message: "Land added successfully",
      imageUrl: s3UploadResponse.Location,
    });
  } catch (error) {
    console.error("Error adding land:", error);
    res.status(500).json({ error: "Failed to add land" });
  }
});

Router.post("/get-land", communityController.getLand);

module.exports = Router;
