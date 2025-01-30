const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();

const authRouter = require('./routes/authRouter');
const tokenRouter = require('./routes/tokenRouter');
const cardRouter = require('./routes/cardRouter');
const basketRouter = require('./routes/basketRouter');
const searchRouter = require('./routes/searchRouter');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/card', cardRouter);
app.use('/api/basket', basketRouter);
app.use('/api/search', searchRouter);




module.exports = app;