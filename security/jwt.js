var jwt = require('jsonwebtoken');

var expressJwt = require('express-jwt');


const dotenv = require('dotenv');

// get config vars
dotenv.config();

// access config var
//process.env.TOKEN_SECRET;

var validateJwt = expressJwt({
  secret: process.env.TOKEN_SECRET, algorithms: ['RS256']
});

exports.authenticateToken= function(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  if(validateJwt) next();
  if(!validateJwt) res.sendStatus(401);
}