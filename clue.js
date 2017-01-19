// suspects (6)
var mrGreen = {
  name: "Jacob Green",
  occupation: "Reverend",
  age: 30,
  description: "green"
}
var drOrchard = {
  name: "Doctor Orchard",
  occupation: "Doctor",
  age: 31,
  description: "white"
}
var profPlum = {
  name: "Paul Plum",
  occupation: "Professor",
  age: 32,
  description: "purple"
}
var msScarlet = {
  name: "Sally Scarlet",
  occupation: "Beauty Queen",
  age: 23,
  description: "red",
}
var msPeacock = {
  name: "Miss",
  lastName: "Peacock",
  occupation: "Beauty Queen",
  age: 23,
  description: "red",
}
var colMustard = {
  name: "Colonel",
  lastName: "Mustard",
  occupation: "Colonel",
  age: 29,
  description: "yellow"
}

// weapons (9)

var rope = {
  name: "rope",
  weight: 3,
  hurtCount: 7,
  color: "tan"
}
var knife = {
  name: "knife",
  weight: 4,
  hurtCount: 10,
  color: "silver"
}
var candlestick = {
  name: "candlestick",
  weight: 5,
  hurtCount: 8,
  color: "bronze"
}
var dumbell = {
  name: "dumbell",
  weight: 7,
  hurtCount: 9,
  color: "black"
}
var poison = {
  name: "poison",
  weight: 1,
  hurtCount: 10,
  color: "blue"
}
var axe = {
  name: "axe",
  weight: 8,
  hurtCount: 9,
  color: "tan"
}
var bat = {
  name: "bat",
  weight: 6,
  hurtCount: 7,
  color: "white",
}
var trophy = {
  name: "trophy",
  weight: 4,
  hurtCount: 4,
  color: "gold",
}
var pistol = {
  name: "pistol",
  weight: 5,
  hurtCount: 10,
  color: "black",
}

// rooms (11)

var diningRoom = {
  name: "Dining Room"
}
var conservatory = {
  name: "Conservatory"
}
var kitchen = {
  name: "kitchen"
}
var study = {
  name: "Study"
}
var library = {
  name: "Library"
}
var billardRoom = {
  name: "Billard Room"
}
var lounge = {
  name: "Lounge"
}
var ballroom = {
  name: "Ballroom"
}
var hall = {
  name: "Hall"
}
var spa = {
  name: "Spa"
}
var livingRoom = {
  name: "Living Room"
}

var suspects = [mrGreen, drOrchard, profPlum, msScarlet, msPeacock, colMustard];
var weapons = [rope, knife, candlestick, dumbell, poison, axe, bat, trophy, pistol];
var rooms = [diningRoom, conservatory, kitchen, study, library, billardRoom, lounge, ballroom, hall, spa, livingRoom];

var murder = [suspects, weapons, rooms];



function envelope(array) {
  var killerCombo = [];
  array.forEach(function(arr) {
    var card = arr[Math.floor(Math.random() * arr.length)];
    killerCombo.push(card.name);
  })
  console.log('The murderer was ' + killerCombo[0] + ' with the ' + killerCombo[1] + ' in the ' + killerCombo[2] + "!");
}

envelope(murder);
