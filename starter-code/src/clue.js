var characters = [
  {
    nick:'mrGreen',
   first_name: "Jacob",
   last_name: "Green",
   color: "green",
   description: "He has a lot of connections",
   age: 45,
   image:
     "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
   occupation: "Entrepreneur"
 },

  {
   nick:'drOrchid',
   frst_name: "Doctor",
   lst_name: "Orchid",
   color: "white",
   description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
   age: 26,
   image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
   ocupation: "Scientist"
 },

  {
    nick:'profPlum',
   first_name: "Victor",
   last_name: "Plum",
   color: "purple",
   description: "Billionare video game designer",
   age: 22,
   image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
   occupation: "Designer"
 },

  {
    nick:'missScarlet',
   first_name: "Kasandra",
   last_name: "Scarlet",
   color: "red",
   description: "She is an A-list movie star with a dark past",
   age: 31,
   image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
   occupation: "Actor"
 },

  {
    nick:'mrsPeacock',
   first_name: "Eleanor",
   last_name: "Peacock",
   color: "blue",
   description:
     "She is from a wealthy family and uses her status and money to earn popularity",
   age: 36,
   image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
   occupation: "Socialité"
 },

 {
   nick:'mrMustard',
   first_name: "Jack",
   last_name: "Mustard",
   color: "yellow",
   description:
     "He is a former football player who tries to get by on his former glory",
   age: 62,
   image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
   occupation: "Retired Football player"
 }
]


var weapons = [
 { name: "rope", weight: 10 },
 { name: "knife", weight: 8 },
 { name: "candlestick", weight: 2 },
 { name: "dumbbell", weight: 30 },
 { name: "poison", weight: 2 },
 { name: "axe", weight: 15 },
 { name: "bat", weight: 13 },
 { name: "trophy", weight: 25 },
 { name: "pistol", weight: 20 }
];

var rooms = [
{name: "Dinning Room"},
{name: "Conservatory"},
{name: "Kitchen"},
{name: "Study"},
{name: "Library"},
{name: "Billiard Room"},
{name: "Lounge"},
{name: "Ballroom"},
{name: "Hall"},
{name: "Spa"},
{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"}
]


// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];




for (var i = 0; i < characters.length; i++) {
 charactersArray.push(characters[i]);
}

for (var i=0; i<weapons.length; i++){
 weaponsArray.push(weapons[i]);
}


for (var i=0; i<rooms.length; i++){
 roomsArray.push(rooms[i]);
}

function randomSelector( item ) {

  Math.floor( Math.random() * item.length );

  return item;

}


// function pickMistery( a , b , c ) {
  
//   var misteryEnvelope = [];
//   var a = randomSelector( charactersArray );
//   var b = randomSelector( weaponsArray );
//   var c = randomSelector( roomsArray );

//   return misteryEnvelope;

// }


function randomSelector (carta) {
  return carta[Math.floor(Math.random() * carta.length)]
};
var misteryEnvelope = []; 
function pickMistery (carta1,carta2,carta3) {
  misteryEnvelope.push(randomSelector (carta1));
  misteryEnvelope.push(randomSelector (carta2));
  misteryEnvelope.push(randomSelector (carta3));
  return misteryEnvelope;
};