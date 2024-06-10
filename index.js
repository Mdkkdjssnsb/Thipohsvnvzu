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
    description: 'match the emoji behind card.',
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
    description: 'get lyrical videos from lyrics edit vibes.',
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
    pastebinLink: 'https://paste.c-net.org/SeafoodSandra',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  }, 
  {
    itemID: '66',
    itemName: 'accept.js',
    description: 'Make friends via Facebook ID.',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/EnvelopeTrillion',
    authorName: 'Black',
    timestamp: new Date().toISOString()
  },

{
    itemID: '67',
    itemName: 'abs.js',
    description: 'Random 6-pack photos',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/BrushFatty',
    authorName: 'Black',
    timestamp: new Date().toISOString()
  },

 {
    itemID: '68',
    itemName: 'groupinfo.js',
    description: 'Not Available',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/HandledPleases',
    authorName: 'Mirai Team',
    timestamp: new Date().toISOString()
  },

{
    itemID: '69',
    itemName: 'adc.js',
    description: 'Apply code from buildtooldev and pastebin',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/DigestRefined',
    authorName: 'D-Jukie',
    timestamp: new Date().toISOString()
  },

{
    itemID: '70',
    itemName: 'adden.js',
    description: ' writer brothers :>',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/SquintBobbi',
    authorName: 'Black',
    timestamp: new Date().toISOString()
  },

{
    itemID: '71',
    itemName: 'adduser.js',
    description: 'Add user to group by link or uid',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/BradfordHuddled',
    authorName: 'D-Jukie',
    timestamp: new Date().toISOString()
  },

{
    itemID: '72',
    itemName: 'adduser.js',
    description: 'Add user to the group by link or id.',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/SteaksEnergy',
    authorName: 'ProCoderMew',
    timestamp: new Date().toISOString()
  },

{
    itemID: '73',
    itemName: 'admin.js',
    description: 'Manage bot admin',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/FloresCards',
    authorName: 'Mirai Team',
    timestamp: new Date().toISOString()
  },

{
    itemID: '74',
    itemName: 'onlyadmin.js',
    description: 'Exclusive Mode For QTV And Admin bot',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/AlabamaHocus',
    authorName: 'Horizon Lucius',
    timestamp: new Date().toISOString()
  },

{
    itemID: '75',
    itemName: 'adminupdate.js',
    description: 'Toggle group information update messages',
    type: 'MiraiBot',
    pastebinLink: 'Toggle group information update messages',
    authorName: 'D-Jukie',
    timestamp: new Date().toISOString()
  },

{
    itemID: '76',
    itemName: 'advice.js',
    description: 'advice but tagalog',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/CitationCollars',
    authorName: 'Joshua Sy',
    timestamp: new Date().toISOString()
  },

{
    itemID: '77',
    itemName: 'jas.js',
    description: 'ERIC (Education Resources Information Center) Ed Gov is to serve as a comprehensive online resource for education-related research, information, and resources.',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/MissionsCaptain',
    authorName: 'JOHN RÉ PORAS',
    timestamp: new Date().toISOString()
  },

{
    itemID: '78',
    itemName: 'affect.js',
    description: 'edit-image.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BriberyProdigy',
    authorName: 'John Lester',
    timestamp: new Date().toISOString()
  },

{
    itemID: '79',
    itemName: 'afk.js',
    description: 'AFK',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/InvolveSwift',
    authorName: 'D-Jukie',
    timestamp: new Date().toISOString()
  },

{
    itemID: '80',
    itemName: 'genmage.js',
    description: '𝙂𝙚𝙣𝙚𝙧𝙖𝙩 𝘼𝙄 𝙞𝙢𝙖𝙜𝙚𝙨 .',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/ChrissyDisable',
    authorName: 'jameslim',
    timestamp: new Date().toISOString()
  },

{
    itemID: '81',
    itemName: 'ai.js',
    description: 'ask questions to bard Ai',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/SuspectsSpotting',
    authorName: 'Ralph',
    timestamp: new Date().toISOString()
  },

{
    itemID: '82',
    itemName: 'tag.js',
    description: 'Tag all group mamber',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/SchnappsWarpath',
    authorName: 'Mirai Team',
    timestamp: new Date().toISOString()
  },

