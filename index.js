const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

let items = [
 {
  itemID: 1,
    itemName: 'goatbin.js',
    description: 'Get commands short link.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/LudlowStamp',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 2,
    itemName: 'spotify.js',
    description: 'Download songs from Spotify.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/DarknessVitamin',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 3,
    itemName: 'info.js',
    description: 'Get system, bot and owne informations..',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ProbeDecay',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 4,
    itemName: 'goatstore.js',
    description: 'This is a store of commands.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/MowedCharts',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
  itemID: 5,
    itemName: 'lyrics.js',
    description: 'Get song lyrics.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/JuggleDawson',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 6,
    itemName: 'notification.js',
    description: 'This command allows to send message to all grouo chat where your bot is added.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/NieceReceiver',
    authorName: 'NTKhang | Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 7,
    itemName: 'prefix.js',
    description: 'Check bot system.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/MineralOcean',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 8,
    itemName: 'sing.js',
    description: 'Download songs from YT-MUSIC ( non prefix)',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PaganPsychos',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 9,
    itemName: '4k.js',
    description: 'Upscale images.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/RidingWired',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 10,
    itemName: 'accept.js',
    description: 'Accept users friends requests..',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/TissuesTrumpet',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 11,
    itemName: 'adduser.js',
    description: 'Add user to your group chats.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/FigureConfine',
    authorName: 'NTKhang | Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 12,
    itemName: 'admin.js',
    description: 'Admins management system.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BailiffShambles',
    authorName: 'NTKhang | Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 13,
    itemName: 'balance.js',
    description: 'Check your balance or transfer money.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/FragmentPrices',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 14,
    itemName: 'ban.js',
    description: 'Ban Users from box chat.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/WrittenDiddly',
    authorName: 'NTKhang | Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 16,
    itemName: 'bank.js',
    description: 'The bank command provides various banking services including games.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/FiftyAllie',
    authorName: 'LiANE| Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 17,
    itemName: 'callad.js',
    description: 'Send message to bot admins',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/EnticingSeeming',
    authorName: 'NTKhang | Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
 itemID: 18,
    itemName: 'bing.js',
    description: 'Generates images based on provided text using Bing API.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/TamponsDeclared',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 19,
    itemName: 'count.js',
    description: 'View the number of messages of all members or yourself (since the bot joined the group).',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/CleanedBullies',
    authorName: 'NTKhang | Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 20,
    itemName: 'daily.js',
    description: 'Get daily random gifts.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BrewsterPappy',
    authorName: 'NTKhang | Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 21,
    itemName: 'pinterest.js',
    description: 'This command allows you to search for images on Pinterest based on a given query and fetch a specified number of images.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/FartherTiles',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 22,
    itemName: 'pexels.js',
    description: 'his command allows you to search for images on pexels based on a given query and fetch a specified number of images.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/DrawnRecalled',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 23,
    itemName: 'delete.js',
    description: 'Delete command files.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PsychicLicence',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 24,
    itemName: 'flip.js',
    description: 'Flip a coins and bets on heads or tails.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/LiableJordan',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 25,
    itemName: 'help.js',
    description: 'This command allows you to see all available commands list ( dont change my credits ).',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ReunitedHabits',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 26,
    itemName: 'imgbb.js',
    description: 'Upload image to imgbb by replying to photo.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PavementHershey',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 27,
    itemName: 'kick.js',
    description: 'Kick members from chat box with additional features.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/DecoderRespond',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 28,
    itemName: 'leave.js',
    description: 'Get off.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/InitialAncient',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 29,
    itemName: 'pending.js',
    description: 'Approve pending groups in spam list or unapproved groups.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ComposedTaking',
    authorName: 'NTKhang | Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 30,
    itemName: 'richest.js',
    description: 'Get top 10 users list ',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/SubduralDarkness',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
  itemID: 31,
    itemName: 'sing.js',
    description: 'Download Songs using YTDL package.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/HankeyBashed',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
 {
itemID: 32,
    itemName: 'thread.js',
    description: 'Manage group chat in bot system',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/FossilSwallows',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
itemID: 33,
    itemName: 'tid.js',
    description: 'View threadID of your group chat',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/TippySprayed',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
itemID: 34,
    itemName: 'translate.js',
    description: 'Translate text to the desired language',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BirthDensity',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
itemID: 35,
    itemName: 'uid.js',
    description: 'View facebook user id of user',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BellsProving',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
itemID: 36,
    itemName: 'uptime.js',
    description: 'Get System Information',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/LisztExisted',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
itemID: 37,
    itemName: 'slot.js',
    description: 'Game slot with bonus rounds, multipliers, and interactive elements',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/DownsSensed',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
itemID: 38,
    itemName: 'user.js',
    description: 'User management system',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/LlanfairFurious',
    authorName: 'NTKhang | Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
itemID: 39,
    itemName: 'video.js',
    description: 'Download video from YouTube.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ApprovalSatyr',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
itemID: 40,
    itemName: 'warn.js',
    description: 'warn member in group, if they have 3 warns, they will be banned',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/GesturesRusso',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
itemID: 41,
    itemName: 'onlyadminbox.js',
    description: 'turn on/off only admin box can use bot',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/YeastWinter',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
itemID: 42,
    itemName: 'onlyadmin.js',
    description: 'turn on/off only admin can use bot',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/MittensDonoghue',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
itemID: 43,
    itemName: 'autolink.js',
    description: 'Auto video downloader for Instagram, Facebook, and TikTok',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/SurelyDrapes',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
itemID: 44,
    itemName: 'adc.js',
    description: 'adc command',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/HopperGrubbing',
    authorName: 'Loid Butter',
    timestamp: new Date().toISOString()
  },
   ];

// Function to generate a sequential itemID
function generateNextItemID() {
  return items.length > 0 ? items[items.length - 1].itemID + 1 : 1;
}

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
  const itemID = parseInt(req.params.id);
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
  const { itemName, description, type, pastebinLink, authorName } = req.body;
  const itemID = generateNextItemID();
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
  const itemID = parseInt(req.params.id);
  const { itemName, description, type, pastebinLink, authorName } = req.body;
  const itemIndex = items.findIndex(i => i.itemID === itemID);

  if (itemIndex !== -1) {
    items[itemIndex].itemName = itemName;
    items[itemIndex].description = description;
    items[itemIndex].type = type;
    items[itemIndex].pastebinLink = pastebinLink;
    items[itemIndex].authorName = authorName;
    res.json(items[itemIndex]);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.delete('/api/items/:id', (req, res) => {
  const itemID = parseInt(req.params.id);
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
