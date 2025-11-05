const mongoose = require("mongoose");

const tutorialSchema = mongoose.Schema(
  {
    tutorialName: {
      type: String,
      require: true,
    },
    tutorialDescription: {
      type: String,
      require: true,
    },
    tutorialTime: {
      type: String,
      require: true,
    },
    tutorialVideo: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tutorial", tutorialSchema);
