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
    to: "aliharis2739@gmail.com, jonathan@landmarklegal.com", // list of receivers
    subject: "Client Info ✔", // Subject line
    // text: "Hello world?", // plain text body
    html: `<h1>User Info</h1>
      <p>This user wants to get your service</p>
      <h2>Here's user information</h2>
        <div style="display:flex; justify-content:center; margin:5px 0; align-items:center; gap:5px;">
          <div>First name:</div><div style="font-weight:bold; margin-left:10px;">${data.firstName}</div>
        </div>
        <div style="display:flex; justify-content:center; margin:5px 0; align-items:center; gap:5px;">
          <div>Last name:</div><div style="font-weight:bold; margin-left:10px;">${data.lastName}</div>
        </div>
        <div style="display:flex; justify-content:center; margin:5px 0; align-items:center; gap:5px;">
          <div>Email:</div><div style="font-weight:bold; margin-left:10px;">${data.email}</div>
        </div>
        <div style="display:flex; justify-content:center; margin:5px 0; align-items:center; gap:5px;">
          <div>Address:</div><div style="font-weight:bold; margin-left:10px;">${data.address}</div>
        </div>
    `, // html body
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
