var personajes = [
	{ name: "Jacob", surname: "Green", color:"green", ocupation:"macarra", age: 30, description: "a short description" },
	{ name: "Doctor", surname: "Orchid", color:"white", ocupation:"biologist", age: 30, description: "a short description" },
	{ name: "Victor", surname: "Plum", color:"purple", ocupation:"videoGamer", age: 30, description: "a short description" },
	{ name: "Kasandra", surname: "Scarlett", color:"red", ocupation:"moviestar", age: 30, description: "a short description" },
	{ name: "Eleanor", surname: "Peacock", color:"blue", ocupation:"famous", age: 30, description: "a short description" },
	{ name: "Jack", surname: "Mustard", color:"yellow", ocupation:"footballPlayer", age: 30, description: "a short description" },
];

var weapons = [
  { weaponType: "Rope", weight: "", color: "", harmLevel: "" },
  { weaponType: "Knife", weight: "", color: "", harmLevel: "" },
  { weaponType: "Candlestick", weight: "", color: "", harmLevel: "" },
  { weaponType: "Dumbbell", weight: "", color: "", harmLevel: "" },
  { weaponType: "Poison", weight: "", color: "", harmLevel: "" },
  { weaponType: "Axe", weight: "", color: "", harmLevel: "" },
  { weaponType: "Bat", weight: "", color: "", harmLevel: "" },
  { weaponType: "Trophy", weight: "", color: "", harmLevel: "" },
  { weaponType: "Pistol", weight: "", color: "", harmLevel: "" },
  ];

var rooms = {
  dinningRoom: "Dinning Room",
  conservatory: "Conservatory",
  kitchen: "Kitchen",
  study: "Study",
  library: "Library",
  billiardRoom: "Billiard Room",
  lounge: "Lounge",
  ballroom: "Ballroom",
  hall: "Hall",
  aSpa: "a spa",
  livingRoom: "Living room",
  observatory: "Observatory",
  theater: "Theater",
  guestHouse: "Guest house",
  aPatio: "A patio",
};

// convertimos Rooms (que es un objeto) en un array
var roomsKeysToArray = Object.values(rooms);

// Nos da un numero entero entre 0 y la longitud del array
// retorna un entero decimal, lo redondea y lo mutiplica por la longitud del array
function getRandomArbitrary(Array) {
  return Array[Math.floor(Math.random()*Array.length)];
}

var personajesResult = (getRandomArbitrary(personajes));
//console.log(personajesResult.name);
var weaponResult = (getRandomArbitrary(weapons));
//console.log(weaponResult.weaponType);
var roomsResults = (getRandomArbitrary(roomsKeysToArray));

console.log("The murderer is " + personajesResult.name + ", with the " + weaponResult.weaponType + " in the " + roomsResults +".");
