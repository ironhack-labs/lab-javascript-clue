//characters array
var charactersArray = [
 {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
  },
{
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist"
},
{
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
  },
{
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
  },
{
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
  },
{
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
  }
];
// Weapons
let weaponsArray = [
{weight: 10,
name: "rope"},
{weight: 2,
name: "candlestick"},      
{weight: 30,
name: "dumbell"},       
{weight: 2,
name: "poison"},         
{weight: 15,
name: "axe" },            
{weight: 13,
name: "bat"},            
{weight: 25,
name: "trophy"},         
{weight: 20,
name: "pistol"}         
]

let roomsArray = [
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

function randomSelector (arr){
 
  let dice = Math.floor(Math.random() * arr.length);
  return arr[dice];
};

function pickMistery() {
 const mysteryEnvelope = [];
 mysteryEnvelope.push(randomSelector(charactersArray));
 mysteryEnvelope.push(randomSelector(weaponsArray));
 mysteryEnvelope.push(randomSelector(roomsArray));
 return mysteryEnvelope;
};

function revealMistery(mysteryEnvelope){
  return `${mysteryEnvelope[0].first_name} ${mysteryEnvelope[0].last_name} killed Mr.Boddy using the ${mysteryEnvelope[1].name} in the ${mysteryEnvelope[2].name}!!!!`;
};
console.log(revealMistery());