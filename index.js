const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 3000;
const dataFile = path.join(__dirname, 'data.json');
const upload = multer({ dest: 'uploads/' });

// Middleware to log IP address to console
app.use((req, res, next) => {
  const clientIP = req.ip;
  console.log(`Request from IP: ${clientIP}`);
  next();
});

// Middleware
app.use(bodyParser.json());

// Helper functions to read and write data
const readData = () => {
  try {
    const data = fs.readFileSync(dataFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const writeData = (data) => {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

// Generate a numeric ID
const generateNumericId = () => {
  return Date.now().toString(); // Or any other logic for numeric IDs
};

// Routes
app.get('/api/ip', (req, res) => {
  const clientIP = req.ip;
  res.json({ ip: clientIP });
});

app.get('/api/items', (req, res) => {
  const items = readData();
  res.json(items);
});

app.post('/api/items', upload.single('file'), (req, res) => {
  const { itemName, description, type, pastebinLink, authorName } = req.body;
  const items = readData();
  const newItem = {
    id: generateNumericId(),
    itemName,
    description,
    type,
    pastebinLink,
    authorName,
    file: req.file ? req.file.path : null,
    timestamp: new Date(),
    randomNumber: Math.floor(Math.random() * 4) + 1
  };
  items.push(newItem);
  writeData(items);
  res.status(201).json(newItem);
});

app.get('/api/items/:id', (req, res) => {
  const items = readData();
  const item = items.find(i => i.id === req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.put('/api/items/:id', (req, res) => {
  const { itemName, description, type, pastebinLink, authorName } = req.body;
  const items = readData();
  const index = items.findIndex(i => i.id === req.params.id);
  if (index !== -1) {
    items[index] = {
      ...items[index],
      itemName,
      description,
      type,
      pastebinLink,
      authorName,
    };
    writeData(items);
    res.json(items[index]);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.delete('/api/items/:id', (req, res) => {
  const items = readData();
  const index = items.findIndex(i => i.id === req.params.id);
  if (index !== -1) {
    items.splice(index, 1);
    writeData(items);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
