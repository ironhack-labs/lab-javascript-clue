var cards = [
characters = [
  {firstName: "Jacob", lastName: "Green", color: "Green", occupation: "Fixer", age: 38, description: "Willling to help for money"},
  {firstName: "Doctor", lastName: "Orchid", color: "White", occupation: "Biologist", age: 35, description: "Adopted daughter of Mr. Boddy"},
  {firstName: "Victor", lastName: "Plum", color: "Purple",
    occupation: "Video game designer", age: 25, description:
    "Billionaire embracing popularity"},
  {firstName: "Kasandra", lastName: "Scarlet", color: "Red", occupation: "Actor", age: 33, description: "A-list with haunted past"},
  {firstName: "Eleanor", lastName: "Peacock", color: "Blue", occupation: "Socialite", age: 43, description: "Uses money for popularity"},
  {firstName: "Jack", lastName: "Mustard", color: "Yellow", occupation: "Athlete", age: 28, description: "Football player seeking former glory"}
  ],

weapons = [
  "rope", "knife", "candlestick", "dumbbell", "poison", "axe", "bat", "trophy", "pistol"],

houseRooms = [
  "diningRoom", "conservatory", "kitchen", "study", "library", "billiardRoom", "lounge", "ballroom", "hall", "aSpa", "livingRoom", "observatory", "theatre", "guestHouse", "patio"]
];


function getStack(array) {
 return Math.floor(Math.random() * array.length);
}

function getCharacters() {
  return characters[ (getStack(cards[0])) ].firstName;
}

function getWeapons() {
  return weapons[ (getStack(cards[1])) ];
}

function getHouseRooms() {
  return houseRooms[ (getStack(cards[2])) ];
}

var caseFileConfidential = [getCharacters(), getWeapons(), getHouseRooms()];

function revealMystery() {
  console.log(caseFileConfidential);
}

revealMystery();
