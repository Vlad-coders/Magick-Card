const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// const emailRouter = require('./routes/EmailRoter');

const authRouter = require('./routes/authRouter');
const tokenRouter = require('./routes/tokenRouter');
const cardRouter = require('./routes/cardRouter');
const basketRouter = require('./routes/basketRouter');
const searchRouter = require('./routes/searchRouter');

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

// app.use('/api', emailRouter);
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/card', cardRouter);
app.use('/api/basket', basketRouter);
app.use('/api/search', searchRouter);

const sender = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/send-email', (req, res) => {
  const { clientEmail, clientName } = req.body;

  if (!clientEmail || !clientName) {
    return res.status(400).json({ message: 'Укажите почту и имя клиента' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: clientEmail,
    subject: 'Регистрация успешна!',
    text: `Здравствуйте, ${clientName}! Спасибо за регистрацию.`,
  };

  sender.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка при отправке письма:', error);
      return res.status(500).json({ message: 'Ошибка при отправке письма' });
    }
    res.status(200).json({ message: `Письмо успешно отправлено: ${info.response}` });
  });
});

module.exports = app;
