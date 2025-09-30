const crypto = require('crypto');

const activeTokens = []; // tokens stored in array

function generateToken() {
  const token = crypto.randomBytes(16).toString('hex');
  activeTokens.push(token);
  return token;
}

function revokeToken(token) {
  const index = activeTokens.indexOf(token);
  if (index !== -1) {
    activeTokens.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  generateToken,
  revokeToken,
  activeTokens,
};
