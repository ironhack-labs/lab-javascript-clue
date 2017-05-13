var gameCharacters = [
  {
    name: "Jacob Green",
    color: "Green",
    description: "He has a lot of connections and is always willing to help people out -- for a price."
  },
  {
    name: "Doctor Orchid",
    color: "White",
    description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning (Wonder what happened with Mrs. White?)"
  },
  {
    name: "Victor Plum",
    color: "Purple",
    description: "He is a billionaire video game designer who is embracing his new popularity."
  },
  {
    name: "Kasandra Scarlet",
    color: "red",
    description: "She is an A-list movie star whose past haunts her."
  },
  {
    name: "Eleanor Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity"
  },
  {
    name: "Jack Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory"
  }
];

var weapons = [
  {
    name: "Rope",
  },
  {
    name: "Knife",
  },
  {
    name: "Candlestick",
  },
  {
    name: "Dumbbell",
  },
  {
  name: "Poison",
  },
  {
    name: "Axe",
  },
  {
    name: "Bat",
  },
  {
    name: "Trophy",
  },
  {
    name: "Pistol"
  }
];

var rooms = [
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
    name: "Billiard room",
  },
  {
    name: "Lounge",
  },
  {
  name: "Ballroom"
  },
  {
    name: "Hall"
  },
  {
    name: "A spa"
  },
  {
    name: "Living room"
  },
  {
    name: "Observatory"
  },
  {
    name: "Theater"
  },
  {
    name: "Guest house"
  },
  {
    name: "A patio"
  }
];


// Genera un numero aletario teniendo en cuenta la dimension del array
function getRadomNum(stack) {
  return Math.floor(Math.random() * stack.length);
}

// Mediante el numero aletorio generado anteriormente, obtiene la carta selecionada
function getCard(stack) {
    return stack[getRadomNum(stack)];
}

// Genera las tres cartas
function getRandomCards(stack1, stack2, stack3) {
  return [ getCard(stack1), getCard(stack2), getCard(stack3)];
}

function revealMystery(){
  console.log(getRandomCards(gameCharacters,weapons,rooms));
}
