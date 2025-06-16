console.log("Starting server...");

const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

const shoes = [
  { id: 1, name: 'Nike Phantom', gender: 'Men', size: 42, color: 'Red' },
  { id: 2, name: 'Adidas Predator', gender: 'Women', size: 39, color: 'Black' },
  { id: 3, name: 'Puma Future', gender: 'Unisex', size: 44, color: 'Blue' }
];

app.get('/shoes', (req, res) => {
  res.json(shoes);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
