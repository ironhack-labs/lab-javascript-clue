var gameCharacters = [
  { firstName: "Jacob", lastName: "Green", occupation: "Con man", age: "#", color: "Green" ,  image: "http://www.independent.co.uk/arts-entertainment/cluedo-first-new-character-dr-orchid-mrs-white-dead-1949-hasbro-a7118351.html" },
  { firstName: "Doctor", lastName: "Orchid", occupation: "Doctor", age: "#", color: "White" ,  image: "tbd"},
  { firstName: "Victor" , lastName: "Plum", occupation: "Video Game Designer", age: "#", color: "Purple",  image: "tbd" },
  { firstName: "Kasandra", lastName: "Scarlet", occupation: "A-list movie star", age: "#", color: "Red",  image: "tbd'" },
  { firstName: "Eleanor", lastName: "Peacock", occupation: "Popularity seeker", age: "#", color: "Blue" , image: "tbd"  },
  { firstName: "Jack", lastName: "Mustard", occupation: "Former football player", age: "#", color: "Yellow", image: "tbd" }
];

var weapons = [
  {name: "Rope", dangerLevel: 5},
  {name: "Knife", dangerLevel: 6},
  {name: "Candlestick", dangerLevel: 1},
  {name: "Dumbbell", dangerLevel: 3},
  {name: "Poison", dangerLevel: 8},
  {name: "Axe", dangerLevel: 7},
  {name: "Bat", dangerLevel: 4},
  {name: "Trophy", dangerLevel: 2},
  {name: "Pistol", dangerLevel: 9},
];

var rooms = [
"Dining room",
"Conservatory",
"Kitchen",
"Study",
"Library",
"Billiard room",
"Lounge",
"Ballroom",
"Hall",
"Spa",
"Living room",
"Observatory",
"Theater",
"Guest house",
"Patio"];

function pick_card(cards) {
  randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
};

var clueCards = [ gameCharacters, weapons, rooms ];

var answers = []

clueCards.forEach (function(element){
answers.push(pick_card(element));
});

function reveal_mistery_card (solution) {
  console.log (solution[0].firstName + " " + solution[0].lastName + " killed Mr. Boddy using a " + solution[1].name +  " in the " + solution[2]);
};

reveal_mistery_card(answers)
