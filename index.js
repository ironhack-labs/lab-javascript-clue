var characterList = [

  {
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    occupation: "gangster",
    age: 30,
    description: "Willing to help for a price",
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    color: "white",
    occupation: "biologist",
    age: 35,
    description: "Has a PhD in toxicology",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    occupation: "video game designer",
    age: 25,
    description: "Millionaire still living in mom's basement",
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    color: "red",
    occupation: "movie star",
    age: 22,
    description: "A-lister with a haunted past",
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    occupation: "philanthropist",
    age: 40,
    description: "Old money equals new friends",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    occupation: "football player",
    age: 45,
    description: "Misses the glory days",
  }
];






var weapons = [
  {
    name: "rope",
    damage: 3,
    weight: "light",
    color: "brown"
  },
  {
    name: "knife",
    damage: 6,
    weight: "moderate",
    color: "silver"
  },
  {
    name: "candlestick",
    damage: 1,
    weight: "light",
    color: "copper"
  },
  {
    name: "dumbbell",
    damage: 4,
    weight: "heavy",
    color: "silver",
  },
  {
    name: "poison",
    damage: 8,
    weight: "light",
    color: "purple"
  },
  {
    name: "axe",
    damage: 7,
    weight: "moderate",
    color: "red",
  },
  {
    name: "bat",
    damage: 5,
    weight: "moderate",
    color: "brown"
  },
  {
    name: "trophy",
    damage: 2,
    weight: "moderate",
    color: "gold"
  },
  {
    name: "pistol",
    damage: 9,
    weight: "moderate",
    color: "black"
  },
];


var houseRooms = [
  "dining room",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiard room",
  "lounge",
  "ballroom",
  "hall",
  "spa",
  "living room"
];


var player1Cards = []

randomHand ();


function shuffleCards (array) {
  var randomNum = Math.random()* array.length - 1;
  randomNum = Math.floor(randomNum);
  return array[randomNum];
}

function randomHand () {
  var crimeScene = shuffleCards (houseRooms);
  var weaponFound = shuffleCards (weapons);
  var suspect = shuffleCards (characterList);
  console.log ("Our Crime scene is " + crimeScene);
  console.log ("Our Weapon is " + weaponFound.name);
  console.log ("Our Suspect is " + suspect.firstName + " " + suspect.lastName);
  player1Cards.push(crimeScene, weaponFound, suspect);
}
