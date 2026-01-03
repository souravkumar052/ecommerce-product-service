const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Health check (VERY IMPORTANT)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Product API
app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 }
  ]);
});

// Server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});

