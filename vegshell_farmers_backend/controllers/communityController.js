const Community = require("../models/communityModels");

module.exports = {
  addLand: async (communityData) => {
    try {
      const newLand = new Community({
        cityName: communityData.city,
        landDescription: communityData.description,
        landArea: communityData.area,
        phoneNumber: communityData.phone,
        latitude: communityData.latitude,
        longitude: communityData.longitude,
        soilType: communityData.soil,
        landImage: communityData.imageUrl,
      });
      newLand.save();
      return newLand;
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  },
  getLand: async (req, res) => {
    try {
      const products = await Community.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
