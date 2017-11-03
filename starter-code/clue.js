//character array

var characters = ['Jacob Green', 'Dr Orchid', 'Professor Plum', 'Miss Scarlet', ' Mrs Peacock', 'Mr Mustard'];

//weapons array

var weapons = [{
    name: "Rope",
    weight: 10
  },
  {
    name: "Knife",
    weight: 8
  },
  {
    name: "Candlestick",
    weight: 2
  },
  {
    name: "Dumbbell",
    weight: 30
  },
  {
    name: "Poison",
    weight: 2
  },
  {
    name: "Axe",
    weight: 15
  },
  {
    name: "Bat",
    weight: 13
  },
  {
    name: "Trophy",
    weight: 25
  },
  {
    name: "Pistol",
    weight: 20
  },
];

//rooms array

var rooms = [
  "Dinning Room",
  "Conservatory",
  "Kitchen",
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

function random_selector(stack) {
  var randomNumber = Math.floor(Math.random() * stack.length);
  return stack[randomNumber];
}

function pick_mistery() {
  var misteryArray = [];
  var character = random_selector(characters)
  var weapon = random_selector(weapons)
  var room = random_selector(rooms)
  misteryArray.push(character, weapon, room)
  return misteryArray;
}

var mistery_envelope = pick_mistery();

function reveal_mistery(misteryArray) {
  return "The murderer is " + misteryArray[0] + " with a " + misteryArray[1].name + " in the " + misteryArray[2];
}

reveal_mistery(mistery_envelope);