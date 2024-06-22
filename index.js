const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid'); // Import UUID library
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Load items from JSON file
let items = loadItemsFromFile();

// Routes
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/name/:name', (req, res) => { 
  const itemName = req.params.name;
  const item = items.find(i => i.itemName.toLowerCase() === itemName.toLowerCase());
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.get('/api/items/:id', (req, res) => {
  const itemID = req.params.id;
  const item = items.find(i => i.itemID === itemID);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.get('/api/items/author/:authorName', (req, res) => {
  const authorName = req.params.authorName;
  const authorItems = items.filter(item => item.authorName === authorName);
  if (authorItems.length > 0) {
    res.json(authorItems);
  } else {
    res.status(404).json({ error: 'No items found for this author' });
  }
});

app.post('/api/items', (req, res) => {
  const { itemName, description, type, authorName, url } = req.body;
  if (!itemName || !authorName || !url) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const newItem = {
    itemID: uuidv4(),
    itemName,
    description,
    type,
    pastebinLink: `${url}/raw/${generateRandomText()}`,
    authorName,
    timestamp: new Date().toISOString()
  };
  items.push(newItem);
  saveItemsToFile(items);
  res.status(201).json(newItem);
});

app.put('/api/items/:id', (req, res) => {
  const itemID = req.params.id;
  const { itemName, description, type, authorName } = req.body;
  const itemIndex = items.findIndex(i => i.itemID === itemID);

  if (itemIndex !== -1) {
    const updatedItem = { ...items[itemIndex], itemName, description, type, authorName };
    items[itemIndex] = updatedItem;
    saveItemsToFile(items);
    res.json(updatedItem);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.delete('/api/items/:id', (req, res) => {
  const itemID = req.params.id;
  const itemIndex = items.findIndex(i => i.itemID === itemID);

  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    saveItemsToFile(items);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Helper functions
function generateRandomText() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  const length = 10;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function loadItemsFromFile() {
  try {
    const data = fs.readFileSync('store.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading items from file:', err);
    return [];
  }
}

function saveItemsToFile(items) {
  try {
    fs.writeFileSync('store.json', JSON.stringify(items, null, 2));
    console.log('Items saved to file.');
  } catch (err) {
    console.error('Error saving items to file:', err);
  }
}
