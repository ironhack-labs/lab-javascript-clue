// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "John",
    lastName: "Doe",
    occupation: "Doctor",
    age: 35,
    description: "Tall and well-dressed",
    image: "john.jpg",
    color: "Blue",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    occupation: "Lawyer",
    age: 42,
    description: "Short with red hair",
    image: "jane.jpg",
    color: "Green",
  },
  {
    firstName: "David",
    lastName: "Johnson",
    occupation: "Engineer",
    age: 28,
    description: "Medium height and glasses",
    image: "david.jpg",
    color: "Brown",
  },
  {
    firstName: "Sarah",
    lastName: "Williams",
    occupation: "Artist",
    age: 30,
    description: "Curly hair and creative tattoos",
    image: "sarah.jpg",
    color: "Purple",
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    occupation: "Teacher",
    age: 45,
    description: "Bearded and friendly",
    image: "michael.jpg",
    color: "Black",
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    occupation: "Journalist",
    age: 37,
    description: "Elegant and intelligent",
    image: "emily.jpg",
    color: "Red",
  },
];

// Rooms Array

const roomsArray = [
  { name: "Living Room" },
  { name: "Kitchen" },
  { name: "Bedroom 1" },
  { name: "Bathroom 1" },
  { name: "Study" },
  { name: "Dining Room" },
  { name: "Bedroom 2" },
  { name: "Bathroom 2" },
  { name: "Guest Room" },
  { name: "Home Office" },
  { name: "Library" },
  { name: "Garden" },
  { name: "Garage" },
  { name: "Basement" },
  { name: "Attic" },
];

// Weapons Array

const weaponsArray = [
  {
    name: "Knife",
    description: "A sharp and pointed blade",
    image: "knife.jpg",
    weight: 0.3,
  },
  {
    name: "Revolver",
    description: "A classic handgun with six chambers",
    image: "revolver.jpg",
    weight: 1.2,
  },
  {
    name: "Poison",
    description: "A lethal substance in a vial",
    image: "poison.jpg",
    weight: 0.1,
  },
  {
    name: "Rope",
    description: "A sturdy and long piece of rope",
    image: "rope.jpg",
    weight: 0.8,
  },
  {
    name: "Lead Pipe",
    description: "A heavy and solid metal pipe",
    image: "lead-pipe.jpg",
    weight: 2.5,
  },
  {
    name: "Wrench",
    description: "A versatile tool with a metal grip",
    image: "wrench.jpg",
    weight: 0.9,
  },
  {
    name: "Candlestick",
    description: "An ornate candle holder made of metal",
    image: "candlestick.jpg",
    weight: 1.4,
  },
  {
    name: "Bat",
    description: "A wooden baseball bat",
    image: "bat.jpg",
    weight: 1.1,
  },
  {
    name: "Dagger",
    description: "A short and double-edged blade",
    image: "dagger.jpg",
    weight: 0.5,
  },
];

// ITERATION 2

function selectRandom(array) {
  if (array.length === 0) {
    return undefined;
  }

  if (array.length === 1) {
    return array[0];
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function pickMystery() {
  const suspectsArray = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    // ... Add more suspect objects
  ];

  const weaponsArray = [
    { name: "Knife" },
    { name: "Revolver" },
    // ... Add more weapon objects
  ];

  const roomsArray = [
    { name: "Living Room" },
    { name: "Kitchen" },
    // ... Add more room objects
  ];

  return {
    suspect: getRandomElement(suspectsArray),
    weapon: getRandomElement(weaponsArray),
    room: getRandomElement(roomsArray),
  };
}

function getRandomElement(array) {
  if (array.length === 0) {
    return undefined;
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// ITERATION 3

function revealMystery(mystery) {
  const { suspect, weapon, room } = mystery;
  const { firstName, lastName } = suspect;
  const { name: weaponName } = weapon;
  const { name: roomName } = room;

  return `${firstName} ${lastName} killed Mr. Boddy using the ${weaponName} in the ${roomName}!`;
}
