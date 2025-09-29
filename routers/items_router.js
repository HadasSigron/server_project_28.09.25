
// routers/items_router.js
const express = require('express');
const router = express.Router();

// dummy database books 
let items = [
  { id: 1, title: 'Book One', author: 'Alice' },
  { id: 2, title: 'Book Two', author: 'Bob' },
  { id: 3, title: 'Book Three', author: 'Carol' }
];

router.get('/', (req, res) => {
  res.json(items);
});

module.exports = router;
