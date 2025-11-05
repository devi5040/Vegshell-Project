const Tutorial = require("../models/tutorialModels");

module.exports = {
  addTutorial: async (tutorialData) => {
    try {
      const newTutorial = new Tutorial({
        tutorialName: tutorialData.name,
        tutorialDescription: tutorialData.description,
        tutorialTime: tutorialData.time,
        tutorialVideo: tutorialData.videoUrl,
      });
      newTutorial.save();
      return newTutorial;
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  },
  getTutorial: async (req, res) => {
    try {
      const tutorials = await Tutorial.find().sort({ createdAt: -1 });
      res.status(200).json(tutorials);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
