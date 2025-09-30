// middleware/isLoggedin.js
const { activeTokens } = require('../service/tokens_service');

function isLoggedin(req, res, next) {
  // Expect: Authorization: Bearer <token>
  const auth = req.headers['authorization'];
  if (!auth) {
    return res.status(401).json({ message: 'unauthorized: missing Authorization header' });
  }

  const [scheme, token] = auth.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'unauthorized: bad auth format' });
  }

  const found = activeTokens.includes(token);
  if (!found) {
    return res.status(401).json({ message: 'unauthorized: invalid token' });
  }

  next();
}

module.exports = { isLoggedin };
