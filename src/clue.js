// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 41,
    description:
      "A shady businessman who will do anything to maximize revenues",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "dark green",
  },
  {
    firstName: "Scarlett",
    lastName: "Crimson",
    occupation: "Actress",
    age: 36,
    description: "Famous for her dramatic flair — on and off the stage.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    color: "red",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Professor",
    age: 52,
    description: "A brilliant mind with a dark obsession for secrets.",
    image:
      "https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "purple",
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialite",
    age: 48,
    description: "Elegant and charming — but her smile hides a sharp edge.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    color: "blue",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Colonel",
    age: 67,
    description:
      "Disciplined, strategic, and not afraid to get his hands dirty.",
    image:
      "https://images.unsplash.com/photo-1612018883387-f29550e168e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "mustard yellow",
  },
  {
    firstName: "Fiona",
    lastName: "White",
    occupation: "Chef",
    age: 33,
    description: "She knows every ingredient in the room — including poison.",
    image:
      "https://images.unsplash.com/photo-1585358682246-23acb1561f6b?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "white",
  },
];

// Rooms Array

const roomsArray = [
  { name: "library" },
  { name: "kitchen" },
  { name: "sauna" },
  { name: "garden house" },
  { name: "staircase" },
  { name: "gallery" },
  { name: "rooftop" },
  { name: "wine cellar" },
  { name: "poolhouse" },
  { name: "laundry room" },
  { name: "office" },
  { name: "guest bedroom" },
  { name: "living room" },
  { name: "cinema" },
  { name: "attic" },
];

// Weapons Array

const weaponsArray = [
  {
    name: "gun",
    weight: 600,
  },
  {
    name: "antique vase",
    weight: 5000,
  },
  {
    name: "kitchen knife",
    weight: 200,
  },
  {
    name: "letter opener",
    weight: 100,
  },
  {
    name: "piece of firewood",
    weight: 3000,
  },
  {
    name: "statue",
    weight: 2000,
  },
  {
    name: "wine bottle",
    weight: 1000,
  },
  {
    name: "baseball bat",
    weight: 1000,
  },
  {
    name: "book",
    weight: 3000,
  },
];

// ITERATION 2

function selectRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };
}

// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}
