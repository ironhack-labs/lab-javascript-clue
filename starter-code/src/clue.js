let person = {
  first_name: "first_name",
  last_name: "last_name",
  color: "color",
  description: "description",
  age: 0,
  image: "image",
  occupation: "occupation"
};
let people = {
  mrGreen: {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  },
  drOrchid: {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation: "Scientist"
  },
  profPlum: {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    ocupation: "Designer"
  },
  missScarlet: {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    ocupation: "Actor"
  },
  mrsPeacock: {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    ocupation: "Socialité"
  },
  mrMustard: {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description:
      "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    ocupation: "Retired Football player"
  }
};

// // Weapons

let weapons = {
  rope: { name: "rope", weight: 10 },
  knife: { name: "knife", weight: 8 },
  candlestick: { name: "candlestick", weight: 2 },
  dumbbell: { name: "dumbbell", weight: 30 },
  poison: { name: "poison", weight: 2 },
  axe: { name: "axe", weight: 15 },
  bat: { name: "bat", weight: 13 },
  trophy: { name: "trophy", weight: 25 },
  pistol: { name: "pistol", weight: 20 }
};

// // Rooms

let rooms = {
  diningRoom: { name: "Dinning Room" },
  conservatory: { name: "Conservatory" },
  kitchen: { name: "Kitchen" },
  study: { name: "Study" },
  library: { name: "Library" },
  billiardRoom: { name: "Billiard Room" },
  lounge: { name: "Lounge" },
  ballroom: { name: "Ballroom" },
  hall: { name: "Hall" },
  spa: { name: "Spa" },
  livingRoom: { name: "Living Room" },
  observatory: { name: "Observatory" },
  theater: { name: "Theater" },
  guestHouse: { name: "Guest House" },
  patio: { name: "Patio" }
};

// Characters Collection
var charactersArray = [];
for (item in people) {
  charactersArray.push(people[item]);
}

// Rooms' Collection
var roomsArray = [];
for (item in rooms) {
  roomsArray.push(rooms[item]);
}
// Weapons Collection
var weaponsArray = [];
for (item in weapons) {
  weaponsArray.push(weapons[item]);
}

// RadnomSelector

function randomSelector(arr) {
  return arr[Math.floor(Math.random() * Math.floor(arr.length))];
}

function pickMistery() {
  let newArr = [];
  newArr.push(
    randomSelector(charactersArray),
    randomSelector(weaponsArray),
    randomSelector(roomsArray)
  );
  return newArr;
}

let misteryEnvelope = pickMistery();

function revealMistery(arr) {
  return `${arr[0].first_name} ${arr[0].last_name} killed Mr.Boddy using the ${
    arr[1].name
  } in the ${arr[2].name}!!!!`;
}

console.log(revealMistery(misteryEnvelope));
