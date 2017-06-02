var gameCharacters = [
{
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  occupation: 'Carpenter',
  age: '45',
  description: 'He has a lot of connections and is always willing to help people out -- for a price.'
},
{
  firstName: 'Olivia',
  lastName: 'Orchid',
  color: 'white',
  occupation: 'Doctor',
  age: '40',
  description:'She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning (Wonder what happened with Mrs. White?).'
},
{
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  occupation: 'Video game designer',
  age: '30',
  description: 'He is a billionaire video game designer who is embracing his new popularity.'
},
{
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  color: 'red',
  occupation: 'movie star',
  age: '21',
  description: 'She is an A-list movie star whose past haunts her.'
},
{
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  occupation: 'socialite',
  age: '30',
  description: 'She is from a wealthy family and uses her status and money to earn popularity.'
},
{
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  occupation: 'retired athlete',
  age: '35',
  description: 'He is a former football player who tries to get by on his former glory.'
}
];

var weapons =
[ {name: 'rope'}, {name: 'knife'}, {name:'candlestick'}, {name:'Dumbbell'}, {name:'Poison'}, {name:'Axe'}, {name:'Bat'}, {name:'Trophy'}, {name: 'Pistol'}];

var houseRooms =
[ {roomname: 'dining room'}, {roomname: 'conservatory'},{roomname: 'kitchen'},{roomname: 'study'},{roomname: 'library'},{roomname: 'billiards room'},{roomname: 'lounge'},{roomname: 'ballroom'},{roomname: 'hall'},{roomname: 'spa'},{roomname: 'living room'},
{roomname: 'observatory'},{roomname: 'theater'},{roomname: 'guest house'},{roomname: 'patio'}];


// console.log(gameCharacters[Math.floor((Math.random() * gameCharacters.length))].firstName);
// console.log(weapons[Math.floor((Math.random() * weapons.length))].name);
// console.log(houseRooms[Math.floor((Math.random() * houseRooms.length))].roomname);


// function randomSelect () {
//   console.log(gameCharacters[Math.floor((Math.random() * gameCharacters.length))].firstName);
//   console.log(weapons[Math.floor((Math.random() * weapons.length))].name);
//   console.log(houseRooms[Math.floor((Math.random() * houseRooms.length))].roomname);
// }

// randomSelect();

var caseFileConfidential = {
  character: '',
  weapons: '',
  room: ''
};

function randomSelect () {
  caseFileConfidential.character = gameCharacters[Math.floor((Math.random() * gameCharacters.length))].firstName;
  caseFileConfidential.weapons = weapons[Math.floor((Math.random() * weapons.length))].name;
  caseFileConfidential.room = houseRooms[Math.floor((Math.random() * houseRooms.length))].roomname;
  console.log("The victim was murdered by " + caseFileConfidential.character + " with a " + caseFileConfidential.weapons + " in the " + caseFileConfidential.room + ".");
}

randomSelect();
