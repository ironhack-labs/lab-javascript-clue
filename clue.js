var rooms = [
'Dining room','Conservatory','Kitchen','Study','Library','Billiard room','Lounge','Ballroom','Hall',
'A spa','Living room','Observatory','Theater','Guest house','A patio']

var weapons = [
  Rope = { weight: '2 lbs.', color: 'brown', painLevel: 'Ouch'},
  Knife = { weight: '1 lbs.', color: 'silver', painLevel: 'Really ouch'},
  Candlestick = { weight: '0.5 lbs.', color: 'white', painLevel: 'Not really ouch'},
  Dumbbell = { weight: '10 lbs.', color: 'silver', painLevel: 'You\'re Dead.'},
  Poison = { weight: '3 lbs.', color: 'green', painLevel: 'You\'re also dead.'},
  Axe = { weight: '0.8 lbs.', color: 'wood', painLevel: 'You lost an arm.'},
  Bat = { weight: '1.2 lbs.', color: 'Light brown', painLevel: 'Very ouch'},
  Trophy = { weight: '5 lbs.', color: 'Gold', painLevel: 'Kinda Ouch'},
  Pistol = { weight: '1.3 lbs.', color: 'Black', painLevel: 'You\'re bleeding to death.'}
]

var suspects = [
  green = {firstName: 'Jacob',
  lastName: 'Green',
  color: 'Green',
  descriptions: 'He has a lot of connections and is always willing to help people out -- for a price.'
  },

  orchid =  {firstName: 'Doctor',
  lastName: 'Orchid',
  color: 'White',
  description: 'She is the adopted daugther of Mr. Boddy She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning',
  occupation: 'Biologist with a PhD in plant toxicology'
  },

  plum = {firstName: 'Victor',
  lastName: 'Plum',
  color: 'Purple',
  description: 'A Billionaire who is embracing his new popularity.',
  occupation: 'Video Game Designer' },

  scarlet = {firstName: 'Kassandra',
  lastName: 'Scarlet',
  color: 'Red',
  description: 'Her past haunts her.',
  occupation: 'A list Movie Start' },

  peacock = {firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'Blue',
  description: 'From a wealthy family and uses her status and money to win popularity',
  occupation: 'Lazy' },

  mustard = {firstName: 'Jack',
  lastName: 'Mustard',
  color: 'Yellow',
  description: 'Tries to get by on his former glory.',
  occupation: 'Former Football Player' },
]


//var randomSuspect = Math.floor(Math.random() * suspects.length);
//var randomRoom = Math.floor(Math.random() * rooms.length);
//var randomWeapons = Math.floor(Math.random() * weapons.length);

//function pickfromcards() {
  //console.log(suspects[randomSuspect]);
  //console.log(rooms[randomRoom]);
  //console.log(weapons[randomWeapons]);}

//pickfromcards();
