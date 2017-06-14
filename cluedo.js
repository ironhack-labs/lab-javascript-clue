

var weapons = [
  {name:"rope", weight:"2kg", damage: 2},
  {name:"knife", weight:".5kg", damage: 8},
  {name:"candlestick", weight:".3kg", damage: 1},
  {name:"dumbbell", weight:"25kg", damage: 7},
  {name:"poison", weight:".1kg", damage: 10},
  {name:"axe", weight:"5kg", damage: 6},
  {name:"bat", weight:"4kg", damage: 5},
  {name:"trophy", weight:"3kg", damage: 3}
]


var suspects =
[
  {firstName:"Jacob", lastName:"Green", color:"green" },
  {firstName:"Doctor", lastName:"Orchid", color:"white" },
  {firstName:"Victor", lastName:"Plum", color:"purple" },
  {firstName:"Kasandra", lastName:"Scarlet", color:"red" },
  {firstName:"Eleanor", lastName:"Peacock", color:"blue" },
  {firstName:"Jack", lastName:"Mustard", color:"yellow" }
]


var rooms = ["Dining room", "Conservatory", "Kitchen", "Study", "Library", "Billiard room", "Lounge", "Ballroom", "Hall", "A spa", "Living room", "Observatory", "Theater", "Guest house", "A patio"]

var cards = [suspects, weapons, rooms];

function randDeck(deck){
  //deck = cards[Math.floor(Math.random() * cards.length)];
  card = deck[Math.floor(Math.random() * deck.length)];
  return card;
}

function randCard(){
  var envelope = {suspect: randDeck(cards[0]), weapon: randDeck(cards[1]), room: randDeck(cards[2])};
  return envelope;
}

function elBandito(){
  var envelope = randCard();
  console.log("The suspect is: " + envelope.suspect.firstName + " " + envelope.suspect.lastName + " using murder weapon: " + envelope.weapon.name + " in the " + envelope.room)
}

elBandito();

//randCard();
//randDeck();
