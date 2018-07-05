'use strict';
const nodemailer = require('nodemailer');

// const req = {
//   emailTo: 'ng.eric314@gmail.com',
//   emailSubject: 'Testing',
//   emailText: 'Hello Test',
//   emailHtml: '<b>Hello world?</b><h1>an H1 tag.</h1><br><h1 style="font-size: 10px">H1 tag with smaller letters.</h1>'
// }

// const test = async(req) => {

module.exports = async (req, res) => {

  const { emailTo, emailSubject, emailText, emailHtml } = req.query;

  try {


      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        service: 'gmail',
        // port: 587,
        // secure: false, // true for 465, false for other ports
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
        from: '"careerdeer 🦌" <careerdeer@gmail.com>', // sender address
        to: `${emailTo}`, // list of receivers
        bcc: `careerdeer@gmail.com`, // Sending hidden email to self for reference.
        subject: `${emailSubject}`, // Subject line
        text: `${emailText}`, // plain text body
        html: `${emailHtml}` // html body
      };

      // send mail with defined transport object
      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });

  } catch (err) {
    console.log(err);
  }
}

// test(req);
