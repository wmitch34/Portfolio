const nodemailer = require("nodemailer");
require("dotenv").config();

function sendMail(payload) {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "wmitchportfolio@zohomail.com",
    to: "wmitch34@gmail.com",
    subject: "Message from Portfolio app",
    text: `${payload.message}\n${payload.email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

module.exports = sendMail;
