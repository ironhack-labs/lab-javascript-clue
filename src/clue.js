// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Vivienne",
    lastName: "Scarlett",
    occupation: "Madame",
    age: 43,
    description: "A sassy Washington DC madame who runs an underground brothel",
    image: "./assets/images/icons/Scarlett.png",
    color: "Red",
  },
  {
    firstName: "Algernon",
    lastName: "Mustard",
    occupation: "Colonel",
    age: 64,
    description:
      "A war profiteer who sold stolen air force radios on the black market and was later involved in a top-secret fusion bomb project",
    image: "./assets/images/icons/Mustard.png",
    color: "Yellow",
  },
  {
    firstName: "Blanche",
    lastName: "White",
    occupation: "Housekeeper",
    age: 34,
    description:
      "A long-time maid to Mr. Boddy, the victim, and has an eye squint from spying in keyholes",
    image: "./assets/images/icons/White.png",
    color: "White",
  },
  {
    firstName: "Thallo",
    lastName: "Green",
    occupation: "Businessman",
    age: 48,
    description:
      "A middle-aged businessman with possible criminal connections turned into a young and handsome playboy",
    image: "./assets/images/icons/Green.png",
    color: "Green",
  },
  {
    firstName: "Henrietta",
    lastName: "Peacock",
    occupation: "Socialite",
    age: 36,
    description:
      "A socialite and former actress who left England after becoming involved in a love triangle with two politicians",
    image: "./assets/images/icons/Peacock.png",
    color: "Blue",
  },
  {
    firstName: "Edgar",
    lastName: "Plum",
    occupation: "Professor",
    age: 53,
    description:
      "A shady archaeologist and the head of the local school's archaeology department",
    image: "./assets/images/icons/Scarlett.png",
    color: "Purple",
  },
];

console.log(typeof suspectsArray);
console.log(suspectsArray.length);
console.log(Array.isArray(suspectsArray));

/*first name, last name, occupation, age, description, image and colo*/
// Rooms Array

const roomsArray = [
  {
    name: "Ballroom",
  },
  {
    name: "Conservatory",
  },
  {
    name: "Billiard Room",
  },
  {
    name: "Library",
  },
  {
    name: "Study",
  },
  {
    name: "Hall",
  },
  {
    name: "Lounge",
  },
  {
    name: "Dining Room",
  },
  {
    name: "Kitchen",
  },
  {
    name: "Sitting Room",
  },
  {
    name: "Parlor",
  },
  {
    name: "Man Cave",
  },
  {
    name: "She Shed",
  },
  {
    name: "Boudoir",
  },
  {
    name: "Harem",
  },
];

console.log(typeof roomsArray);
console.log(roomsArray.length);

// Weapons Array

const weaponsArray = [
  {
    name: "Candlestick",
    weight: 35,
  },
  {
    name: "Dagger",
    weight: 65,
  },
  {
    name: "Lead Pipe",
    weight: 45,
  },
  {
    name: "Revolver",
    weight: 100,
  },
  {
    name: "Wrench",
    weight: 55,
  },
  {
    name: "Rope",
    weight: 45,
  },
  {
    name: "Letter Opener",
    weight: 60,
  },
  {
    name: "Poison",
    weight: 90,
  },
  {
    name: "Piano Wire",
    weight: 50,
  },
];

// ITERATION 2

function selectRandom(array) {
  // If empty, return undefined. Otherwise, random number between 0 and array length
  return array.length == 0
    ? undefined
    : array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
  // Select random suspect, weapon and room. Return object
  const suspect = selectRandom(suspectsArray);
  const weapon = selectRandom(weaponsArray);
  const room = selectRandom(roomsArray);
  return { suspect, weapon, room };
}

console.log(selectRandom(suspectsArray));
console.log(selectRandom(weaponsArray));
console.log(selectRandom(roomsArray));

console.log(pickMystery());

// ITERATION 3

//   return (
//     "" +
//     envelope.suspect.firstName +
//     " " +
//     envelope.suspect.lastName +
//     " killed Mr.Boddy using the " +
//     envelope.weapon.name +
//     " in the " +
//     envelope.room.name +
//     "!"
//   );
// return ("" + envelope.suspect.firstName + " " + envelope.suspect.lastName + " killed Mr.Boddy using the " + envelope.weapon.name + " in the " + envelope.room.name + "!");
//   let solution = `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr.Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
//   return solution;
// let message =
//      "" +
//      envelope.suspect.firstName +
//      " " +
//      envelope.suspect.lastName +
//      " killed Mr.Boddy using the " +
//      envelope.weapon.name +
//      " in the " +
//      envelope.room.name +
//      "!"
//    ;

//    return message;
function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

/*At last, we are ready to reveal the mystery.

Declare a function named revealMystery that receives an envelope object
 (with the shape of the object returned by pickMystery) as the single argument
  and returns a revealing message in the following format:

<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!*/
