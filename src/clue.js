// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "House",
    occupation: "mecanic",
    age: 34,
    description: "sospechoso",
    image: "picture1",
    color: "green",

  },

  {
    firstName: "Juan",
    lastName: "Fernandez",
    occupation: "Entrepreneur",
    age: 25,
    description: "feo",
    image: "picture2",
    color: "black",

  },
  {
    firstName: "Paco",
    lastName: "Rodriguez",
    occupation: "Arquitecto",
    age: 90,
    description: "gordo",
    image: "picture 3",
    color: "orange",

  },
  {
    firstName: "Ramon",
    lastName: "Guti",
    occupation: "Profesor",
    age: 20,
    description: "Pokemon",
    image: "Picture 4",
    color: "Red",

  },
  {
    firstName: "Javi",
    lastName: "Martinez",
    occupation: "Diseñador",
    age: 2,
    description: "bebe",
    image: "picture 5",
    color: "Pink",

  },
  {
    firstName: "Maria",
    lastName: "Torres",
    occupation: "Boxeadora",
    age: 42,
    description: "fuerte",
    image: "picture 6",
    color: "Yellow",
  }

];

// Rooms Array

const roomsArray = [
  {
    name: "Baño 1",
  },
  {
    name: "Baño 2",
  },
  {
    name: "Baño 3",
  },
  {
    name: "cocina 1",
  },
  {
    name: "cocina 2",
  },
  {
    name: "Habitación 1",
  },
  {
    name: "Habitación 2",
  },
  {
    name: "Habitación 3",
  },
  {
    name: "Habitación 4",
  },
  {
    name: "Habitación 5",
  },
  {
    name: "Habitación 6",
  },
  {
    name: "Habitación 7",
  },
  {
    name: "Comedor",
  },
  {
    name: "Jardin",
  },
  {
    name: "Garage",
  },



];

// Weapons Array

const weaponsArray = [
  {
    name: "Cuchillo",
    weight: 1,

  },
  {
    name: "Pistola",
    weight: 2,

  },
  {
    name: "Espada",
    weight: 3,

  },
  {
    name: "sarten",
    weight: 4,

  },
  {
    name: "Patata",
    weight: 5,

  },
  {
    name: "botella",
    weight: 6,

  },
  {
    name: "bomba",
    weight: 7,

  },
  {
    name: "boli",
    weight: 8,

  },
  {
    name: "lanza",
    weight: 9,

  },
];


// ITERATION 2

function selectRandom(salvageArray) {
  let indiceAleatorio = Math.floor(Math.random() * (salvageArray.length))


  return salvageArray[indiceAleatorio];


}


function pickMystery() {
  let yourcards = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)

  }
  return yourcards
}


// ITERATION 3

function revealMystery() {
  return ` ${yourcards.suspect.firstName} ${yourcards.suspect.lastName} killed Mr. Boddy using the ${yourcards.weapon.name} in the ${yourcards.room.name}! `
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
