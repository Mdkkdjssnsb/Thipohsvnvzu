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
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/yareOI',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '2',
    itemName: 'prompt.js',
    description: 'Generate Unique Prompts based on Midjourney.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/2iKJRw',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '3',
    itemName: 'promptgen.js',
    description: 'Generate Simple Prompts',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/c6jlZX',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '4',
    itemName: 'movieinfo.js',
    description: 'Generate some movie informations.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/9fdx1T',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '5',
    itemName: 'pinterest.js',
    description: 'Get images from Pinterest.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/yi2O9T',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '6',
    itemName: 'videoinfo.js',
    description: 'view YouTube video informations',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/T3RPqz',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '7',
    itemName: 'lyrics.js',
    description: 'Get song lyrics.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/bPmlYV',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '8',
    itemName: 'sing.js',
    description: 'Download Song From YouTube.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/kgusXw',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '9',
    itemName: 'sdxl.js',
    description: 'Generate image using Sdxl API (13 models)',
    type: 'GoatBot',
    pastebinLink: '',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '10',
    itemName: 'sim.js',
    description: 'Chat with SimiSimi',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/qSCNhO',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '11',
    itemName: 'pexels.js',
    description: 'Search images uaing pexels API',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/9zgsxl',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '12',
    itemName: 'stalk.js',
    description: 'Get facebook users informations.',
    type: 'GoatBot',
    pastebinLink: '',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '13',
    itemName: '4k.js',
    description: ' Upscale your image',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/35oxbG',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '14',
    itemName: 'anigen.js',
    description: 'Generate images based on anime style.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/oERk47',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '15',
    itemName: 'replicate.js',
    description: 'Generate images from Replicate API',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/x6srKT',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '16',
    itemName: 'accept.js',
    description: 'accept users friend request.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/BreT0v',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '17',
    itemName: 'adduser.js',
    description: 'add user in groups via uid or profile link.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/afxbmy',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '18',
    itemName: 'admin.js',
    description: 'admin management.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/R5lxWQ',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '19',
    itemName: 'balance.js',
    description: 'check your balance .',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/D4Zw9J',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '20',
    itemName: 'ban.js',
    description: 'ban users from thread.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/p7ByeA',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '21',
    itemName: 'bank.js',
    description: 'Bank system .',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/CvRf67',
    authorName: 'LiANE | Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '22',
    itemName: 'callad.js',
    description: 'send message to bot admins.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/0ZvosU',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '23',
    itemName: 'count.js',
    description: 'count your messages.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/krE707',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '24',
    itemName: 'daily.js',
    description: 'get daily gifts.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/4B62xn',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '25',
    itemName: 'delete.js',
    description: 'Delete commands models.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/BENpa4',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '26',
    itemName: 'flip.js',
    description: 'Flip your money.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/jfFVSO',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '27',
    itemName: 'kick.js',
    description: 'kick user.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/lqO0xP',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '28',
    itemName: 'notification.js',
    description: 'Send notification to all group chat.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/i4mY5g',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '29',
    itemName: 'uptime.js',
    description: 'check system uptime.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/4Weka6',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '30',
    itemName: 'user.js',
    description: ' user management.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/qFUY1u',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '31',
    itemName: 'goatmart.js',
    description: 'GoatMart Link.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/wi5Bx9',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '32',
    itemName: 'onlyadminbox.js',
    description: 'Turn on onlyadminbox function..',
    type: 'GoatBot',
    pastebinLink: '',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '33',
    itemName: 'pair.js',
    description: 'Not Available.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/9pM57r',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '34',
    itemName: 'pending.js',
    description: 'Manage unapproved threads.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/oXxYL7',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '35',
    itemName: 'richest.js',
    description: 'Get top 10 user list.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/dWDL4F',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '36',
    itemName: 'leave.js',
    description: 'Command bot to leave Group.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/kB4Mqw',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '37',
    itemName: 'slot.js',
    description: 'Slot your money.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/2inG5Y',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '38',
    itemName: 'prefix.js',
    description: 'Not Available.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/65dVbx',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '39',
    itemName: 'thread.js',
    description: 'Thread Management.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/URl7ap',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '40',
    itemName: 'tid.js',
    description: 'Get Thread ID.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/juvxka',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '41',
    itemName: 'uid.js',
    description: 'Get User ID.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/UpVRHk',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '42',
    itemName: 'translate.js',
    description: ' Translate Words.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/lXl3xq',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '43',
    itemName: 'warn.js',
    description: 'Manage users in thread.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/e5ok5O',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '44',
    itemName: 'video.js',
    description: 'Download video from YouTube.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/HbEgfM',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '45',
    itemName: 'imgbb.js',
    description: 'Upload your image.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/3b4Olt',
    authorName: 'Its Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '46',
    itemName: 'info.js',
    description: 'Get bot or owner informations.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/JmwdBb',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '47',
    itemName: 'file.js',
    description: 'Turn on onlyadminbox function..',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/l5xlUW',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '48',
    itemName: 'pair.js',
    description: 'Not Available.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/IUNCDE',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '49',
    itemName: 'edit.js',
    description: 'Edit bot msgs.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/nMfUD6',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '50',
    itemName: 'ai.js',
    description: 'GPT-4',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/XAgvSV',
    authorName: 'Cliff',
    timestamp: new Date().toISOString()
  },
{
    itemID: '51',
    itemName: 'help.js',
    description: 'Not Available.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/xopfFr',
    authorName: 'NTKhang | Zedric',
    timestamp: new Date().toISOString()
  },
{
    itemID: '52',
    itemName: 'join.js',
    description: 'Join the group that bot is in.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/6ovaTq',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '53',
    itemName: 'leaveall.js',
    description: 'Left bot from chats.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/V0j8Iz',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '54',
    itemName: 'leaveall.js',
    description: 'Leave all groups.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/IA8uqD',
    authorName: 'Cliff',
    timestamp: new Date().toISOString()
  },
{
    itemID: '55',
    itemName: 'npm.js',
    description: 'Get NPM package informations',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/H6Un47',
    authorName: 'Cliff',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '56',
    itemName: 'notify.js',
    description: 'Send notification to all chatbox.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/vpdlrw',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '57',
    itemName: 'approve.js',
    description: 'Approve group chats.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/xXQXBl',
    authorName: 'Jun',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '58',
    itemName: 'arrest.js',
    description: 'Arrest a rapist.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/eO1cBb',
    authorName: 'Milan',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '59',
    itemName: 'autolink.js',
    description: 'Download video from YouTube, Instagram, Tiktok,.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/BJtqVz',
    authorName: 'Cliff',
    timestamp: new Date().toISOString()
  },
{
    itemID: '60',
    itemName: 'help.js',
    description: 'Get commands list.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/YT3ik3',
    authorName: 'Aesther',
    timestamp: new Date().toISOString()
  },
{
    itemID: '61',
    itemName: 'help.js',
    description: 'Get commands list.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/mhCdku',
    authorName: 'NTKhang | Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '62',
    itemName: 'info.js',
    description: 'Get owner or bot informations.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/oStMmf',
    authorName: 'Cliff',
    timestamp: new Date().toISOString()
  },
{
    itemID: '63',
    itemName: 'obfuscate.js',
    description: 'Obfuscate Javascript.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/NcgAEl',
    authorName: 'Cliff',
    timestamp: new Date().toISOString()
  },
{
    itemID: '64',
    itemName: 'prefix.js',
    description: 'Get bot prefix information.',
    type: 'GoatBot',
    pastebinLink: ',
    authorName: 'Tokodori_Frtiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '65',
    itemName: 'videox.js',
    description: 'Download videos from YouTube.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/fzI2Yn',
    authorName: 'Samir Œ',
    timestamp: new Date().toISOString()
  },
{
    itemID: '66',
    itemName: 'gpt.js',
    description: 'OpenAi.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/q5jamb',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },
{
    itemID: '67',
    itemName: 'owner.js',
    description: 'Get bot owner informations.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/dkokxI',
    authorName: 'Tokodori',
    timestamp: new Date().toISOString()
  },
{
    itemID: '68',
    itemName: 'adc.js',
    description: 'Get command pastebin link.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/W312p2',
    authorName: 'Loid Butter',
    timestamp: new Date().toISOString()
  },
{
    itemID: '69',
    itemName: 'age.js',
    description: 'Count your age.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/8UzUTU',
    authorName: 'Samir Œ',
    timestamp: new Date().toISOString()
  },
{
    itemID: '70',
    itemName: 'all.js',
    description: 'Tag all group members',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/bfNWVi',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  }, 
{
    itemID: '71',
    itemName: 'antiout.js',
    description: ' Enable / disable antiout.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/QJ0l2o',
    authorName: 'AceGun',
    timestamp: new Date().toISOString()
  },
    {
    itemID: '72',
    itemName: 'bing.js',
    description: 'Generate images from bing.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/Btn0sK',
    authorName: 'Itz Aryan',
    timestamp: new Date().toISOString()
  },
{
    itemID: '73',
    itemName: 'autoseen.js',
    description: 'No Discription Available.',
    type: 'GoatBot',
    pastebinLink: 'http://goatmart-bin.onrender.com/raw/YCppPv',
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
