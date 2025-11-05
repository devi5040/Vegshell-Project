const user = require("../models/user.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//const OTP = require("../models/otp.js");

//const VONAGE_API_KEY = "57237dad";
//const VONAGE_API_SECRET = "BiVLjy1wH40HxmIL";

//const { Vonage } = require("@vonage/server-sdk");
//const otp = require("../models/otp.js");

// const vonage = new Vonage({
//   apiKey: VONAGE_API_KEY,
//   apiSecret: VONAGE_API_SECRET,
// });

module.exports = {
  createUser: async (req, res) => {
    const newUser = new user({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET
      ).toString(),
    });
    try {
      await newUser.save();
      res.status(201).json({ message: "User Created Successfully" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  // otpSend: async (req, res) => {
  //   const { phoneNumber } = req.body;
  //   const from = "Vonage APIs";
  //   const to = `+91${phoneNumber}`;
  //   const otp = Math.floor(100000 + Math.random() * 900000).toString();
  //   const text = `Your Otp is ${otp}                                              `;
  //   const newOtp = new OTP({
  //     phoneNumber: phoneNumber,
  //     otp: otp,
  //   });
  //   try {
  //     async function sendSMS() {
  //       await vonage.messages.send(
  //         from,
  //         to,
  //         text,
  //         // await vonage.sms
  //         //   .send({ to, from, text })
  //         //   .then((resp) => {
  //         //     console.log(resp);
  //         //     newOtp.save();

  //         //     res.status(200).json("Message sent successfully");
  //         //   })
  //         //   .catch((err) => {
  //         //     console.error(err);
  //         //     res.status(500).json("Otp sending failed");
  //         //   });
  //         (err, responseData) => {
  //           if (err) {
  //             console.error(err);
  //           } else {
  //             if (responseData["message-count"] === "1") {
  //               const messageStatus = responseData.messages[0]["status"];
  //               if (messageStatus !== "0") {
  //                 console.error(`Message failed with status: ${messageStatus}`);
  //               } else {
  //                 console.log("Message sent successfully");
  //               }
  //             } else {
  //               console.error("Unexpected response format");
  //             }
  //           }
  //         }
  //       );
  //     }

  //     sendSMS();
  //   } catch (error) {
  //     res.json(500).json("DB error");
  //   }
  // },
  // verifyOtp: async (req, res) => {
  //   console.log(req.body);
  //   const phone = req.body.phoneNumber;
  //   const result = otp.find({ phoneNumber: phone });
  //   res.status(500).json("eroor");
  // },
  //login code
  loginUser: async (req, res) => {
    console.log(req);
    try {
      const userAvail = await user.findOne({
        phone: req.body.phoneNumber,
      });
      if (!userAvail) {
        return res.status(500).json({ message: userAvail });
      }

      const decryptedPassword = CryptoJS.AES.decrypt(
        userAvail.password,
        process.env.SECRET
      );
      const decryptedpass = decryptedPassword.toString(CryptoJS.enc.Utf8);
      if (decryptedpass !== req.body.password) {
        return res.status(500).json({ message: "Wrong Password" });
      }
      const userToken = jwt.sign(
        {
          id: userAvail.__id,
        },
        process.env.SECRET,
        { expiresIn: "7d" }
      );

      const { password, __v, createdAt, updatedAt, ...userData } =
        userAvail._doc;
      res.status(200).json({ ...userData, token: userToken });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};
