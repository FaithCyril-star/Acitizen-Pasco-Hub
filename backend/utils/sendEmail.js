const nodemailer = require("nodemailer");
require('dotenv').config()

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      port:465,
      secure:true,
      logger:true,
      debug:true,
      secureConnection:false,
      auth: {
        user: process.env.USERNAME,
        pass: process.env.PASS,
      },
      tls:{
        rejectUnauthorized: true
      }
    });

    await transporter.sendMail({
      from: `"Acitizen PascoHub Team" <${process.env.USER}>`,
      to: email,
      subject: subject,
      html: `<a href="${text}">Verify here</a>`,
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};

module.exports = sendEmail;