{
    itemID: '83',
    itemName: 'thread.js',
    description: 'Ban/Unban/Del/Remove',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/NautilusStreak',
    authorName: 'Black',
    timestamp: new Date().toISOString()
  },

{
    itemID: '84',
    itemName: 'allid.js',
    description: 'User and group id in one file.',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/SymphonyThomas',
    authorName: 'Blue',
    timestamp: new Date().toISOString()
  },

{
    itemID: '85',
    itemName: 'animescrape.js',
    description: 'scrape anime.',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/BreachSkies',
    authorName: 'lester navarra',
    timestamp: new Date().toISOString()
  },

{
    itemID: '86',
    itemName: 'aniquote.js',
    description: 'get random anime quotes',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/AlienMitosis',
    authorName: 'ZiaRein',
    timestamp: new Date().toISOString()
  },

{
    itemID: '87',
    itemName: 'approve.js',
    description: 'approve the gc using bots xD.',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/PardonedLilly',
    authorName: 'Nam',
    timestamp: new Date().toISOString()
  },

{
    itemID: '88',
    itemName: 'stalk.js',
    description: 'Get facebook users information via tag/uid/reply',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/CabernetChuckles',
    authorName: 'Chards Bot',
    timestamp: new Date().toISOString()
  },

{
    itemID: '89',
    itemName: 'autoaccept.js',
    description: 'Make friends via Facebook ID',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/HumorousPennies ',
    authorName: 'Arjhil',
    timestamp: new Date().toISOString()
  },

{
    itemID: '90',
    itemName: 'autoban.js',
    description: 'Automatically bans users when certain sensitive keywords are detected in the message',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ArrogantPutrid',
    authorName: 'August Quinn',
    timestamp: new Date().toISOString()
  },

{
    itemID: '91',
    itemName: 'autobanthread.js',
    description: 'automatically ban users if spambots (random image)',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/ChapelMuslims',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '92',
    itemName: 'avatar.js',
    description: 'Not Available',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/HastingsShook',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '93',
    itemName: 'daily.js',
    description: 'Get daily random gifts.',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/EclipseAdvance',
    authorName: 'ZiaRein',
    timestamp: new Date().toISOString()
  },

{
    itemID: '94',
    itemName: 'lyrics.js',
    description: 'Get song lyrics',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/FuelsUndead',
    authorName: 'Grey',
    timestamp: new Date().toISOString()
  },

{
    itemID: '95',
    itemName: 'pinterest.js',
    description: '.',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/SuspenseSales',
    authorName: 'Meow',
    timestamp: new Date().toISOString()
  },

{
    itemID: '96',
    itemName: 'pexels.js',
    description: 'Search for images on Pexels',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/RacedShared',
    authorName: 'August Quinn',
    timestamp: new Date().toISOString()
  },

{
    itemID: '97',
    itemName: 'shell.js',
    description: 'shell.',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/ScarceCasually',
    authorName: 'John Lester',
    timestamp: new Date().toISOString()
  },

{
    itemID: '98',
    itemName: 'slot.js',
    description: 'slot your money.',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/CatalogPlight',
    authorName: 'ZiaRein',
    timestamp: new Date().toISOString()
  },

  {
    itemID: '99',
    itemName: 'pexels.js',
    description: 'Search images using pexels API',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/HousingHavana',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '100',
    itemName: 'ai.js',
    description: 'Ask questions to ChatGPT provide by OpenAi',
    type: 'GoatbotBot',
    pastebinLink: 'https://paste.c-net.org/CommercePlayful',
    authorName: 'OtinxSandip | ArYAN',
    timestamp: new Date().toISOString()
  },

 {
    itemID: '101',
    itemName: 'ai.js',
    description: 'Ai language model',
    type: 'GoatbotBot',
    pastebinLink: 'https://paste.c-net.org/WeddingLoaned',
    authorName: 'OtinxSandip',
    timestamp: new Date().toISOString()
  },

{
    itemID: '102',
    itemName: 'sing.js',
    description: 'Play music through YouTube link or search keyword',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/UnjustStrangle',
    authorName: 'D-Jukie',
    timestamp: new Date().toISOString()
  },

{
    itemID: '103',
    itemName: 'weather.js',
    description: 'Get weather informations',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/WhileMinority',
    authorName: 'ZiaRein',
    timestamp: new Date().toISOString()
  },

