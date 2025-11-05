const mongoose = require("mongoose");

const equipmentSchema = mongoose.Schema(
  {
    equipmentName: {
      type: String,
      require: true,
    },
    equipmentDescription: {
      type: String,
      require: true,
    },
    rent: {
      type: String,
      require: true,
    },
    rentType: {
      type: String,
      require: true,
    },
    equipmentImage: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("equipment", equipmentSchema);
