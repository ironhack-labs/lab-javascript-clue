var cards = [
{ suspects : [
  {name: "Jacob", lastName: "Green", occupation: "unknown", age: 30, color: "green", description: 'He has a lot of connections and is always willing to help people out -- for a price.', img: 14},
  {name: "Professor", lastName: "Plum", occupation: "scientist", age: 40, color: "white", description: 'he was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning.', img: 17}
]
},

{weapons: [
  {name: "Rope", weight: 2, color: "beige", damage: 5, img: 19 },
  {name: "Knife", weight: 1, color: "silver", damage: 30, img: 8},
  {name: "Pistol", weight: 4, color: "black", damage: 100, img: 18}
]
},

{ rooms: [
  {name: "Dining room", size: 400, color: "white", secretEntrance: true, img: 5},
  {name: "Library", size: 500, color: "mahogany", secretEntrance: true, img: 10},
  {name: "Conservatory", size: 200, color: "blue", secretEntrance: false, img: 4 }
]
}
]

var card1 = "";
var card2 = "";
var card3 = "";

function ranCards() {
  var cardType = Math.floor((Math.random() * cards.length));
  var ranSus =  Math.floor((Math.random() * cards[0].suspects.length));
  var ranWeap = Math.floor((Math.random() * cards[1].weapons.length));
  var ranRoom = Math.floor((Math.random() * cards[2].rooms.length));
  if (cardType === 0) {
    return(cards[0].suspects[ranSus]);
  } else if (cardType === 1) {
    return(cards[1].weapons[ranWeap]);
  } else if (cardType === 2) {
    return(cards[2].rooms[ranRoom]);
  }
  }

  function getCards () {

  card1 = ranCards();
  card2 = ranCards();
  card3 = ranCards();
  }

  function printCards () {
    console.log("First card is...\n  ");
    console.log(card1.name);
    console.log("\n Second is...\n ");
    console.log(card2.name);
    console.log("\n ...and finally the third card...\n ");
    console.log(card3.name);
  }


  var play = confirm("Want to play a game of Cluedo?");
  if (play === true) {
      alert("\n Ok lets play the game of Cluedo open the console...\n Let\'s pick up three cards." );
      getCards();
      alert("\n Ok, lets put the cards in the Case File... it\'s confidential")
  } else {
      alert("Alright we won\'t proceed.");
}
  var reveal = confirm("Would you like to reveal the cards in the Case File?");
  if (reveal === true) {
    alert ("\n Alright take a look at the console for the big reveal");
    printCards();
    setTimeout(delayme, 25);
    function delayme() {
    imgLoader();
    }
  } else {
    alert("We will keep the cards in the Case File, it is confidential after all");
  }



// The real game of clue has dice but we don't need to do this.
// This function generates a random number 1-12
// function dice() {
//   var dice1 = Math.random() * 6.0091;
//   var dice2 = Math.random() * 7.0037;
//   return Math.ceil(dice1) + Math.floor(dice2);
// }
