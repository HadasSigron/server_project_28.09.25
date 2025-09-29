// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
// middlewares
app.use(express.json());

// health/root
const authRouter  = require('./routers/auth_router');
app.use('/', authRouter);


// /items router
const itemsRouter = require('./routers/items_router');
app.use('/items', itemsRouter);

// health
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});



