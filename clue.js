var suspects = [
  {firstName: 'Jacob',
  lastName: 'Green',
  color: 'Green',
  descriptions: 'He has a lot of connections and is always willing to help people out -- for a price.'
  },

  {firstName: 'Doctor',
  lastName: 'Orchid',
  color: 'White',
  description: 'She is the adopted daugther of Mr. Boddy She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning',
  occupation: 'Biologist with a PhD in plant toxicology'
  },

  {firstName: 'Victor',
  lastName: 'Plum',
  color: 'Purple',
  description: 'A Billionaire who is embracing his new popularity.',
  occupation: 'Video Game Designer' },

  {firstName: 'Kassandra',
  lastName: 'Scarlet',
  color: 'Red',
  description: 'Her past haunts her.',
  occupation: 'A list Movie Start' },

   {firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'Blue',
  description: 'From a wealthy family and uses her status and money to win popularity',
  occupation: 'Lazy' },

  {firstName: 'Jack',
  lastName: 'Mustard',
  color: 'Yellow',
  description: 'Tries to get by on his former glory.',
  occupation: 'Former Football Player' },
]

var rooms = [ 'Dining room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard room', 'Lounge', 'Ballroom', 'Hall', 'A spa', 'Living room', 'Observatory', 'Theater', 'Guest house', 'patio' ];

var weapons = [
  { name: 'Rope', weight: '2 lbs.', color: 'brown', painLevel: 'Ouch'},
  { name: 'Knife', weight: '1 lbs.', color: 'silver', painLevel: 'Really ouch'},
  { name: 'Candlestick', weight: '0.5 lbs.', color: 'white', painLevel: 'Not really ouch'},
  { name: 'Dumbbell', weight: '10 lbs.', color: 'silver', painLevel: 'You\'re Dead.'},
  { name: 'Poison', weight: '3 lbs.', color: 'green', painLevel: 'You\'re also dead.'},
  { name: 'Axe', weight: '0.8 lbs.', color: 'wood', painLevel: 'You lost an arm.'},
  { name: 'Bat', weight: '1.2 lbs.', color: 'Light brown', painLevel: 'Very ouch'},
  { name: 'Trophy', weight: '5 lbs.', color: 'Gold', painLevel: 'Kinda Ouch'},
  { name: 'Pistol', weight: '1.3 lbs.', color: 'Black', painLevel: 'You\'re bleeding to death.'}
]


var cardStack = [suspects, rooms, weapons];
var selectedElements = [];
var dead = [];

//Select element from card stack
function pickElements() {
  for(i = 0; i < cardStack.length; i++) {
    var element = Math.floor(Math.random() * cardStack[i].length);
    selectedElements.push(cardStack[i][element]);
  }
}

pickElements();

function reveal() {
var ask = prompt('Would you like to reveal the killer? Yes or no?');
  //Selecting a victim and making sure victim and killer are not the same.
  var victim = Math.floor(Math.random() * suspects.length);
  if (suspects[victim] === selectedElements[0] )  {
    console.log('There was a suicide. ' + suspects[victim].firstName + ' ' + suspects[victim].lastName + ' killed theirself. Please reinvestigate case.');
  } else {
    dead.push(suspects[victim].firstName, suspects[victim].lastName);
  }
  //Making sure user wants to reveal killer and will only display if killer & victim are not the same.
  if (ask.toLowerCase() === 'yes' && suspects[victim] != selectedElements[0] ) {
  console.log('OH NO! ' + selectedElements[0].firstName + ' ' + selectedElements[0].lastName + ' killed ' + dead[0] + ' ' + dead[1] + ' in the ' + selectedElements[1] + ' with a ' + selectedElements[2].name + '!');
  } else {
    console.log('Hmmmm....maybe you\'re the killer!');
  }
}
reveal();
