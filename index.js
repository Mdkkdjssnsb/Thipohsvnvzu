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

  {
    itemID: '27',
    itemName: 'emi.js',
    description: 'Generate image based on EMI style.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/kjbAr9y0',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '28',
    itemName: 'anya.js',
    description: 'Anya forger text to speech english to japnese conversion.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/kjbAr9y0',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

 {
    itemID: '29',
    itemName: 'aniwatch.js',
    description: 'get anime episode download link and watch online link.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/2fC2a2ja',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '30',
    itemName: 'giphy.js',
    description: 'search the gifs',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/5hcpbY53',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '31',
    itemName: 'fun.js',
    description: 'get entertainment videos.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/gqWbME48',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '32',
    itemName: 'fakechat.js',
    description: 'messenger fake chat marker',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/VsAabkP9',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '33',
    itemName: 'fbstalk.js',
    description: 'put your own token in code.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/YAZFQ684',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '34',
    itemName: 'fun2.js',
    description: 'get random video for entertainment',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/5yQXX5tL',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '35',
    itemName: 'draw.js',
    description: 'image to image generation',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/5yQXX5tL',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '36',
    itemName: 'dicedash.js',
    description: 'snake ladder game alternative',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/z2LA9p8R',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '37',
    itemName: 'define.js',
    description: 'find the meaning of word.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/fuigv7Zx',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '38',
    itemName: 'corn.js',
    description: 'get corn videos 18+.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/42XHzs7y',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '39',
    itemName: 'connectgc.js',
    description: 'Well this is just a idea to connect group chat into ones.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/5fkk08Cs',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '40',
    itemName: 'kanda2.js',
    description: '18+ corn videos',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/RFzpbULS',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '41',
    itemName: 'join.js',
    description: 'join the gc that bot is in.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/ewz2Yw40',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '42',
    itemName: 'insta.js',
    description: '{p}insta stalk {username} or {p}insta post {userID}',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/bwsuQvJn',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '43',
    itemName: 'animagine.js',
    description: 'anime style image generation',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/8Cx94Xqb',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '44',
    itemName: 'history.js',
    description: 'search historical events.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/enbzJHCy',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '45',
    itemName: 'guessmusic.js',
    description: 'guess the music game.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/V5xDD0Na',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '46',
    itemName: 'guessactor.js',
    description: 'guess the actor based on picture.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/bKS11z84',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '47',
    itemName: 'group.js',
    description: 'get random videos from fb groups',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/GJ5m4qXZ',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '48',
    itemName: 'gpt.js',
    description: 'ultimate gpt cmd with many features not only chat.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/XHSSA37W',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '49',
    itemName: 'gpa.js',
    description: 'claclulate gpa ex: gpa 3.8 it is based on Np education system.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/GAvZqzj8',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '50',
    itemName: 'memorygame.js',
    description: 'match the emoji behind card.
     ',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/BMdv9fLd ',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '51',
    itemName: 'memevoice.js',
    description: 'get random meme (cringe voices)',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/9vgrLMNH',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '52',
    itemName: 'membercount.js',
    description: 'count the member of gc',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/s9wjdW9N',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '53',
    itemName: 'media.js',
    description: 'video & youtube cmd alternative',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/2RkDHC2L',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '54',
    itemName: 'mangadex.js',
    description: 'read manga from mangadex',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/a2hbuZs3',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '55',
    itemName: 'lev ( lv ).js',
    description: 'get lyrical videos from lyrics edit vibes.
     ',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/mJvfGNPK',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '56',
    itemName: '.js',
    description: '.',
    type: 'GoatBot',
    pastebinLink: '',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '57',
    itemName: 'lofianime.js',
    description: 'get aesthetic anime videos',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/f7CJG5XM',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '58',
    itemName: 'listbox.js',
    description: ':see the list of gc that bot is in.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/HAAJhEuZ',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '59',
    itemName: 'leave.js',
    description: 'with (onReply )make the bot leave the gc. from one gc you can make bot leave other gc',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/pGtBwRqT',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '60',
    itemName: 'kda3 (kanda3).js',
    description: '18+ corn videos with on off function.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/jQPexnLd',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '61',
    itemName: 'meta.js',
    description: '👑 𝗕𝗶𝗻𝗴 𝗔𝗶 is a large language model trained by OpenAi. It is designed to assist with a wide range of tasks.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ProudStudied',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '62',
    itemName: 'bard.js',
    description: '👑 𝗕𝗮𝗿𝗱 is a large language model trained by 𝗚𝗼𝗼𝗴𝗹𝗲. It is designed to assist with a wide range of tasks.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/HikingMathesar',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '63',
    itemName: 'goatmart.js',
    description: 'View items available in the goatmart',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/FreudChowder',
    authorName: 'LiANE | ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '64',
    itemName: 'file.js',
    description: 'Get commands file',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/TrumpedAdvance',
    authorName: 'OtinxSandip | ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '65',
    itemName: 'niji.js',
    description: 'Generate images based in niji style.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/TrumpedAdvance',
    authorName: 'ArYAN',
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
