'use strict';

// ClueGame is a JSON-like object with three main properties: characters, rooms, weapons.
// Each of them are arrays that contain objects, except for "rooms" which contains strings.
const ClueGame = {
  // Characters: name, lastName, color, description, age, image, occupation.
  "characters": [
    {
      alias: "Mr Green",
      name: "Jacob",
      lastName: "Green",
      color: "green",
      description: "He has a lot of connections",
      age: 45,
      image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      occupation: "Entrepreneur"
    },
    {
      alias: "Dr Orchid",
      name: "Doctor",
      lastName: "Orchid",
      color: "white",
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      age: 26,
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      occupation: "Scientist"
    },
    {
      alias: "Prof Plum",
      name: "Victor",
      lastName: "Plum",
      color: "purple",
      description: "Billionare video game designer",
      age: 22,
      image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
      occupation: "Designer"
    },
    {
      alias: "Miss Scarlet",
      name: "Kasandra",
      lastName: "Scarlet",
      color: "red",
      description: "She is an A-list movie star with a dark past",
      age: 31,
      image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
      occupation: "Actress"
    },
    {
      alias: "Mrs Peacock",
      name: "Eleanor",
      lastName: "Peacock",
      color: "blue",
      description: "She is from a wealthy family and uses her status and money to earn popularity",
      age: 36,
      image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      occupation: "Socialite"
    },
    {
      alias: "Mr Mustard",
      name: "Jack",
      lastName: "Mustard",
      color: "yellow",
      description: "He is a former football player who tries to get by on his former glory",
      age: 62,
      image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
      occupation: "Retired Football player"
    }
  ],

  // Rooms
  "rooms": [
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
  ],

  // Weapons: value of each property is the weight of the weapon.
  "weapons": [
    { rope: 10 },
    { knife: 8 },
    { candlestick: 2 },
    { dumbbell: 30 },
    { poison: 2 },
    { axe: 15 },
    { bat: 13 },
    { trophy: 25 },
    { pistol: 20 }
  ]
};

// Generate a random number between 0 and the length of the array that's passed in.
const generateRandomNumber = (array) => {
  const arrayLength = array.length;
  const randomDecimal = Math.random() * arrayLength;
  const randomInteger = Math.floor(randomDecimal);

  return randomInteger;
}

// Take an array of characters, rooms, or weapons.
const randomSelector = (array) => {
  const randomInteger = generateRandomNumber(array);
  let randomElement; // Updated inside the forEach with a random element.

  array.forEach((item, index) => {
    // Match the item being iterated over with the random integer.
    if (index === randomInteger) {
      if (item.hasOwnProperty('alias')) { // It's a Character
        randomElement = item.alias;
      } else if (item[index] === item[randomInteger]) { // It's a Room
        randomElement = item;
      } else { // It's a Weapon
        console.log('ehere');
        for (let propName in item) {
          randomElement = propName;
        }
      }
    }
  });

  return randomElement;
}

// Take the main ClueGame object and pluck the Character, Weapon, and Room arrays.
const pickMistery = (obj) => {
  const charactersArray = obj.characters;
  const weaponsArray = obj.weapons;
  const roomsArray = obj.rooms;

  // Call randomSelector() with each of the above arrays.
  const randomCharacter = randomSelector(charactersArray);
  const randomRoom = randomSelector(roomsArray);
  const randomWeapon = randomSelector(weaponsArray);
  const output = `Character: ${randomCharacter}, weapon: ${randomWeapon}, room: ${randomRoom}`;

  // Return the result of calling randomSelector(), concatenated.
  return output;
}

// Log the output to the console.
const revealMistery = (mistery) => {
  console.log(mistery);
}

// Run it.
const mistery = pickMistery(ClueGame);
revealMistery(mistery);