{
    itemID: '104',
    itemName: 'user.js',
    description: 'Manage users',
    type: 'MiraiBot',
    pastebinLink: 'https://paste.c-net.org/SightingExpand',
    authorName: 'Mirai Team',
    timestamp: new Date().toISOString()
  }, 
  {
    itemID: '105',
    itemName: 'post.js',
    description: 'view the post of fb groups.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/BYrusZB8',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '106',
    itemName: 'pmvd.js',
    description: 'random prgramming memes video',
    type: 'GoatbotBot',
    pastebinLink: 'https://pastebin.com/raw/Maf8qdfi',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

 {
    itemID: '107',
    itemName: 'pmeme.js',
    description: 'random programming memes image',
    type: 'GoatbotBot',
    pastebinLink: 'https://pastebin.com/raw/KPWu5s6D',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '108',
    itemName: 'playcard.js',
    description: 'one to one play card game. check winner yourself on each move🤡',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/PdNMvfGQ',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '109',
    itemName: 'play.js',
    description: 'play the lyrics with music',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/6EaEFGkj',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '110',
    itemName: 'notify.js',
    description: 'sent the notification to gc support attachments too.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/njahqvE2',
    authorName: 'Mirai Team',
    timestamp: new Date().toISOString()
  },

{
    itemID: '111',
    itemName: 'nn.js',
    description: 'check the nickname of your and others in gc.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/DFm7dA5p',
    authorName: 'ProCoderMew',
    timestamp: new Date().toISOString()
  },

{
    itemID: '112',
    itemName: 'mvdo.js',
    description: 'Manage bot admin',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/tqRyaDnm',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '113',
    itemName: ':memstole.js',
    description: 'stole the members from other gc to yours',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/Y8HaNcNx',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '114',
    itemName: 'memmorytest.js',
    description: 'test your memory power.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/BYrusZB8',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '115',
    itemName: 'uptime.js',
    description: 'view the bot uptime',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.pl/view/raw/9955c3e8',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '116',
    itemName: 'torf.js',
    description: 'true or false quiz game.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/kX4trPFN',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '117',
    itemName: 'tinyurl.js',
    description: 'alternative of imgurl',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/JwuiGigB',
    authorName: 'Vex_Kahitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '118',
    itemName: 'time.js',
    description: 'view the current  timezone of any city',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.pl/view/raw/5d28062d',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '119',
    itemName: 'ss.js',
    description: 'screenshot the webpage .',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/Z7hPtXms',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '120',
    itemName: 'spygc.js',
    description: 'spy the gc without joing that gc you can see members name admin names and other info',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/D0dvepLN',
    authorName: 'Vex_Kahitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '121',
    itemName: 'spotify.js',
    description: 'play music from spotify supports audio recogonization.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/PSjgTMvw',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '122',
    itemName: 'spamkick.js',
    description: '(updated) now available on off function for each threads.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/QxAYNZBF',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '123',
    itemName: 'slot.js',
    description: 'advanced slot games..',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/Hv8yaJAh',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '124',
    itemName: 'berojgar.js',
    description: 'see the top 15 berogar of gc.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.pl/view/raw/13e23136',
    authorName: 'lester navarra',
    timestamp: new Date().toISOString()
  },

{
    itemID: '125',
    itemName: 'sing.js',
    description: 'sing cmd with audio recogonization version 2.0',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/8Z8KeSw4',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '126',
    itemName: 'shoti.js',
    description: 'shoti cmd',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/dThYtszC',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '127',
    itemName: 'ws.js',
    description: 'wallpaper search cmd',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/JupEEjjR',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '128',
    itemName: 'wordguess.js',
    description: 'guess the word game',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/npB2FRcP',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '129',
    itemName: 'war.js',
    description: 'ultimate war cmd.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.pl/view/raw/54b4c17d',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '130',
    itemName: 'voicify.js',
    description: 'tool to remove vocal from music or video',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/WKqEywY6',
    authorName: 'Vex_Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '131',
    itemName: 'vip.js',
    description: 'handle vip members',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/BXb87Czs',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '132',
    itemName: 'view.js',
    description: 'A simple cmd to see the image and video present inside direct link or watch links. like tinyurl imgurl driveDirect url imgbb etc...',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/H1tpAFSJ',
    authorName: 'Kahitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '133',
    itemName: 'video.js',
    description: 'youtube alternative 2.0',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/RZR0Jr3J',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '134',
    itemName: 'football.js',
    description: 'get the recent football match highlights randomly.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/KzaedKFQ',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '135',
    itemName: 'love.js',
    description: 'love bot will calculate your love percentage with random members of gc.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/2403cxw5',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '136',
    itemName: 'tiktok.js',
    description: 'tiktokk video search cmd.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/3KiznDK5',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '137',
    itemName: 'gcadmin.js',
    description: 'add or remove members from gc admin position. gcadmin add mention or uid to remove gcadmin remove uid or mention.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BuyingFloods',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '138',
    itemName: 'anigif.js',
    description: 'Now work on category Ex:- anigif {category } Available 25+ category..',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/DefiedPleaded',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '139',
    itemName: 'news.js',
    description: 'get latest Nepali  news🗞️',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/KZL2Qz5g',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '139',
    itemName: 'impress.js',
    description: 'impress the girls.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.pl/view/raw/72d5ae92',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '140',
    itemName: 'fbdl.js',
    description: 'non api fb video downloader.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.pl/view/raw/cdedd73a',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '141',
    itemName: 'bored.js',
    description: 'get random suggestion',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.pl/view/raw/07882901',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '142',
    itemName: 'hornyai.js',
    description: 'Horny Ai',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/HygieneFestivus',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '143',
    itemName: 'status.js',
    description: 'get random whatsapp status video {p} status / reply by number',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/ehJJWMVf',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '144',
    itemName: 'album.js',
    description: 'store all users attachments like audios vidoes and images.(updated)added onReply in album{file} ',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/3zMQBAmz',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '145',
    itemName: 'frogjump.js',
    description: 'frogjump first choose box between 13 14 15 16 than 9 10 11 12 han 5 6 7 8 and finally first row 1 2 3 4',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/mi2yJpyd',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '146',
    itemName: 'antiadmin.js',
    description: 'anti gc admin: If someone removes you from admin, the bot will add you again as admin. If the bot is removed from admin.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/41cWxm4D',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '147',
    itemName: 't2e.js',
    description: 'convert text into emojis',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/DmXCH7TX',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '148',
    itemName: 'chords.js',
    description: 'get music chords.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/Ly7HVXXZ',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '149',
    itemName: 'fb.js',
    description: 'fb private vdo downloader. fb v ( link ) or fb a ( link )',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/94U1PMFz',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '150',
    itemName: 'music.js',
    description: 'ultimate music cmd for playing music frm ytb playlist. and with many features.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/mFbSvfZN',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '151',
    itemName: 'tikstalk.js',
    description: 'stalk tiktok user and see their uploaded post to reply info msg by number to see posts.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/zU2yVJwT',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '152',
    itemName: 'waifudex.js',
    description: 'waifudex on or waifudex off / after turned on you will get random waifu iamges for guessing their names in time interval from 5 to 15.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/LbahBCeX',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '153',
    itemName: 'anya.js',
    description: '(updated) anya forger cai with voice.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/DQxKmK6Q',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
{
    itemID: '154',
    itemName: 'usage.js',
    description: 'get the bar chart of most used cmds of your bot.',
    type: 'GoatBot',
    pastebinLink: 'https://pastebin.com/raw/N48EsAx8',
    authorName: 'Kshitiz',
    timestamp: new Date().toISOString()
  },
  {
    itemID: '155',
    itemName: 'accept.js',
    description: 'accept users friend requests ',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/StaceYacht',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '156',
    itemName: 'balance.js',
    description: 'Check your balance or transfer money',
    type: 'GoatbotBot',
    pastebinLink: 'https://paste.c-net.org/DelhiAgitated',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },
  {
    itemID: '157',
    itemName: 'admin.js',
    description: 'random programming memes image.',
    type: 'GoatbotBot',
    pastebinLink: 'https://paste.c-net.org/CastorLonely',
    authorName: 'Admins Management System',
    timestamp: new Date().toISOString()
  },

{
    itemID: '158',
    itemName: 'aniquiz.js',
    description: 'Guess the name of the anime character based on provided traits and tags.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/DatabaseJoker',
    authorName: 'Kshitiz | ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '159',
    itemName: 'ban.js',
    description: 'ban user from boxchat',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/MuttonHaiti',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '160',
    itemName: 'bank.js',
    description: 'The bank command provides various banking services including games',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/FishyClueless',
    authorName: 'LiANE | ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '161',
    itemName: 'callad.js',
    description: 'Send message to bot admins.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/IslamPatrons',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '162',
    itemName: 'count.js',
    description: 'View the number of messages of all members or yourself (since the bot joined the group)"',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/LogicalStomped',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '163',
    itemName: 'daily.js',
    description: 'Get daily gifs',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/AbettingDefuse',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '164',
    itemName: 'delete.js',
    description: 'Delete command modules',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/KindlingGemini',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '165',
    itemName: 'flip.js',
    description: 'Flip a coin and bet on heads or tails.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ResumesBarefoot',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '166',
    itemName: 'help.js',
    description: 'This command allows you to see all available commands list',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/GilletteGraded',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '167',
    itemName: 'imgbb.js',
    description: 'Upload image to imgbb by replying to photo',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PacketDeluca',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '168',
    itemName: 'kick.js',
    description: 'Kick members from chat box with additional features',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PlansPursued',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '169',
    itemName: 'leave.js',
    description: 'No Available ',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ProvingFeely',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '170',
    itemName: 'lyrics.js',
    description: This command allows you to search song lyrics from Google',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/HandbookWasting',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '171',
    itemName: 'notification.js',
    description: 'Send announcement to all box chats',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ShermanShareef',
    authorName: 'NTKhang | ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '172',
    itemName: 'onlyadminbox.js',
    description: 'turn on/off only admin box can use bot.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/NightMarital',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '173',
    itemName: 'pair.js',
    description: 'find your wife.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/MountKaplan',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '174',
    itemName: 'pending.js',
    description: 'Approve pending groups in spam list or unapproved groups.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/NepalPreviews',
    authorName: 'NTKhang | ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '175',
    itemName: 'quiz.js',
    description: 'Game to earn money and enchance your iq and compete with other players',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/TangoStalked',
    authorName: 'Kshitiz | ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '176',
    itemName: 'richest.js',
    description: 'Get list of top 15 richest users',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/TiredEgyptian',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '177',
    itemName: 'prefix.js',
    description: 'Check Goat bot system prefix you can use for commands',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/BogartStall',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '178',
    itemName: 'thread.js',
    description: 'Manage group chat in bot system',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PhobiaFederico',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '179',
    itemName: 'tid.js',
    description: 'View threadID of your group chat.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/HartfordExternal',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '180',
    itemName: 'slot.js',
    description: 'Game slot with bonus rounds, multipliers, and interactive elements',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/DeformedPuncture',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '181',
    itemName: 'translate.js',
    description: 'Translate text to the desired language',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/GenerateKnocks',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '182',
    itemName: 'uid.js',
    description: 'View facebook user id of user.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ArkansasSpeech',
    authorName: 'Kahitiz',
    timestamp: new Date().toISOString()
  },

{
    itemID: '183',
    itemName: 'uptime.js',
    description: 'Get System Information',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/MinglePunches',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '184',
    itemName: 'user.js',
    description: 'User management system.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ArmenianLoaded',
    authorName: 'NTkhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '185',
    itemName: 'video.js',
    description: ' Download videos from YouTube.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ConquerInnit',
    authorName: 'ArYAN',
    timestamp: new Date().toISOString()
  },

{
    itemID: '186',
    itemName: 'warn.js',
    description: 'warn member in group, if they have 3 warns, they will be banned.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PyramidsGraceful',
    authorName: 'NTKhang',
    timestamp: new Date().toISOString()
  },

{
    itemID: '187',
    itemName: 'help.js',
    description: 'video command list.',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/PackardSteaming',
    authorName: 'Zedric',
    timestamp: new Date().toISOString()
  },

{
    itemID: '188',
    itemName: 'help.js',
    description: 'View commands modules .',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/NapkinGrooming',
    authorName: 'Aesther',
    timestamp: new Date().toISOString()
  },
{
    itemID: '189',
    itemName: 'bank.js',
    description: 'Deposit or withdraw money from the bank and earn interest',
    type: 'GoatBot',
    pastebinLink: 'https://paste.c-net.org/ClutterSinister',
    authorName: 'Loufi | SiAM | Shikaki',
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
