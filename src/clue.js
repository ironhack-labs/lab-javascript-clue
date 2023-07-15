// ITERATION 1

// Clue tiene 2 tipos de cartas diferentes: sospechosos, habitaciones y armas. La primera parte nos pide de crear una array para cada tipo de carta.

// cada array contiene objetos y cada objeto representa 1 carta. Toda esa informacion se encuentra en el fichero DATA.md. Hay que adaptar esa información a nuestras arrays.

// Suspects Array
const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  },

  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
  },

  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image:
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
  },

  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  },

  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  },

  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  },
];

// Rooms Array

const roomsArray = [
  {
    name: "Dining Room",
  },

  {
    name: "Conservatory",
  },

  {
    name: "Kitchen",
  },

  {
    name: "Study",
  },

  {
    name: "Library",
  },

  {
    name: "Billiard Room",
  },

  {
    name: "Lounge",
  },

  {
    name: "Ballroom",
  },

  {
    name: "Hall",
  },

  {
    name: "Spa",
  },

  {
    name: "Living Room",
  },

  {
    name: "Observatory",
  },

  {
    name: "Theater",
  },

  {
    name: "Guest House",
  },

  {
    name: "Patio",
  },
];

// Weapons Array

const weaponsArray = [
  {
    name: "rope",
    weight: 10,
  },

  {
    name: "knife",
    weight: 8,
  },

  {
    name: "candlestick",
    weight: 2,
  },

  {
    name: "dumbbell",
    weight: 30,
  },

  {
    name: "poison",
    weight: 2,
  },

  {
    name: "axe",
    weight: 15,
  },

  {
    name: "bat",
    weight: 13,
  },

  {
    name: "trophy",
    weight: 25,
  },

  {
    name: "pistol",
    weight: 20,
  },
];

// ITERATION 2

// Al comienzo del juego, los jugadores barajan cada una de las pilas de cartas para crear una combinación de sospechoso, arma y habitación. Este será el misterio a resolver.

// esta función tiene que seleccionar un elemento de la array de cartas, aleatoramente.Tiene un array como parametro. Devuelve una carta al azar del array.

function selectRandom(arrayCartas) {
  return arrayCartas[Math.floor(Math.random() * arrayCartas.length)];
}
// comprobacion por console para ver si está funcionando bien
console.log("Tu carta es: " + JSON.stringify(selectRandom(suspectsArray)));

// funcion sin argumentos. Devuelve un objeto con tres propiedades: sospechosos, arma y habitacion , cada una de las cuales tiene como valor una carta de ese tipo. Se obtiene una carta aleatoria de cada tipo llamando la dunción selectRandom.

function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };
}

// comprobación por console para ver si funciona bien
console.log("Tu misterio es: " + JSON.stringify(pickMystery()));

// ITERATION 3

// El misterio se resuelve. La función recibe un objeto envolvente (con la forma del objeto devuelto por pickMystery() ) como único argumento y devuelva un mensaje revelador en el siguiente formato:

// <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!

function revealMystery() {
  const mystery = pickMystery();
  return (
    mystery.suspect.firstName +
    " " +
    mystery.suspect.lastName +
    " killed Mr. Boddy using the " +
    mystery.weapon.name +
    " in the " +
    mystery.room.name +
    "!"
  );
}

// comprobación iteración 3, veamos si todo funciona bien hasta este punto
console.log(revealMystery());

// Jasmine, I kill you. WTF! Why don't you pass correctly the last  option if I return the string "<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <PLACE>!"
