const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
admin.initializeApp();

const app = express();
app.use(cors( { origin: true }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
/**
* Here we're using Gmail to send 
*/
const transporter = nodemailer.createTransport({
    host: process.env.SES_SMTP,
    port: 587,
    pooled: true,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SES_USERNAME,
      pass: process.env.SES_PASSWORD,
    },
    sendingRate: 1,
  });

app.post('/', (req, res) => {

const body = req.body;
  const mailOptions = {
    from: 'myresumecontactform@ordenanow.com', 
    to: "bernardojimenezz@gmail.com",
    subject: body.subject, // email subject
    html: `<p style="font-size: 16px;">Name: ${body.name}</p>
           <p style="font-size: 16px;">Sender: ${body.email}</p>
           <p style="font-size: 16px;">Message: ${body.message}</p>
           ` // email content in HTML
  };  
  // returning result
  return transporter.sendMail(mailOptions, (erro, info) => {
    if(erro){
        return res.send(erro.toString());
    }
    if (res.statusCode == 200){
        return ('Thank you! I will contact you shortly')
    }
    return(info.toString())
  });
});

exports.sendMail = functions.https.onRequest(app);
