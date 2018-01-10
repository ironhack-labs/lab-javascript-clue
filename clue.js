var cards = {
  suspects:[
    {
      name : "Jacob Green",
      color : "green"
    },
    {
      name : "Doctor Orchid",
      color : "white"
    },
    {
      name : "Victor Plum",
      color : "purple"
    },
    {
      name : "Kasandra Scarlet",
      color : "red"
    },
    {
      name : "Eleanor Peacock",
      color : "blue"
    },
    {
      name : "Jack Mustard",
      color : "yellow"
    },

  ],
  rooms: ["Dining Room","Conservatory","Kitchen","Study","Library","Billiard Room","Lounge","Ballrom","Hall","A spa","Living Room","Observatory","Theater","Guest House","A patio"],
  weapons: [
    {
      name: "Rope",
      damage: 2
    },
    {
      name:"Knife",
      damage: 1
    },
    {
      name:"Candlestick",
      damage: 2
    },
    {
      name:"Dumbbell",
      damage: 2
    },
    {
      name:"Poison",
      damage: 3
    },
    {
      name:"Axe",
      damage: 1
    },
    {
      name:"Bat",
      damage: 4
    },
    {
      name:"Trophy",
      damage: 1
    },
    {
      name:"Pistol",
      damage: 5
    }]
};


function randomSelect(cardStack){
    var random = Math.floor(Math.random()*cardStack.length);
    var result = cardStack[random];
    return result;
}

function createMurder(suspect, weapon, room){
    var murder = {};
    murder.name = suspect;
    murder.weapon = weapon;
    murder.room = room;

    return murder;
}

function eachCardStack(suspects, weapons, rooms){
  var weapon = randomSelect(weapons);
  var person = randomSelect(suspects);
  var room = randomSelect(rooms);

  var murder = createMurder(person.name,weapon.name,room);

  return murder;
}


function revealMurder(murder){
  console.log("El asesino fue "+murder.name+ " con "+ murder.weapon+ " en "+ murder.room);
}


var CaseFileConfidential = eachCardStack(cards.suspects, cards.weapons,cards.rooms);

revealMurder(CaseFileConfidential);
