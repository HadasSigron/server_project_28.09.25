
// routers/items_router.js
const express = require('express');
const router = express.Router();

// dummy database books (בשלב הזה בזיכרון)
let items = [
  { id: 1, title: 'Book One', author: 'Alice' },
  { id: 2, title: 'Book Two', author: 'Bob' },
  { id: 3, title: 'Book Three', author: 'Carol' }
];

// dummy database users (נשמר כאן לפי ההוראה, גם אם עדיין לא משתמשים בו בשלב 1)
let users = [
  { username: 'hadas', password: '1234' }
];

router.get('/', (req, res) => {
  res.json(items);
});

module.exports = router;
