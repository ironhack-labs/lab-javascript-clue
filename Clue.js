

var cards = [
{ suspects : [
  {firstName: "Jacob", lastName: "Green", occupation: "unknown", age: 30, color: "green",
  description: 'He has a lot of connections and is always willing to help people out -- for a price.'},
  {firstName: "Doctor", lastName: "Orchid", occupation: "scientist", age: 40, color: "white",
  description: 'he was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning.'}
]
},

{weapons: [
  {weaponName: "Rope", weight: 2, color: "beige", damage: 5},
  {weaponName: "Knife", weight: 1, color: "silver", damage: 30, img: 0},
  {weaponName: "Pistol", weight: 4, color: "black", damage: 100}
]
},

{ rooms: [
  {roomName: "Dining room", size: 400, color: "white", secretEntrance: true},
  {roomName: "Library", size: 500, color: "mahogany", secretEntrance: true},
  {roomName: "A spa", size: 200, color: "blue", secretEntrance: false}
]
}
]



var play = confirm("Want to play a game of Cluedo?");
if (play === true) {
    alert("\n Ok lets play the game of Cluedo on the console...\n All you have to do is pick up three cards." );
    getCards();
} else {
    alert("Alright we won\'t proceed.");
}

var card1 = ""
var card2 = ""
var card3 = ""

function getCards () {
console.log("First card is...\n  ");
var card1 = ranCards();
console.log("\n Second is...\n ");
var card2 = ranCards();
console.log("\n ...and finally the third card...\n ");
var card3 = ranCards();
}

// var getImg = (imgArr[cards[cardType].suspects[ranSus]])

function ranCards() {
  var cardType = Math.floor((Math.random() * cards.length));
  var ranSus =  Math.floor((Math.random() * cards[0].suspects.length));
  var ranWeap = Math.floor((Math.random() * cards[1].weapons.length));
  var ranRoom = Math.floor((Math.random() * cards[2].rooms.length));
  if (cardType === 0) {
    console.log(cards[0].suspects[ranSus]);
  } else if (cardType === 1) {
    console.log(cards[1].weapons[ranWeap]);
  } else if (cardType === 2) {
    console.log(cards[2].rooms[ranRoom]);
  }
  }


//   var ranElement = Math.floor((Math.random() * type.length));
//   return type[ranElement];
// }









// The real game of clue has dice but we don't need to do this.
// This function generates a random number 1-12
// function dice() {
//   var dice1 = Math.random() * 6.0091;
//   var dice2 = Math.random() * 7.0037;
//   return Math.ceil(dice1) + Math.floor(dice2);
// }
