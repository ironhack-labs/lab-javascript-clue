var mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  occupation: "Lawyer",
  age: 31,
  description: "Always willing to help people out -- for a price."
};

var msWhite = {
  firstName: "Doctor",
  lastName: "Orchid",
  occupation: "Biologist",
  age: 25,
  description: "She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"
};

var mrPurple = {
  firstName: "Victor",
  lastName: "Plum",
  occupation: "Video Game Designer",
  age: 21,
  description: "He is a billionaire video game designer who is embracing his new popularity."
};

var msRed = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  occupation: "Movie Star",
  age: 24,
  description: "Her past haunts her."
};

var msBlue = {
  firstName: "Eleonor",
  lastName: "Peacock",
  occupation: "Heiress",
  age: 33,
  description: "She is from a wealthy family and uses her status and money to earn popularity."
};

var mrYellow = {
  firstName: "Jack",
  lastName: "Mustard",
  occupation: "Ex Football Player",
  age: 18,
  description: "He  tries to get by on his former glory."
};


var characters = [mrGreen, msWhite, mrPurple, msRed, msBlue, mrYellow];

var rope = {
  name: "rope",
  color: "white",
  howMuchHurts: 2
 };

var knife = {
  name: "knife",
  color: "silver",
  howMuchHurts: 7
};

var candlestick = {
  name: "candlestick",
  color: "yellow",
  howMuchHurts: 5
};

var dumbbell = {
  name: "dumbbell",
  color:"black",
  howMuchHurts: 6
};

var poison = {
  name: "poison",
  color:"green",
  howMuchHurts: 1
};

var axe = {
  name: "axe",
  color:"brown",
  howMuchHurts: 9
};

var bat = {
  name: "bat",
  color: "orange",
  howMuchHurts: 7
};

var trophy = {
  name: "trophy",
  color: "gold",
  howMuchHurts: 2
};

var pistol = {
  name: "pistol",
  color:"black",
  howMuchHurts: 10
};

var weapons = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

var rooms = ["Dinning room", "Conservatory", "Kitchen", "Study", "Library", "Billiard room", "Lounge", "Ballroom", "Hall", "Spa", "Living room", "Observatory", "Theatre", "Guest house","Patio"];

var allDecks = [characters, weapons, rooms];

function selectRandomCard(deck) {
  var number = Math.floor(Math.random() * deck.length);
  return deck[number];
}

function selectGameCards(decks){
  var selectedCards = decks.map(selectRandomCard);
  return selectedCards;
}

function revealMystery(solution){
  solution.forEach(function(card){
    console.log(card);
  });
}

var mystery = selectGameCards(allDecks);
revealMystery(mystery);
