const express = require('express');
const { generateToken, revokeToken, activeTokens } = require('../service/tokens');

const router = express.Router();

// simple "users DB"
const users = [
  { username: 'hadas', password: '1234' },
];

// login
router.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'invalid credentials' });

  const token = generateToken();
  return res.json({ token });
});

// logout
router.post('/logout', (req, res) => {
  const { token } = req.body || {};
  if (!token) return res.status(400).json({ message: 'token is required' });

  const success = revokeToken(token);
  if (!success) return res.status(400).json({ message: 'invalid token' });

  return res.json({ message: 'logged out' });
});

// debug
router.get('/tokens', (req, res) => {
  res.json({ activeTokens });
});

module.exports = router;
