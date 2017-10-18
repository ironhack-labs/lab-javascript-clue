var rooms = [
  "Dinning",
  "Room",
  "Conservatory",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
];

var characters = [
  {
    firstName: "Jacob",
    lastName: "Green",
    age: 45,
    color: "green",
    description: "He has a lot of connections"
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    age: 26,
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy"
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    age: 22,
    color: "purple",
    description: "Billionare video game designer"
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    age: 31,
    color: "red",
    description: "She is an A-list movie star with a dark past"
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    age: 36,
    color: "blue",
    description:
      "She is from a wealthy family and uses her status and money to earn popularity"
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    age: 62,
    color: "yellow",
    description:
      "He is a former football player who tries to get by on his former glory"
  }
];

var weapons = [
  { weapon: "Rope", weight: "10" },
  { weapon: "Knife", weight: "8" },
  { weapon: "Candlestick", weight: "2" },
  { weapon: "Dumbbell", weight: "30" },
  { weapon: "Poison", weight: "2" },
  { weapon: "Axe", weight: "15" },
  { weapon: "Bat", weight: "13" },
  { weapon: "Trophy", weight: "25" },
  { weapon: "Pistol", weight: "20" }
];

function random_selector(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

function pick_mistery() {
  var mistery = {
    characters: random_selector(characters),
    weapons: random_selector(weapons),
    rooms: random_selector(rooms)
  };

  return mistery;
}

function reveal_mistery(mistery) {
  console.log(
    "the killer is " +
      mistery.characters.firstName +
      " he used a " +
      mistery.weapons.weapon +
      " in the " +
      mistery.rooms +
      " room"
  );
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
