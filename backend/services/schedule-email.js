const schedule = require('node-schedule');
const nodemailer = require('nodemailer');

//Setting send date to July 5, 2018, 1:00AM 0sec
// const req = {
//   query: {
//     schedulerYear: '2018',
//     schedulerMonth: '6',
//     schedulerDay: '5',
//     schedulerHour: '1',
//     schedulerMinute: '0',
//     schedulerSecond: '0',
//     emailTo: 'ng.eric314@gmail.com',
//     emailSubject: 'Hello World!',
//     emailText: 'Hello Test',
//     emailHtml: '<b>Hello world?</b><h1>an H1 tag.</h1><br><h1 style="font-size: 10px">H1 tag with smaller letters.</h1>'
//   }
// }


// const test = (req) => {

module.exports = (req) => {

  const { schedulerYear, schedulerMonth, schedulerDay, schedulerHour, schedulerMinute, schedulerSecond } = req.query;
  const { emailTo, emailSubject, emailText, emailHtml } = req.query;

  //Setting send date to July 5, 2018, 12:38AM 0sec
  const sendDate = new Date(schedulerYear, schedulerMonth, schedulerDay, schedulerHour, schedulerMinute, schedulerSecond);

  const transporter = nodemailer.createTransport({
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

  const mailOptions = {
    from: '"careerdeer 🦌" <careerdeer@gmail.com>', // sender address
    to: `${emailTo}`, // list of receivers
    bcc: `careerdeer@gmail.com`,
    subject: `${emailSubject}`, // Subject line
    text: `${emailText}`, // plain text body
    html: `${emailHtml}` // html body
  };

  const sendDelayedMail = (emailData) => {
    transporter.sendMail(emailData, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
    });
  }

  const job = schedule.scheduleJob(sendDate, () => {
    console.log('Sending reminder email.');
    sendDelayedMail(mailOptions);
  });

}

// test(req);

// console.log("After test")

