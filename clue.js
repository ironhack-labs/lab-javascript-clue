var cardStack = [
  suspects = [
    mrGreen = {
      firstName: "Jacob",
      lastName: "Green",
      sex: "Male",
      color: "Green",
      age: 36,
      occupation: "Sales Man"
    },
    drOrchid = {
      firstName: "Unknown",
      lastName: "Orchid",
      sex: "Female",
      color: "White",
      age: 52,
      occupation: "Biologist"
    },
    mrPlum = {
      firstName: "Victor",
      lastName: "Plum",
      sex: "Male",
      color: "Purple",
      age: 29,
      occupation: "Video Game Designer"
    },
    msScarlet = {
      firstName: "Kasandra",
      lastName: "Scarlet",
      sex: "Female",
      color: "Red",
      age: 43,
      occupation: ""
    },
    msPeacock = {
      firstName: "Eleanor",
      lastName: "Peacock",
      sex: "Female",
      color: "Blue",
      age: 36,
      occupation: "Real State"
    },
    mrMustard = {
      firstName: "Jack",
      lastName: "Mustard",
      sex: "Male",
      color: "Yellow",
      age: 48,
      occupation: "Football Coach"
    }
  ],
  weapons = [
    rope = {
      name: "Rope",
      weight: "0.5kg",
      hideFactor: "9", //10 best and 0 worst
      typeOfWound: "Strangulation",
      color: "brown"
    },
    knife = {
      name: "Knife",
      weight: "0.5kg",
      hideFactor: "10",
      typeOfWound: "Cut",
      color: "Silver"
    },
    candlestick = {
      name: "Candlestick",
      weight: "2kg",
      hideFactor: "6",
      typeOfWound: "Blunt",
      color: "Gold"
    },
    dumbbell = {
      name: "Dumbbell",
      weight: "5kg",
      hideFactor: "5",
      typeOfWound: "Blunt",
      color: "Black"
    },
    poison = {
      name: "Poison",
      weight: "0kg",
      hideFactor: "8",
      typeOfWound: "None",
      color: "Transparent"
    },
    axe = {
      name: "Axe",
      weight: "7kg",
      hideFactor: "4",
      typeOfWound: "Cut",
      color: "Silver"
    },
    bat = {
      name: "Bat",
      weight: "4kg",
      hideFactor: "3",
      typeOfWound: "Blunt",
      color: "Wood"
    },
    trophy = {
      name: "Trophy",
      weight: "9kg",
      hideFactor: "0",
      typeOfWound: "Blunt",
      color: "Gold"
    },
    pistol = {
      name: "Pistol",
      weight: "2kg",
      hideFactor: "8",
      typeOfWound: "Perforation",
      color: "Black"
    }
  ],
  houseRooms = [
    "diningRoom",
    "conservatory",
    "kitchen",
    "study",
    "library",
    "billiardRoom",
    "lounge",
    "ballRoom",
    "hall",
    "aSpa",
    "livingRoom",
    "observatory",
    "theater",
    "guestHouse",
    "aPatio"
  ]
];

var caseFileConfidential = [];

function randomCard (cardStack) {
  for (var i = 0; i < cardStack.length; i++) {
    var randomNumber =  Math.floor(Math.random() * cardStack[i].length);
    var cardType = cardStack[i];
    caseFileConfidential.push(cardStack[i][randomNumber]);
  }
  return caseFileConfidential;
}
function misteryReveal (cardStack) {
  randomCard (cardStack);
  console.log("The killers is: " + caseFileConfidential[0].firstName + ", with a " + caseFileConfidential[1].name + ", in the " + caseFileConfidential[2]);
}

misteryReveal(cardStack);
