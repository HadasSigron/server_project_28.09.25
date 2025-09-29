const express = require('express');
const { generateToken, activeTokens } = require('../utils/tokens');

const router = express.Router();

// simple "users DB"
const users = [
  { username: 'hadas', password: '1234' },
];

router.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ message: 'username and password are required' });
  }

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'invalid credentials' });
  }

  const token = generateToken();
  return res.json({ token });
});

// optional debug route to see tokens
router.get('/tokens', (req, res) => {
  res.json({ activeTokens });
});

module.exports = router;
