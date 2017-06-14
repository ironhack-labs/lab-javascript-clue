// Sara and Rachel's project

var cards = {
    suspects: [
      {firstName: "Jacob", lastName: "Green", color: "Green", description: undefined, occupation: undefined, age: undefined},
      {firstName: "Doctor", lastName: "Green", color: "Green", description: undefined, occupation: undefined, age: undefined},
      {firstName: "Victor", lastName: "Green", color: "Green", description: undefined, occupation: undefined, age: undefined},
      {firstName: "Kasandra", lastName: "Green", color: "Green", description: undefined, occupation: undefined, age: undefined},
      {firstName: "Eleanor", lastName: "Green", color: "Green", description: undefined, occupation: undefined, age: undefined},
      {firstName: "Jack", lastName: "Green", color: "Green", description: undefined, occupation: undefined, age: undefined}
    ] ,
    weapons: [
      {name: "Rope"},
      {name: "Knife"},
      {name: "Candlestick"},
      {name: "Dumbbell"},
      {name: "Poison"},
      {name: "Axe"},
      {name: "Bat"},
      {name: "Trophy"},
      {name: "Pistol"}
    ],
    houseRooms: [
      {name: "Dining Room"},
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
      {name: "Patio" }
    ]
};


function getRandomElement(randomArray) {
  var random = Math.random();
  return Math.floor(random*randomArray.length);
}

function returnMystery(cards) {
  return {
    suspects: cards.suspects[getRandomElement(cards.suspects)],
    weapons: cards.weapons[getRandomElement(cards.weapons)],
    houseRooms: cards.houseRooms[getRandomElement(cards.houseRooms)]
  };
}

var mysteryAnswer = returnMystery(cards);

function revealMystery(answer) {
  console.log(answer.suspects.firstName + " " + answer.suspects.lastName + " did it with the " + answer.weapons.name + " in the " + answer.houseRooms.name + ".");
}

revealMystery(mysteryAnswer);
