const nodemailer = require("nodemailer");
require('dotenv').config()

const sendEmail = async (email, subject, url) => {
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
      html: ` <body style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; padding: 20px;">
      <h1>Verify your email address</h1>
      <p>Hello Acitizen,</p>
      <p>Thank you for signing up for Acitizen Pasco Hub. Please verify your email address by clicking on the button below:</p>
      <p style="text-align: center; margin-top: 30px;"><a href="${url}" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 4px;">Verify Email Address</a></p>
      <p>If you did not sign up for our service, please ignore this email.</p>
      <p>Thanks,<br>APH</p>
    </body>`
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};

module.exports = sendEmail;