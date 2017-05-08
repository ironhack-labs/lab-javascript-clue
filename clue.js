var characters = [
  {
    firstName:'Jacob',
    lastName:'Green',
    occupation:'Hitman',
    age:'43',
    description:'Shifty, likes to party'
  },
  {
    firstName:'Doctor',
    lastName:'Orchid',
    occupation:'Poison Ivy Expert',
    age:'37',
    description:'Aloof, found in gardens'
  },
  {
    firstName:'Victor',
    lastName:'Plum',
    occupation:'Video Game Designer',
    age:'33',
    description:'Playboy, loves a good roll of the dice'
  },
  {
    firstName:'Kasandra',
    lastName:'Scarlet',
    occupation:'A-list Movie Star',
    age:'31',
    description:'Loves a photoshoot'
  },
  {
    firstName:'Eleanor',
    lastName:'Peacock',
    occupation:'Serial Board of Director',
    age:'53',
    description:''
  },
  {
    firstName:'Jack',
    lastName:'Mustard',
    occupation:'TV Personality',
    age:'38',
    description:'Talks a lot. A lot'
  }
]

var weapons = [
  {
    type:'Rope',
    burns: 'A lot',
    effectiveness: 'Done this before'
  },
  {
    type:'Knife',
    sharpness: 'Pointy',
    brutality: 'Violent'
  },
  {
    type:'Candlestick',
    weight: 'Heavy',
    stealth: 'Not very'
  },
  {
    type:'Dumbbell',
    weight: 'Very Heavy',
    effectiveness: 'Takes a while'
  },
  {
    type:'Poison',
    stealth: 'Stealthy',
    effectiveness: 'Done this before'
  },
  {
    type:'Axe',
    brutality: 'Ultra',
    sharpness: 'Razor'
  },
  {
    type:'Bat',
    brutality: 'Unusual',
    style: 'Creepy'
  },
  {
    type:'Trophy',
    stealth: 'Showing off',
    effectiveness: 'Takes a while'
  },
  {
    type:'Pistol',
    effectiveness: 'Pro',
    style: 'Killer'
  },
];

var rooms =['Dining Room','Conservatory','Kitchen','Study','Library','Billiard Room','Lounge','Ballroom','Hall','A spa','Living Room',
'Observatory','Theatre','Guest House','A patio'];

function randomCard(array){
  return array[Math.floor(Math.random() * array.length)];
}

function giveOutCards(stacks) {
  var virtualEnvelope = [];
  for (j=0; j < stacks.length; j++){
    virtualEnvelope.push(randomCard(stacks[j]));
  }
  return virtualEnvelope[0]["firstName"] + " " + virtualEnvelope[0]["lastName"] + " did it with the " + virtualEnvelope[1]["type"] + " in the " + virtualEnvelope[2];
}

var stacks=[characters,weapons,rooms];

alert(giveOutCards(stacks));
