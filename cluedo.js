// creating the cards

var suspects = [
   { firstname: "Jacob",
    lastname: "Green",
    occupation: "",
    age: -1,
    description: "He has a lot of connections and is always willing to help people out -- for a price.",
    color: "green"
  },
  {firstname: "Doctor",
    lastname: "Orchid",
    occupation: "",
    age: -1,
    description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning (Wonder what happened with Mrs. White?).",
     color: "white"
  },
  {firstname: "Victor",
    lastname: "Plum",
    occupation: "",
    age: -1,
    description: "He is a billionaire video game designer who is embracing his new popularity.",
     color: "purple"
  },
  {firstname: "Kasandra",
    lastname: "Scarlet",
    occupation: "",
    age: -1,
    description: "She is an A-list movie star whose past haunts her.",
     color: "red"
  },
  {firstname: "Eleanor",
    lastname: "Peacock",
    occupation: "",
    age: -1,
    description: "She is from a wealthy family and uses her status and money to earn popularity.",
     color: "blue"
  },
  {firstname: "Jack",
    lastname: "Mustard",
    occupation: "",
    age: -1,
    description: "He is a former football player who tries to get by on his former glory.",
     color: "yellow"
  }
]

var weapons = [
  "rope",
  "knife",
  "candlestick",
  "dumbbell",
  "poison",
  "axe",
  "bat",
  "trophy",
  "pistol"
]

var houseRooms =  [
  "diningRoom",
  "conservator",
  "kitchen",
  "study",
  "billiardRoom",
  "lounge",
  "ballRoom",
  "hall",
  "spa",
  "livingRoom",
  "observatory",
  "theater",
  "guest house",
  "patio"
];

//we created the function getRand to select randomly, then the function getCard to select randomly among the cards

function getRand(card) {
  return Math.random() * (card.length - 0) + 0;
}

var player = {} ;

function getCard(player) {
  player.suspectCard = suspects[Math.floor(getRand(suspects))];
  player.weaponCard = weapons[Math.floor(getRand(weapons))];
  player.houseRoomsCard = houseRooms[Math.floor(getRand(houseRooms))]
  return player;
}

//we print one iteration

player = getCard(player);

console.log(player);

//we created the envelope with one case scenario

var caseFileConfidential = {};

caseFileConfidential = getCard(caseFileConfidential);

//we display the answer properly

console.log("The murderer is " + caseFileConfidential.suspectCard.firstname + " " + caseFileConfidential.suspectCard.lastname + ", who killed with the " + caseFileConfidential.weaponCard + " in the " + caseFileConfidential.houseRoomsCard);
