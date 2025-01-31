const nodemailer = require('nodemailer');
require('dotenv').config();

const sender = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rasulmagomedov7005@gmail.com',
    pass: 'qzsf hcea hmze thpx',
  },
});

module.exports = sender;

