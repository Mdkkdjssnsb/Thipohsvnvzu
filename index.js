const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB Atlas connection URI
const uri = 'mongodb+srv://aryanchauhan686:<BY76HnO1eroZiiab>@cluster0.my4grz3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err.message);
});

// Define a schema and a model (example)
const Schema = mongoose.Schema;
const itemSchema = new Schema({
  itemName: String,
  description: String,
  type: String,
  pastebinLink: String,
  authorName: String,
  timestamp: { type: Date, default: Date.now }
});

const Item = mongoose.model('Item', itemSchema);

// Middleware to log IP address to console
app.use((req, res, next) => {
  const clientIP = req.ip;
  console.log(`Request from IP: ${clientIP}`);
  next();
});

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/api/ip', (req, res) => {
  const clientIP = req.ip;
  res.json({ ip: clientIP });
});

app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/items', async (req, res) => {
  const { itemName, description, type, pastebinLink, authorName } = req.body;
  try {
    const newItem = new Item({
      itemName,
      description,
      type,
      pastebinLink,
      authorName,
    });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/items/:id', async (req, res) => {
  const itemID = req.params.id;
  try {
    const item = await Item.findById(itemID);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/items/:id', async (req, res) => {
  const itemID = req.params.id;
  const { itemName, description, type, pastebinLink, authorName } = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(itemID, {
      itemName,
      description,
      type,
      pastebinLink,
      authorName,
    }, { new: true });
    if (updatedItem) {
      res.json(updatedItem);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/items/:id', async (req, res) => {
  const itemID = req.params.id;
  try {
    const deletedItem = await Item.findByIdAndDelete(itemID);
    if (deletedItem) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
