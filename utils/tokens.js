const crypto = require('crypto');

const activeTokens = []; // tokens stored in array

function generateToken() {
  const token = crypto.randomBytes(16).toString('hex');
  activeTokens.push(token);
  return token;
}

module.exports = {
  generateToken,
  activeTokens,
};
