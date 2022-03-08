// export default function (req, res) {
//   console.log(req.body);
// }

export default function (req, res) {
  console.log(req.body);
  console.log(process.env.USER_MAIL)
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: `${process.env.USER_MAIL}`,
      pass: `${process.env.USER_MAIL_PASS}`
    },
    secure: true,
  });

  const mailData = {
    from: 'salut@mail.com',
    to: `${process.env.USER_MAIL}`,
    subject: `Message de la part de  ${req.body.name} depuis Portfolio`,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });


  res.status(200).json({message: 'good'})
}
