var suspects = [
  { name: "Jacob Green", color: "Green", tag: "He has a lot of connections and is always willing to help people out -- for a price." },
  { name: "Doctor Orchid", color: "White", tag: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning." },
  { name: "Victor Plum", color: "Purple", tag: "He is a billionaire video game designer who is embracing his new popularity. " },
  { name: "Kasandra Scarlet", color: "Red", tag: "She is an A-list movie star whose past haunts her. " },
  { name: "Eleanor Peacock", color: "Blue", tag: "She is from a wealthy family and uses her status and money to earn popularity. " },
  { name: "Jack Mustard", color: "Yellow", tag: "He is a former football player who tries to get by on his former glory. " },
]

var rooms = [
  { name: "Dining Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "The Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theatre" },
  { name: "Guest House" },
  { name: "The Patio" }
]

var weapons = [
  { name: "Rope", weight: 1, color: "red", hp: 150},
  { name: "Knife", weight: 1, color: "black", hp: 100},
  { name: "Candlestick", weight: 5, color: "black", hp: 150},
  { name: "Dumbbell", weight: 25, color: "red", hp: 100},
  { name: "Poison", weight: 0, color: "black", hp: 150},
  { name: "Axe", weight: 10, color: "black", hp: 150},
  { name: "Bat", weight: 5, color: "black", hp: 100},
  { name: "Trophy", weight: 6, color: "red", hp: 100},
  { name: "Pistol", weight: 7, color: "black", hp: 100},

]

var theCard = [];

function randomCards() {
  var randomSuspect = Math.floor(Math.random() * suspects.length);
  var randomRoom = Math.floor(Math.random() * rooms.length);
  var randomWeapon = Math.floor(Math.random() * weapons.length);
  theCard.push(randomSuspect, randomRoom, randomWeapon);
}
randomCards();

function revealMystery() {
  randomCards();
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("---------------------------");
  console.log("Your Case File Confidential:");
  console.log("Killer's Name: " + suspects[theCard[0]].name);
  console.log("Killer's Color: " + suspects[theCard[0]].color);
  console.log("Killer's Tagline: " + suspects[theCard[0]].tag);
  console.log("---------------------------");
  console.log("The Weapon:");
  console.log("Killer's Weapon: " + weapons[theCard[1]].name);
  console.log("Weapon's Weight: " + weapons[theCard[1]].weight);
  console.log("Weapon's HP: " + weapons[theCard[1]].hp);
  console.log("---------------------------");
  console.log("The Room:");
  console.log("Murder happened in the: " + rooms[theCard[2]].name);
  console.log("---------------------------");
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("");
}
revealMystery();
