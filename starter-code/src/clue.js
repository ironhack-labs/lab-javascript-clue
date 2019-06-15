// Characters
let clue = {
  characters: [
    {
      name:         "mrGreen",
      first_name:   "Jacob",
      last_name:    "Green",
      color:        "green",
      description:  "He has a lot of connections",
      age:          45,
      image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      occupation:   "Entrepreneur"
    },
    {
      name:         "drOrchid",
      first_name:   "Doctor",
      last_name:    "Orchid",
      color:        "white",
      description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      age:          26,
      image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      ocupation:    "Scientist"
    },
    {
      name:         "profPlum",
      first_name:   "Victor",
      last_name:    "Plum",
      color:        "purple",
      description:  "Billionare video game designer",
      age:          22,
      image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
      occupation:   "Designer",
    },
    {
      name:         "missScarlet",
      first_name:   "Kasandra",
      last_name:    "Scarlet",
      color:        "red",
      description:  "She is an A-list movie star with a dark past",
      age:          31,
      image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
      occupation:   "Actor",
    },
    {
      name:         "mrsPeacock",
      first_name:   "Eleanor",
      last_name:    "Peacock",
      color:        "blue",
      description:  "She is from a wealthy family and uses her status and money to earn popularity",
      age:          36,
      image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      occupation:   "Socialité"
    },
    {
      name:         "mrMustard",
      first_name:   "Jack",
      last_name:    "Mustard",
      color:        "yellow",
      description:  "He is a former football player who tries to get by on his former glory",
      age:          62,
      image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
      occupation:   "Retired Football player"
    }
  ],
  weapons: [
    { name: "rope"        ,   weight: 10},
    { name: "knife"       ,   weight: 8},
    { name: "candlestick" ,   weight: 2},
    { name: "dumbbell"    ,   weight: 30},
    { name: "poison"      ,   weight: 2},
    { name: "axe"         ,   weight: 15},
    { name: "bat"         ,   weight: 13},
    { name: "trophy"      ,   weight: 25},
    { name: "pistol"      ,   weight: 20}
  ],
  rooms: [  
    { name: "Dinning Room"},
    { name: "Conservatory"},
    { name: "Kitchen"},
    { name: "Study"},
    { name: "Library"},
    { name: "Billiard Room"},
    { name: "Lounge"},
    { name: "Ballroom"},
    { name: "Hall"},
    { name: "Spa"},
    { name: "Living Room"},
    { name: "Observatory"},
    { name: "Theater"},
    { name: "Guest House"},
    { name: "Patio"},
  ]
}

// Characters Collection
var charactersArray = [];

// Rooms" Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];

let misteryEnvelope;

function randomSelector(cards){
  let random = Math.floor(Math.random() * cards.length);
  return cards[random];
}

function pickMistery(){
  return [randomSelector(clue.characters), randomSelector(clue.weapons), randomSelector(clue.rooms)];
}

function revealMistery(envelop){
  return `${envelop[0].first_name} ${envelop[0].last_name} killed Mr.Boddy using the ${envelop[1].name} in the ${envelop[2].name}!!!!`
}

misteryEnvelope = pickMistery(); 

console.log(revealMistery(misteryEnvelope));
