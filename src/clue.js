// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Pedro",
    lastName: "Ramirez",
    occupation: "Barman",
    age: 32,
    description: "Cicatriz en la cara",
    image: "Serious",
    color: "White",
  },
  {
    firstName: "Elisa",
    lastName: "Perez",
    occupation: "Ama de llaves",
    age: 30,
    description: "Estatura 1.75",
    image: "Happy",
    color: "Black",
  },
  {
    firstName: "Esteban",
    lastName: "Gutierrez",
    occupation: "Chofer",
    age: 35,
    description: "Formal",
    image: "Serious",
    color: "white",
  },
  {
    firstName: "Jose Luis",
    lastName: "Torres",
    occupation: "Anfitrion",
    age: 37,
    description: "Invitado perfecto",
    image: "Formal",
    color: "Orange",
  },
  {
    firstName: "Martin",
    lastName: "Sanchez",
    occupation: "Hijo pequeño",
    age: 15,
    description: "Desobediente",
    image: "Corpulento",
    color: "Yellow",
  },
  {
    firstName: "Roberto",
    lastName: "Sanchez",
    occupation: "Padre",
    age: 44,
    description: "Dueño de la casa",
    image: "Adinerado",
    color: "Green",
  },
];

// Rooms Array

const roomsArray = [
  {
    name: "Habitacion 1",
  },
  {
    name: "Habitacion 2",
  },
  {
    name: "Habitacion 3",
  },
  {
    name: "Habitacion 4",
  },
  {
    name: "Habitacion 5",
  },
  {
    name: "Habitacion 6",
  },
  {
    name: "Habitacion 7",
  },
  {
    name: "Habitacion 8",
  },
  {
    name: "Habitacion 9",
  },
  {
    name: "Habitacion 10",
  },
  {
    name: "Habitacion 11",
  },
  {
    name: "Habitacion 12",
  },
  {
    name: "Habitacion 13",
  },
  {
    name: "Habitacion 14",
  },
  {
    name: "Habitacion 15",
  },
];

// Weapons Array

const weaponsArray = [
  {
    name: "Cuchillo",
    weight: 150,
  },
  {
    name: "Candelabro",
    weight: 200,
  },
  {
    name: "Pistola",
    weight: 250,
  },
  {
    name: "Llave inglesa",
    weight: 200,
  },
  {
    name: "Bate de baseball",
    weight: 350,
  },
  {
    name: "Veneno",
    weight: 150,
  },
  {
    name: "Cuerda",
    weight: 400,
  },
  {
    name: "Martillo",
    weight: 300,
  },
  {
    name: "Escopeta",
    weight: 500,
  },
];

// ITERATION 2

function selectRandom(arr) {
  if (!arr.length) return undefined;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };
}

// ITERATION 3

function revealMystery(mystery) {
  return `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!`;
}
