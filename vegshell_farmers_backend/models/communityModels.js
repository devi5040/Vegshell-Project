const mongoose = require("mongoose");

const communitySchema = mongoose.Schema(
  {
    cityName: {
      type: String,
      require: true,
    },
    landDescription: {
      type: String,
      require: true,
    },
    landArea: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    latitude: {
      type: String,
      require: true,
    },
    longitude: {
      type: String,
      require: true,
    },
    soilType: {
      type: String,
      require: true,
    },
    landImage: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("community", communitySchema);
