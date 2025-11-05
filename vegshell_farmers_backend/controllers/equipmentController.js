const Equipment = require("../models/equipmentModel");

module.exports = {
  addEquipment: async (equipmentData, res) => {
    console.log("====================================");
    console.log(equipmentData);
    console.log("====================================");
    try {
      const newEquipment = new Equipment({
        equipmentName: equipmentData.name,
        equipmentDescription: equipmentData.description,
        rent: equipmentData.rent,
        rentType: equipmentData.type,
        equipmentImage: equipmentData.imageUrl,
      });
      newEquipment.save();
      return newEquipment;
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  },
  getEquipment: async (req, res) => {
    try {
      const equipments = await Equipment.find().sort({ createdAt: -1 });
      res.status(200).json(equipments);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
