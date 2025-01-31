const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // Или другой почтовый сервис (например, 'yahoo', 'outlook')
  auth: {
    user: 'rasulmagomedov7005@gmail.com', // Ваш email
    pass: '16R23a100s', // Пароль приложения (для Gmail нужно создать app password)
  },
});

async function sendEmail(to, subject, text) {
  try {
    const info = await transporter.sendMail({
      from: '"My App" <your-email@gmail.com>',
      to,
      subject,
      text,
    });

    console.log('Email sent: ', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = sendEmail;
