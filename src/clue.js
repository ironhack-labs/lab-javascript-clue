// ITERATION 1

// Suspects Array

const suspectsArray = [ 
  {firstName: 'Ana',
    lastName: 'Alves',
    occupation: 'Artist',
    age: 12,
    description: 'An angel',
    image: 'https://images.app.goo.gl/B1B9keEvyeDShLts8',
    color: 'Acqua'
  },

  {firstName: 'Bia',
    lastName: 'Bravo',
    occupation: 'Baker',
    age: 22,
    description: 'Bold',
    image: 'https://images.app.goo.gl/FQ6D89ZhE9UsmEmHA',
    color: 'Black'
  },

  {firstName: 'Cindy',
    lastName: 'Cruise',
    occupation: 'Colunist',
    age: 32,
    description: 'Calm and peaceful',
    image: 'https://images.app.goo.gl/FQ6D89ZhE9UsmEmHA',
    color: 'Creme'
  },

  {firstName: 'Davi',
  lastName: 'Dodger',
  occupation: 'Developer',
  age: 42,
  description: 'Devilish',
  image: 'https://images.app.goo.gl/FQ6D89ZhE9UsmEmHA',
  color: 'DeepBlueNavy'
  },

  {firstName: 'Estevan',
  lastName: 'Ego',
  occupation: 'Entrepreneur',
  age: 52,
  description: 'Exotic',
  image: 'https://images.app.goo.gl/FQ6D89ZhE9UsmEmHA',
  color: 'Esmerald'
  },

  {firstName: 'Felipe',
  lastName: 'Forkas',
  occupation: 'Frontend',
  age: 62,
  description: 'Faithfull',
  image: 'https://images.app.goo.gl/FQ6D89ZhE9UsmEmHA',
  color: 'Frozen'
  },
];
  
  

// Rooms Array

const roomsArray = [
  {roomName: 'Amazonas'},
  {roomName: 'Bluebeach'},
  {roomName: 'Canada'},
  {roomName: 'DeepOcean'},
  {roomName: 'EastSide'},
  {roomName: 'Forest'},
  {roomName: 'GoldenSun'},
  {roomName: 'Heaven'},
  {roomName: 'IntoParadise'},
  {roomName: 'Jungle'},
  {roomName: 'Kingstown'},
  {roomName: 'London'},
  {roomName: 'Miami'},
  {roomName: 'Neatherland'},
  {roomName: 'OrangeBeach'},
];

// Weapons Array

const weaponsArray = [ 
  {
   weaponName: 'Arco',
   weaponWeight: 200
  },
  {
   weaponName: 'Bazuca',
   weaponWeight: 400
  },
  {
   weaponName: 'Carro',
   weaponWeight: 12000
  },
  {
   weaponName: 'Detonator',
   weaponWeight: 12000
  },
  {
   weaponName: 'Forca',
   weaponWeight: 50
  },
  {
   weaponName: 'Granada',
   weaponWeight: 30
  },
  {
   weaponName: 'H1n1 (arma biologica)',
   weaponWeight: 0
  },
  {
   weaponName: 'Isqueiro',
   weaponWeight: 5
  },
];

// ITERATION 2

function selectRandom(arr) {
  let randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
  }
  
function pickMystery() {
  return {
   suspect: selectRandom(suspectsArray),
   weapon: selectRandom(weaponsArray),
   room: selectRandom(roomsArray)
  }
}

// ITERATION 3

function revealMystery(envelope) {

  const susName = envelope.suspect.firstName;
  const susSurname = envelope.suspect.lastName;
  const weaponName = envelope.weapon.name;
  const roomName = envelope.room.name;
  
  return `${susName} ${susSurname} killed Mr. Boddy using the ${weaponName} in the ${roomName}!`;
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
