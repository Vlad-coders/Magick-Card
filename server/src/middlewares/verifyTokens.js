const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyAccessToken = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1]; 
    
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user; 
    res.locals.group = 'buffaloes';

    return next();
  } catch (error) {
    console.log('Invalid access token');
    return res.sendStatus(403);
  }
};

const verifyRefreshToken = (req, res, next) => {
  try {
    const { refreshToken } = req.cookies; 
    const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    res.locals.user = user;

    return next();
  } catch (error) {
    console.log('Invalid refresh token');
    return res.clearCookie('refreshToken').sendStatus(401);
  }
};

module.exports = { verifyAccessToken, verifyRefreshToken };
