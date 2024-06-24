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
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '17',
    itemName: 'adduser.js',
    description: 'add user in groups via uid or profile link.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/GrapesMarine',
    authorName: 'NTKhang',
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
    authorName: 'NTKhang',
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
    authorName: 'NTKhang',
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
    authorName: 'NTKhang',
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
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '28',
    itemName: 'notification.js',
    description: 'Send notification to all group chat.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/TeethSniff',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '29',
    itemName: 'uptime.js',
    description: 'check system uptime.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PlatoonTaker',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '30',
    itemName: 'user.js',
    description: ' user management.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PicturedVicinity',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '31',
    itemName: 'goatmart.js',
    description: 'GoatMart Link.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/DebraThinkin',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '32',
    itemName: 'onlyadminbox.js',
    description: 'Turn on onlyadminbox function..',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/CottageLizards',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '33',
    itemName: 'pair.js',
    description: 'Not Available.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/LongedAires',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '34',
    itemName: 'pending.js',
    description: 'Manage unapproved threads.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/CrispyStarter',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '35',
    itemName: 'richest.js',
    description: 'Get top 10 user list.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ObtainGiles',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '36',
    itemName: 'leave.js',
    description: 'Command bot to leave Group.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PirateZandt',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '37',
    itemName: 'slot.js',
    description: 'Slot your money.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BudgeKeeps',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '38',
    itemName: 'prefix.js',
    description: 'Not Available.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/LondonCheryl',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '39',
    itemName: 'thread.js',
    description: 'Thread Management.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BreedingJocks',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '40',
    itemName: 'tid.js',
    description: 'Get Thread ID.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/SwingImbecile',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '41',
    itemName: 'uid.js',
    description: 'Get User ID.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/OccupiedBaloney',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '42',
    itemName: 'translate.js',
    description: ' Translate Words.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/GilesRealm',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '43',
    itemName: 'warn.js',
    description: 'Manage users in thread.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/FiletSensor',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '44',
    itemName: 'video.js',
    description: 'Download video from YouTube.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/RecycledSlowly',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '45',
    itemName: 'imgbb.js',
    description: 'Upload your image.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/AntiquesHunted',
    authorName: 'Its Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '46',
    itemName: 'info.js',
    description: 'GoatMart Link.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ShrinkDamon',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '47',
    itemName: 'file.js',
    description: 'Turn on onlyadminbox function..',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/SlidingSplat',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '48',
    itemName: 'pair.js',
    description: 'Not Available.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/LongedAires',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '49',
    itemName: 'edit.js',
    description: 'Edit bot msgs.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/StrainedLuxury',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '50',
    itemName: 'ai.js',
    description: 'GPT-4',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/OwnedMidge',
    authorName: 'Cliff',
    timestamp: new Date().toISOString()
  },
{
    itemID: '51',
    itemName: 'help.js',
    description: 'Not Available.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/WhilstParallel',
    authorName: 'NTKhang | Zedric',
    timestamp: new Date().toISOString()
  },
{
    itemID: '52',
    itemName: 'join.js',
    description: 'Join the group that bot is in.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/InvitesImminent',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '53',
    itemName: 'leaveall.js',
    description: 'Left bot from chats.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ScatterCatalyst',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '54',
    itemName: 'leaveall.js',
    description: 'Leave all groups.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PoisonEnters',
    authorName: 'Cliff',
    timestamp: new Date().toISOString()
  },
{
    itemID: '55',
    itemName: 'npm.js',
    description: 'Get NPM package informations',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/MannedExpired',
    authorName: 'Cliff',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '56',
    itemName: 'notify.js',
    description: 'Send notification to all chatbox.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/CastorWiring',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '57',
    itemName: 'approve.js',
    description: 'Approve group chats.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/HatchingClues',
    authorName: 'Jun',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '58',
    itemName: 'arrest.js',
    description: 'Arrest a rapist.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/IgnitionLivvie',
    authorName: 'Milan',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '59',
    itemName: 'autolink.js',
    description: 'Download video from YouTube, Instagram, Tiktok,.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/NobelDrills',
    authorName: 'Cliff',
    timestamp: new Date().toISOString()
  },
{
    itemID: '60',
    itemName: 'help.js',
    description: 'Get commands list.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/SellinPersist',
    authorName: 'Aesther',
    timestamp: new Date().toISOString()
  },
{
    itemID: '61',
    itemName: 'help.js',
    description: 'Get commands list.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/KillsFades',
    authorName: 'NTKhang | Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '62',
    itemName: 'info.js',
    description: 'Get owner or bot informations.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/WedgedThrows',
    authorName: 'Cliff',
    timestamp: new Date().toISOString()
  },
{
    itemID: '63',
    itemName: 'obfuscate.js',
    description: 'Obfuscate Javascript.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BeddingOttawa',
    authorName: 'Cliff',
    timestamp: new Date().toISOString()
  },
{
    itemID: '64',
    itemName: 'prefix.js',
    description: 'Get bot prefix information.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/AlgeriaBennet',
    authorName: 'Tokodori_Frtiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '65',
    itemName: 'videox.js',
    description: 'Download videos from YouTube.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/StanfordStarts',
    authorName: 'Samir Œ',
    timestamp: new Date().toISOString()
  },
{
    itemID: '66',
    itemName: 'gpt.js',
    description: 'OpenAi.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/MoodsTrolley',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '67',
    itemName: 'owner.js',
    description: 'Get bot owner informations.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/FeebleGlands',
    authorName: 'Tokodori',
    timestamp: new Date().toISOString()
  },
{
    itemID: '68',
    itemName: 'adc.js',
    description: 'Get command pastebin link.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/SpikingDoorbell',
    authorName: 'Loid Butter',
    timestamp: new Date().toISOString()
  },
{
    itemID: '69',
    itemName: 'age.js',
    description: 'Count your age.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ReplayValley',
    authorName: 'Samir Œ',
    timestamp: new Date().toISOString()
  },
{
    itemID: '70',
    itemName: 'all.js',
    description: 'Tag all group members',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/DaylightOctober',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '71',
    itemName: 'antiout.js',
    description: ' Enable / disable antiout.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/HalfwaySymbiote',
    authorName: 'AceGun',
    timestamp: new Date().toISOString()
  },
    {
    itemID: '72',
    itemName: 'bing.js',
    description: 'Generate images from bing.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/SummonRipper',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '73',
    itemName: 'autoseen.js',
    description: 'No Discription Available.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/AdequateShowgirl',
    authorName: 'Jas',
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
