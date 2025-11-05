const Router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const tutorialController = require("../controllers/tutorialController");
const aws = require("aws-sdk");

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const upload = multer({
  storage: multer.memoryStorage(), // Use memory storage for uploading to S3
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    if (ext !== ".mp4" && ext !== ".mov" && ext !== ".avi") {
      return callback(new Error("Only .mp4, .avi, and .mov files are allowed"));
    }
    callback(null, true);
  },
});

// Route for adding land
Router.post("/add-tutorial", upload.single("file"), async (req, res) => {
  const file = req.file;
  const { name, description, time } = req.body; // Assuming these fields are submitted along with the file

  // Create an object to store equipment data
  const tutorialData = {
    name,
    description,
    time,
    videoUrl: "", // Placeholder for the S3 image URL
  };

  const filename =
    file.fieldname + "-" + Date.now() + path.extname(file.originalname);
  try {
    const uploadParams = {
      Bucket: "vegshell",
      Key: `videos/${filename}`, // Add folder name here
      Body: file.buffer,
    };
    const s3UploadResponse = await s3.upload(uploadParams).promise();

    // Update equipment data with S3 image URL
    tutorialData.videoUrl = s3UploadResponse.Location;

    // Add equipment data to the database using equipmentController
    await tutorialController.addTutorial(tutorialData);

    // Return success response
    res.json({
      message: "Tutorial added successfully",
      imageUrl: s3UploadResponse.Location,
    });
  } catch (error) {
    console.error("Error adding  Tutorial", error);
    res.status(500).json({ error: "Failed to add Tutorial" });
  }
});

Router.post("/get-tutorial", tutorialController.getTutorial);

module.exports = Router;
