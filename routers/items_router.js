const express = require('express');
const { isLoggedin } = require('../middleware/isLoggedin');

const router = express.Router();

// ✅ הגנה על כל הנתיבים תחת /items
router.use(isLoggedin);

// dummy data
let items = [
  { id: 1, title: 'Book One', author: 'Alice' },
  { id: 2, title: 'Book Two', author: 'Bob' },
  { id: 3, title: 'Book Three', author: 'Carol' }
];

router.get('/', (req, res) => {
  res.json(items);
});

module.exports = router;
