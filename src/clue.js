// ITERATION 1

// Suspects Array

const suspectsArray = [
    { 
        firstName: 'Juan',
        lastName: 'Pérez',
        occupation: 'Ingeniero',
        age: 30,
        description: 'Lorem ipsum...',
        image: 'juan.jpg',
        color: 'blue'
      },
      { 
        firstName: 'María',
        lastName: 'Gómez',
        occupation: 'Doctora',
        age: 35,
        description: 'Dolor sit amet...',
        image: 'maria.jpg',
        color: 'green'
      },
      { 
        firstName: 'Pedro',
        lastName: 'Rodríguez',
        occupation: 'Profesor',
        age: 40,
        description: 'Consectetur adipiscing elit...',
        image: 'pedro.jpg',
        color: 'red'
      },
      { 
        firstName: 'Luisa',
        lastName: 'Martínez',
        occupation: 'Abogada',
        age: 28,
        description: 'Sed do eiusmod tempor...',
        image: 'luisa.jpg',
        color: 'yellow'
      },
      { 
        firstName: 'Ana',
        lastName: 'Sánchez',
        occupation: 'Artista',
        age: 25,
        description: 'Ut labore et dolore magna...',
        image: 'ana.jpg',
        color: 'purple'
      },
      {
      firstName: 'Carla',
      lastName: 'Sánchez',
      occupation: 'Abogada',
      age: 33,
      description: 'Ut enim ad minim veniam...',
      image: 'carla.jpg',
      color: 'orange'
      }
    ];


// Rooms Array

const roomsArray = [
  { name: 'Kitchen' },
  { name: 'Ballroom' },
  { name: 'Conservatory' },
  { name: 'Dining Room' },
  { name: 'Cellar' },
  { name: 'Billiard Room' },
  { name: 'Library' },
  { name: 'Lounge' },
  { name: 'Hall' },
  { name: 'Study' },
  { name: 'Living Room' },
  { name: 'Drawing Room' },
  { name: 'Guest Room' },
  { name: 'Cloakroom' },
  { name: 'Patio' }
];


// Weapons Array

const weaponsArray = [
    { 
      name: 'Candelabro',
      weight: 3
    },
    { 
      name: 'Llave inglesa',
      weight: 4
    },
    { 
      name: 'Cuerda',
      weight: 2
    },
    { 
      name: 'Tubo de plomo',
      weight: 4
    },
    { 
      name: 'Daga',
      weight: 2
    },
    { 
      name: 'Revólver',
      weight: 3
    },
    {   
      name: 'Cuchillo',
      weight: 2
    },
    { 
      name: 'Pipa',
      weight: 1
    },
    { 
      name: 'Lazo',
      weight: 1
    }
  ]

// ITERATION 2

function selectRandom(arr) {
if (arr.length === 0){return undefined}
if (arr.length === 1){return arr[0]}

let randomNum = Math.floor(Math.random() * arr.length)
return arr[randomNum]
}

let currentMystery

function pickMystery() {

    currentMystery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }

    return currentMystery
}


// ITERATION 3

function revealMystery() {

    return `${currentMystery.suspect.firstName} ${currentMystery.suspect.lastName} killed Mr. Boddy using the ${currentMystery.weapon.name} in the ${currentMystery.room.name}!`

}

