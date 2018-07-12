'use strict';
const nodemailer = require('nodemailer');

// const firstName = "Eric";

// const emailData = {
//   emailTo: 'ng.eric314@gmail.com',
//   emailSubject: 'Welcome to Career Deer!',
//   emailText: `Hi ${firstName}, thanks for joining us in your adventure to track down a new job. Let us help you keep track of your job applications and provide analytics to help you find and improve areas of concern.`,
//   emailHtml: `<p>Hello it meeeee</p>`
// }

// const test = (emailData) => {

module.exports = async (emailData) => {

  const { emailTo, emailSubject, emailText, emailHtml, firstName, lastName } = emailData;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'imap.gmail.com',
    service: 'gmail',
    // port: 465,
    // secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.TRANSPORTER_USER,
      pass: process.env.TRANSPORTER_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Career Deer 🦌"careerdeer@gmail.com', // sender address
    to: emailTo, // list of receivers
    bcc: `careerdeer@gmail.com`, // Sending hidden email to self for reference.
    subject: emailSubject, // Subject line
    // text: `${emailText}`, // plain text body
    html: emailHtml // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    console.log("sending email");
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
}

// test(emailData);
