//JS | Clue

//Creating the Cards

//Suspects' Cards
var suspects = []; //firstName, lastName, occupation, age, description

suspects.push({ 
  firstName: "Jacob",
  lastName: "Green",
  occupation: "Anglican priest",
  age: "44",
  description: "He has a lot of connections and is always willing to help people out -- for a price."
});
  
  suspects.push({ 
  firstName: "Doctor",
  lastName: "Orchid",
  occupation: "doctor",
  age: "36",
  description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning."
});

suspects.push({ 
  firstName: "Victor",
  lastName: "Plum",
  occupation: "developer",
  age: "27",
  description: "He is a billionaire video game designer who is embracing his new popularity."
});

suspects.push({ 
  firstName: "Kasandra",
  lastName: "Scarlet",
  occupation: "actress",
  age: "35",
  description: "She is an A-list movie star whose past haunts her."
});

suspects.push({ 
  firstName: "Eleanor",
  lastName: "Peacock",
  occupation: "celebrity",
  age: "42",
  description: "She is from a wealthy family and uses her status and money to earn popularity."
});

suspects.push({ 
  firstName: "Jack",
  lastName: "Mustard",
  occupation: "retired",
  age: "65",
  description: "He is a former football player who tries to get by on his former glory."
});

//Weapons' Cards
var weapons = []; // name, painLevel

weapons.push({
    name:"Rope",
    painLevel:2
});

weapons.push({
    name: "Knife",
    painLevel: 5
});

weapons.push({
    name: "Candlestick",
    painLevel: 6
});

weapons.push({
    name: "Dumbbell",
    painLevel: 4
});

weapons.push({
    name: "Poison",
    painLevel: 2
});

weapons.push({
    name: "Axe",
    painLevel: 8
});

weapons.push({
    name: "Bat",
    painLevel: 4
});

weapons.push({
    name: "Trophy",
    painLevel: 9
});

weapons.push({
    name: "Pistol",
    painLevel: 8
});

//Rooms' Cards
var rooms = []; // name

rooms.push({ name: "Dining room"});
rooms.push({ name: "Conservatory"});
rooms.push({ name: "Kitchen"});
rooms.push({ name: "Study"});
rooms.push({ name: "Library"});
rooms.push({ name: "Billiard room"});
rooms.push({ name: "Lounge"});
rooms.push({ name: "Ballroom"});
rooms.push({ name: "Hall"});
rooms.push({ name: "A spa"});
rooms.push({ name: "Living room"});
rooms.push({ name: "Observatory"});
rooms.push({ name: "Theater"});
rooms.push({ name: "Guest house"});
rooms.push({ name: "A patio"});

//Creating and Revealing the Mystery

function getRandomCard(cards) {
  var rand = Math.floor(Math.random()*cards.length);
  return cards[rand];
}

var envelope = {
  suspect: getRandomCard(suspects),
  weapon: getRandomCard(weapons),
  room: getRandomCard(rooms)
};

function revealMystery () {
  var name = envelope.suspect.firstName + " " + envelope.suspect.lastName;
  console.log(name, "", envelope.weapon.name, "", envelope.room.name);
}

function guessSolution() {
  var suspName = prompt("Who do you think did it?");
  var weapon = prompt("What do you think they used as a weapon?");
  var room = prompt("Where do you think that the crime happened?");
  
  if (suspName === (envelope.suspect.firstName + " " + envelope.suspect.lastName) && (weapon === envelope.weapon.name) && 
    (room === envelope.room.name)) {
    alert("Congraaaats, you were right!!");
  } else {
    alert("Sorry, try again... :(")
  }
  revealMystery();
}

guessSolution();



  






