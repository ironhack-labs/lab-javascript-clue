var characters = [
  {firstName: "Jacob",
  lastName: "Green",
  occupation: "Handy Man",
  age: 25,
  color: "Green",
  descriptions: "Has lots of connections, willing to help"
  },

  {firstName: "Doctor",
  lastName: "Orchid",
  occupation: "Biologist",
  age: 34,
  color: "White",
  descriptions:"Adopted, expelled from school"
  },

  {firstName: "Victor",
  lastName: "Plum",
  occupation: "Video Game Designer",
  age: 27,
  color: "Purple",
  descriptions: "Billionaire"
  },

  {firstName: "Kasandra",
  lastName: "Scarlett",
  occupation: "Movie Star",
  age: 92,
  color: "Red",
  descriptions: "Haunted by past"
  },

  {firstName: "Eleanor",
  lastName: "Peacock",
  occupation: "Moocher",
  age: 45,
  color: "Blue",
  descriptions: "From wealthy family"
  },

  {firstName: "Jack",
  lastName: "Mustard",
  occupation: "Colonel",
  age: 52,
  color: "Yellow",
  descriptions:"Ex-football player"
  },
];

var weapons = [
  {name:"Rope",
  color:"Brown",
  damage: 62
  },

  {name:"Knife",
  color:"Silver",
  damage: 75
  },

  {name:"Candle Stick",
  color:"Gold",
  damage:24
  },

  {name:"Dumbbell",
  color:"Grey",
  damage:33
  },

  {name:"Poison",
  color:"Green",
  damage:85
  },

  {name:"Axe",
  color:"Bronze",
  damage: 87,
  },

  {name:"Bat",
  color:"Brown",
  damage:52
  },

  {name:"Trophy",
  color:"Gold",
  damage: 15
  },

  {name:"Pistol",
  color:"Pink",
  damage:99
  },
];

var rooms = [
  "Dining Room",
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
  "Theatre",
  "Guest House",
  "Padio"
  ];

function randomCard(cardArray) {
  var randomNumber = Math.floor(Math.random()*cardArray.length);
  return cardArray[randomNumber];
}

function pullFromEach () {
  var selectedCards = [];
    selectedCards.push(randomCard(characters));
    selectedCards.push(randomCard(weapons));
    selectedCards.push(randomCard(rooms));
  return selectedCards;
}

var confidentialEnvelope = pullFromEach();

function finishGame() {
  console.log(confidentialEnvelope);
}

var isDone = prompt("Type 'reveal' to reveal the file.");
if (isDone === 'reveal') {
  finishGame();
}
else{
  console.log("Continue playing.");
}
