// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green'
  },
  {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple'
  },
  {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
  }

];

// Rooms Array

const roomsArray = [
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
  {name: "Patio"}
];

// Weapons Array

const weaponsArray = [
  {
    name: "rope",
    weight: 10
  },
  {
    name: "knife",
    weight: 8
  },
  {
    name: "candlestick",
    weight: 2
  },
  {
    name: "dumbbell",
    weight: 30
  },
  {
    name: "poison",
    weight: 2
  },
  {
    name: "axe",
    weight: 15
  },
  {
    name: "bat",
    weight: 13
  },
  {
    name: "trophy",
    weight: 25
  },
  {
    name: "pistol",
    weight: 20
  }
];


// ITERATION 2
// agregamos como argumento de la funcion selectRoom el Array = roomsArray
function selectRandom(aleatorio) {
  //2.1 Nos aseguramos de que el argumento que introducimos es un Array mediante un If que no respondera un error si el argumento no es un !Array.
  if (!Array.isArray(aleatorio)){
    throw TypeError ('el argumento deberia ser un Array');
  }
  //2.2 nos aseguramos de que el Array no es un array vacio, si esta vacio la funcion nos retorna un null
  if (!aleatorio.length){
    return undefined;
  }
  //2.3 Creamos una variable para alojar indicadorAleatorio con una funcion Math.floor (nos devuelve el numero entero mas cercano)atraves de Math.ramdon, multiplicado por el tamaño del Array (roomsArray.length) obtenemos una posicion aleatoria en el mismo.
  let selectRandom = Math.floor(Math.random() * aleatorio.length);
  
  console.log(selectRandom);
  return aleatorio[selectRandom];
}
   
function pickMystery() {
  //3.1 creamos las posiciones ramdom de cada pila de cartas llamando a la funcion 
  let randomRoom = selectRandom(roomsArray);
  //console.log(randomRoom);
  let randomSuspect = selectRandom(suspectsArray);
  //console.log(randomSuspect);
  let randomWeapon = selectRandom(weaponsArray);
  //console.log(randomWeapon);
 

  let mysteryObject = {room : randomRoom, suspect : randomSuspect, weapon : randomWeapon};
  //console.log(mysteryObject);
  return mysteryObject;
}


// ITERATION 3
// Le pasamos a la funcion el objeto creado ramdom
function revealMystery(mysteryObject) {
  //3.1 Creamos variables para cada dato que se nos que necesitamos capturar.
  let name = mysteryObject.suspect.firstName;
  //console.log(name);
  let lastName = mysteryObject.suspect.lastName;
  //console.log(lastName);
  let room = mysteryObject.room.name;
  //console.log(room);
  let weapon = mysteryObject.weapon.name;
  //console.log(weapon);
  //3.2 Introducimos las variables en el string que se nos pide que retorne 
  let sentence = `${name} ${lastName} killed Mr. Boddy using the ${weapon} in the ${room}!`;
  //console.log(sentence);
  return sentence;
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
