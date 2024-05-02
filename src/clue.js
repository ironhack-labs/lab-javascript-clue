// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Colonel",
    lastName: "Mustard",
    occupation: "Retired Colonel",
    age: 55,
    description: "A military man with a stern demeanor.",
    image: "colonel_mustard.jpg",
    color: "yellow"
  },
  {
    firstName: "Miss",
    lastName: "Scarlett",
    occupation: "Socialite",
    age: 30,
    description: "A charming and flirtatious woman with a love for the finer things in life.",
    image: "miss_scarlett.jpg",
    color: "red"
  },
  {
    firstName: "Professor",
    lastName: "Plum",
    occupation: "Professor of History",
    age: 45,
    description: "An eccentric academic with a passion for obscure knowledge.",
    image: "professor_plum.jpg",
    color: "purple"
  },
  {
    firstName: "Mrs.",
    lastName: "White",
    occupation: "Housekeeper",
    age: 60,
    description: "A strict and orderly housekeeper, always keeping things in their place.",
    image: "mrs_white.jpg",
    color: "white"
  },
  {
    firstName: "Mr.",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 40,
    description: "A slick businessman with a penchant for shady dealings.",
    image: "mr_green.jpg",
    color: "green"
  },
  {
    firstName: "Mrs.",
    lastName: "Peacock",
    occupation: "Wealthy Widow",
    age: 50,
    description: "A sophisticated and sharp-tongued socialite, accustomed to the finer things in life.",
    image: "mrs_peacock.jpg",
    color: "blue"
  }
];

// Rooms Array
const roomsArray = [
    { name: "Kitchen" },
    { name: "Ballroom" },
    { name: "Conservatory" },
    { name: "Dining Room" },
    { name: "Cellar" },
    { name: "Library" },
    { name: "Study" },
    { name: "Billiard Room" },
    { name: "Lounge" },
    { name: "Hall" },
    { name: "Guest House" },
    { name: "Courtyard" },
    { name: "Patio" },
    { name: "Bedroom" },
    { name: "Bathroom" }
  ];
  
  

// Weapons Array

const weaponsArray = [
    {
      name: "Candlestick",
      weight: 2
    },
    {
      name: "Dagger",
      weight: 1
    },
    {
      name: "Lead Pipe",
      weight: 4
    },
    {
      name: "Revolver",
      weight: 3
    },
    {
      name: "Rope",
      weight: 1
    },
    {
      name: "Wrench",
      weight: 3
    },
    {
      name: "Poison",
      weight: 1
    },
    {
      name: "Trophy",
      weight: 5
    },
    {
      name: "Axe",
      weight: 6
    }
  ];
  


// ITERATION 2

function selectRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  

  function pickMystery() {
    const randomSuspect = selectRandom(suspectsArray);
    const randomWeapon = selectRandom(weaponsArray);
    const randomRoom = selectRandom(roomsArray);

    return {
      suspect: randomSuspect,
      weapon: randomWeapon,
      room: randomRoom
    };
  }
  

// ITERATION 3

function revealMystery(envelope) {
    const { suspect, weapon, room } = envelope;
  
    const { firstName, lastName } = suspect;
 
    const message = `${firstName} ${lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
  
    return message;
  }
  
