var suspect = [
 {firstName: "Jacob Green", lastName: "Green", occupation: "Helper", color: "Green"},
 {firstName: "Doctor", lastName: "Orchid", occupation: "Biologist", color: "White"},
 {firstName: "Victor", lastName: "Plum", occupation: "Gamedesigner", color:"Purple"},
 {firstName: "Kasandra", lastName: "Scarlet", occupation: "Moviestar", color: "Red"},
 {firstName: "Eleonor", lastName: "Peacock", occupation: "Unemployed", color: "Blue"},
 {firstName: "Jack", lastName: "Mustard", occupation: "FootballPlayer", color: "Yellow"}
];

var rooms = ["Dining room", "Conservatory", "Kitchen", "Study", "Library", "Billiard room", "Lounge", "Ballroom", "Hall", "A spa", "Living room", "Observatory", "Theater", "Guest house", "A patio"];

var weapons = ["Rope", "Knife", "Candlestick", "Dumbbell", "Poison", "Axe", "Bat", "Trophy", "Pistol"];

function randomSelector(array) {
  var arrayLength = array.length;
  var randomNumber = Math.random() * (array.length);
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
}

function crime(suspect, rooms, weapon) {
  theSuspect = suspect[randomSelector(suspect)].firstName;
  theRoom = rooms[randomSelector(rooms)];
  theWeapon = weapons[randomSelector(weapons)];
  return (theSuspect + " Killed Mr. Boddy in " + theRoom + " with " + theWeapon);
}

var caseFileConfidential = crime(suspect, rooms, weapons);

console.log(caseFileConfidential);
