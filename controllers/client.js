const nodemailer = require("nodemailer");
const Client = require("../models/Client");
const sendMessage = async (req, res) => {
  const { firstName, lastName, email, address } = req.body;
  // try {
  const data = await Client.create({ firstName, lastName, email, address });
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    service: "gmail",
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "harisali2928@gmail.com",
      pass: "flym tczb klny mbns",
    },
  });
  const info = await transporter.sendMail({
    from: "harisali2928@gmail.com", // sender address
    to: "aliharis2739@gmail.com", // list of receivers
    subject: "User Info ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("Email sent successfully");
  res.status(201).json({
    success: true,
    msg: "Client requested for service",
    data,
  });
  // } catch (error) {
  //   res.status(500).json({
  //     msg: "Something went wrong",
  //     error,
  //   });
  // }
};

module.exports = sendMessage;
