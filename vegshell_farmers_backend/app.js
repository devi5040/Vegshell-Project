const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const communityRoute = require("./routes/communityRoutes.js");
const equipmentRoute = require("./routes/equipmentRoutes.js");
const tutorialRoute = require("./routes/tutorialRoutes.js");

dotenv.config();

const PORT = process.env.PORT || 5050;

//app initialization
const app = express();

//cors options enable
const corsOptions = {
  credentials: true,
  origin: "*",
  //   access-control-allow-credentials:true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.static("uploads"));
app.use(express.static("videos"));

//db connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/community", communityRoute);
app.use("/api/equipment", equipmentRoute);
app.use("/api/tutorial", tutorialRoute);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log("Started at 5050");
});
