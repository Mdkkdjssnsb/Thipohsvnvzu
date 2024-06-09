const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

let items = [
  {
    itemID: '1',
    itemName: 'sing.js',
    description: 'Download songs from YT-MUSIC',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PharaohDesire',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '2',
    itemName: 'lyrics.js',
    description: 'Get any songs Lyrics',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BleakMagazine',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },
  
{
    itemID: '3',
    itemName: 'tempmail.js',
    description: 'Generate temporary email and check inbox',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/StronglyPamela',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '4',
    itemName: 'videoinfo.js',
    description: 'Retrieve detailed information about a YouTube video, including title, description, thumbnails, view count, like count, comment count, channel details, and more.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/OmahaWarfare',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '5',
    itemName: 'pinterest.js',
    description: 'This command allows you to search for images on pinterest based on a given query and fetch a specified number of images.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/KlausCoasters',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '6',
    itemName: 'movieinfo.js',
    description: 'This command allows to get some movie informations',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BabbleHaunted',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '7',
    itemName: 'anime.js',
    description: 'Get random anime girl image',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/TweedleManson',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '8',
    itemName: 'promptgen.js',
    description: 'Get midjourney theam promots',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/SwimsuitVerbal',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '9',
    itemName: 'bing',
    description: 'Generate images from text prompts using the Bing image generation API. This tool allows users to create visual representations from descriptive text inputs. Ideal for creative projects, brainstorming, and visualization.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/DreamerLeniency',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '10',
    itemName: 'dalle.js',
    description: 'Generate images from text prompts using the dalle API.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/WeirdosBailiff',
    authorName: 'OtinxSandip | ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '11',
    itemName: 'aniwall',
    description: 'Get Anime wallpapers',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/EnySixUG',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '12',
    itemName: 'anivoice',
    description: 'get random anime character voice based on anime names',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/StBMZgLJ',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '13',
    itemName: 'anivid',
    description: 'get random anime videos.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/xm6UbqDt',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '14',
    itemName: 'anistatus',
    description: 'get random anime status video.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/v7vWRnZa',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '15',
    itemName: 'aniquotes',
    description: 'get anime quotes video. use cmd2 if first one didnt work',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/safKswut',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '16',
    itemName: 'anipic',
    description: 'get random anime pictures.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/2GzHmAmv',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '17',
    itemName: 'anime',
    description: 'get random anime recommendation.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/WyF0rX5G',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '18',
    itemName: 'emi',
    description: 'emi text to image generator.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/ZzKqCctE',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '19',
    itemName: 'clear',
    description: 'unsend the all msg of bot at once adjust msg limit in code.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/JUpr6BRm',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '20',
    itemName: 'clean',
    description: 'clean the cache and tmp folder.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/kTPuFTRe',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '21',
    itemName: 'cc (candy crush)',
    description: 'play candy crush game swipe the position of candy to make 3 sequence.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/jpjEShmX',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '22',
    itemName: 'card',
    description: 'get random card image.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/sEQyzykX',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '23',
    itemName: 'calc',
    description: 'scientific calculator.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/Mzp6jQrC',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '24',
    itemName: 'autolink',
    description: '(update) autolink cmd now it can download vdo of x and pinterest and youtube too. just send link vdo will be auto download.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/sKrkVQc8',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '25',
    itemName: 'audio',
    description: 'sing cmd alternative',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/u5WgAExY',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '26',
    itemName: 'attack',
    description: 'use this code to roast others.whenver you do attack on {uid} if that uid user send any msg bot will keep roast him until you turn off by attack off {uid}.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/ZCUsG4z2',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },
];

// Routes
app.get('/api/items', (req, res) => {
  res.json(items);
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
