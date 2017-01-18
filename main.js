var game = {
  suspects:[
    {
      name: "Jacob Green",
      color:"Green",
      description: "He has a lot of connections and is always willing to help people out -- for a price"
    },
    {
      name: "Doctor Orchid",
      color:"White",
      description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"
    },
    {
      name: "Victor Plum",
      color:"Purple",
      description: "He is a billionaire video game designer who is embracing his new popularity."
    },
    {
      name: "Kassandra Scarlet",
      color:"Red",
      description: "She is an A-list movie star whose past haunts her."
    },
    {
      name: "Eleanor Peacock",
      color:"Blue",
      description: "She is from a wealthy family and uses her status and money to earn popularity."
    },
    {
      name: "Jack Mustard",
      color:"Yellow",
      description: "He is a former football player who tries to get by on his former glory."
    },
  ],
  weapons:[
    {
      type: "a Rope"
    },
    {
      type: "a Knife"
    },
    {
      type: "a Candlestick"
    },
    {
      type: "a Dumbbell"
    },
    {
      type: "a Poison"
    },
    {
      type: "an Axe"
    },
    {
      type: "a Bat"
    },
    {
      type: "a Trophy"
    },
    {
      type: "a Pistol"
    }
  ],
  rooms:[
    {
      room: "a Dining room"
    },
    {
      room: "a Conservatory"
    },
    {
      room: "a Kitchen"
    },
    {
      room: "a Study"
    },
    {
      room: "a Library"
    },
    {
      room: "a Billiard room"
    },
    {
      room: "a Lounge"
    },
    {
      room: "a Ballroom"
    },
    {
      room: "a Hall"
    },
    {
      room: "a Spa"
    },
    {
      room: "a Living room"
    },
    {
      room: "an Observatory"
    },
    {
      room: "a Theater"
    },
    {
      room: "a Guest House"
    },
    {
      room: "a patio"
    },
  ]
};

function randomSuspect(game){
  var randomNumber = Math.floor((Math.random() * game.suspects.length) + 0);
  return "The murderer is " + game.suspects[randomNumber].name;
}

function randomWeapon(game){
  var randomNumber = Math.floor((Math.random() * game.weapons.length) + 0);
  return "The weapon is " + game.weapons[randomNumber].type;
}

function randomRoom(game){
  var randomNumber = Math.floor((Math.random() * game.rooms.length) + 0);
  return "The room is " + game.rooms[randomNumber].room;
}

var suspect = randomSuspect(game);
var weapon = randomWeapon(game);
var room = randomRoom(game);



console.log(suspect + "\n" + weapon + "\n" + room);
