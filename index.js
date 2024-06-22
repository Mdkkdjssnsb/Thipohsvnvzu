const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

let items = [
{
    itemID: '1',
    itemName: 'sdxl.js',
    description: 'Generate Your Imagination Using SDXL API.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/LooksCoconut',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '2',
    itemName: 'prompt.js',
    description: 'Generate Unique Prompts based on Midjourney.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ShavedPrefer',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '3',
    itemName: 'promptgen.js',
    description: 'Generate Simple Prompts',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ShallExisting',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '4',
    itemName: 'movieinfo.js',
    description: 'Generate some movie informations.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/WhiterRenounce',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '5',
    itemName: 'pinterest.js',
    description: 'Get images from Pinterest.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/OutragedDislikes',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '6',
    itemName: 'videoinfo.js',
    description: 'view YouTube video informations',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/SquishyForties',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '7',
    itemName: 'lyrics.js',
    description: 'Get song lyrics.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/AlvarezRebuilt',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '8',
    itemName: 'sing.js',
    description: 'Download Song From YouTube.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BreathedLucia',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '9',
    itemName: 'sdxl.js',
    description: 'Generate image using Sdxl API (13 models)',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/LooksCoconut',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '10',
    itemName: 'sim.js',
    description: 'Chat with SimiSimi',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ArrestsAirline',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '11',
    itemName: 'pexels.js',
    description: 'Search images uaing pexels API',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ComposeSelfless',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '12',
    itemName: 'stalk.js',
    description: 'Get facebook users informations.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/FindingBringin',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '13',
    itemName: '4k.js',
    description: ' Upscale your image',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/QueenCruel',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '14',
    itemName: 'anigen.js',
    description: 'Generate images based on anime style.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/StakedStacey',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '15',
    itemName: 'replicate.js',
    description: 'Generate images from Replicate API',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/LeotardBangs',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '16',
    itemName: 'accept.js',
    description: 'accept users friend request.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/VagueMower',
    authorName: 'NTKhnag',
    timestamp: new Date().toISOString()
  },
{
    itemID: '17',
    itemName: 'adduser.js',
    description: 'add user in groups via uid or profile link.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/GrapesMarine',
    authorName: 'NTKhnag',
    timestamp: new Date().toISOString()
  },
{
    itemID: '18',
    itemName: 'admin.js',
    description: 'admin management.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/GrampsAnimals',
    authorName: 'NTKhnag',
    timestamp: new Date().toISOString()
  },
{
    itemID: '19',
    itemName: 'balance.js',
    description: 'check your balance .',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/DivorcesVenice',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '20',
    itemName: 'ban.js',
    description: 'ban users from thread.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/TriangleSkeleton',
    authorName: 'NTKhnag',
    timestamp: new Date().toISOString()
  },
{
    itemID: '21',
    itemName: 'bank.js',
    description: 'Bank system .',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/MortuarySimian',
    authorName: 'LiANE | Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '22',
    itemName: 'callad.js',
    description: 'send message to bot admins.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/KeyboardBiker',
    authorName: 'NTKhnag',
    timestamp: new Date().toISOString()
  },
{
    itemID: '23',
    itemName: 'count.js',
    description: 'count your messages.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/CausesStyles',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '24',
    itemName: 'daily.js',
    description: 'get daily gifts.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ShopsBronson',
    authorName: 'NTKhnag',
    timestamp: new Date().toISOString()
  },
{
    itemID: '25',
    itemName: 'delete.js',
    description: 'Delete commands models.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/HerbertRamelle',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '26',
    itemName: 'flip.js',
    description: 'Flip your money.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/HonestyJerry',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '27',
    itemName: 'kick.js',
    description: 'kick user.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PuzzlesParoled',
    authorName: 'NTKhnag',
    timestamp: new Date().toISOString()
  },
{
    itemID: '28',
    itemName: 'notification.js',
    description: 'Send notification to all group chat.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/TeethSniff',
    authorName: 'NTKhnag',
    timestamp: new Date().toISOString()
  },
{
    itemID: '29',
    itemName: 'uptime.js',
    description: 'check system uptime.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PlatoonTaker',
    authorName: 'NTKhnag',
    timestamp: new Date().toISOString()
  },
{
    itemID: '30',
    itemName: 'user.js',
    description: ' user management.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PicturedVicinity',
    authorName: 'NTKhnag',
    timestamp: new Date().toISOString()
  },
];

// Routes
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/name', (req, res) => {
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
  const { itemID, itemName, description, type, pastebinLink, authorName } = req.body;
  if (!itemID || !itemName || !pastebinLink || !authorName) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const newItem = {
    itemID,
    itemName,
    description,
    type,
    pastebinLink,
    authorName,
    timestamp: new Date().toISOString()
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/api/items/:id', (req, res) => {
  const itemID = req.params.id;
  const { itemName, description, type, pastebinLink, authorName } = req.body;
  const itemIndex = items.findIndex(i => i.itemID === itemID);

  if (itemIndex !== -1) {
    const updatedItem = { ...items[itemIndex], itemName, description, type, pastebinLink, authorName };
    items[itemIndex] = updatedItem;
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
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
