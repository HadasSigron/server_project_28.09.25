// routers/auth_router.js
const express = require('express');
const { generateToken, removeToken, listTokens } = require('../service/tokens_service');
const { findUser, addUser, findByUsername } = require('../service/users_service');

const router = express.Router();

// POST /login
router.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ message: 'username and password are required' });
  }

  const user = findUser(username, password);
  if (!user) return res.status(401).json({ message: 'invalid credentials' });

  const token = generateToken();
  return res.json({ token });
});

// POST /register  (no form needed – can be called with hard-coded creds)
router.post('/register', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ message: 'username and password are required' });
  }
  if (findByUsername(username)) {
    return res.status(409).json({ message: 'username already exists' });
  }
  addUser(username, password);
  return res.status(201).json({ message: 'registered' });
});

// (שלב 4 – אם כבר יש לך)
router.post('/logout', (req, res) => {
  const { token } = req.body || {};
  if (!token) return res.status(400).json({ message: 'token is required' });
  removeToken(token);
  return res.json({ message: 'logged out' });
});

// debug (optional)
router.get('/tokens', (req, res) => res.json({ activeTokens: listTokens() }));
// router.get('/users',  (req, res) => res.json({ users: listUsers() }));

module.exports = router;
