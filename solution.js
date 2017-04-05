

var mrGreen = {firstName: "Jacob" , lastName: "Green", occupation: "singer" , age: "35", description: "He has a lot of connections and is always willing to help people out -- for a price.", color: "green"};

var mrsWhite ={firstName: "Doctor" , lastName: "Orchid", occupation: "Biologist" , age: "50", description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning", color: "white"};

var mrPurple = {firstName: "Victor" , lastName: "Plum", occupation: "designer" , age: "22", description: "He is a billionaire video game designer who is embracing his new popularity.", color: "purple"};

var mrsRed = {firstName: "Kasandra" , lastName: "Scarlet", occupation: "movie star" , age: "30", description: "She is an A-list movie star whose past haunts her.", color: "red"};

var mrsBlue = {firstName: "Eleanor" , lastName: "Peacock", occupation: "daughter" , age: "25", description: "She is from a wealthy family and uses her status and money to earn popularity.", color: "blue"};

var mrYellow = {firstName: "Jack" , lastName: "Mustard", occupation: "former footbal player" , age: "40", description: "He is a former football player who tries to get by on his former glory.", color: "yellow"};

var characters = [

  mrGreen, mrsWhite, mrPurple, mrsRed, mrsBlue, mrYellow

  ];

  var rope ={name: "rope", color: "brown" , weight: 1, damage: 40};
  var knife ={name: "knife", color: "white" , weight: 2, damage: 63};
  var candlestick ={name: "candlestick", color: "yellow" , weight: 12, damage: 30};
  var dumbbell ={name: "dumbbell", color: "black" , weight: 15, damage: 50};
  var poison ={name: "poison", color: "green" , weight: 0, damage: 100};
  var axe ={name: "axe", color: "grey" , weight: 10, damage: 75};
  var bat ={name: "bat", color: "brown" , weight: 5, damage: 45};
  var trophy ={name: "trophy", color: "gold" , weight: 10, damage: 48};
  var pistol ={name: "pistol", color: "silver" , weight: 8, damage: 100};

var weapons = [

  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol

  ];


var diningRoom = "Dining Room";
var conservatory = "Conservatory";
var kitchen = "Kitchen";
var study = "Study";
var library = "Library";
var billiardRoom = "Billiard room";
var lounge = "Lounge";
var ballRoom = "Ballroom";
var hall = "Hall";
var aSpa = "A spa";
var livingRoom = "Living room";
var observatory = "Observatory";
var theater = "Theater";
var guestHouse = "Guest house";
var aPatio = "A patio";

var houseRooms = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballRoom,
  hall,
  aSpa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  aPatio
  ];

var cardStacks ={

  charactersStack: characters,
  weaponsStack: weapons,
  houseRoomsStack: houseRooms

};

var envelope= {

};


function selectCard(cardStackArg)
{

  var cardNumber = Math.floor(Math.random()*cardStackArg.length);
  console.log(cardNumber);
  return cardStackArg[cardNumber];

}

function makeEnvelope(cardStacksArg)
{
  var envelopeTemp={};
  envelopeTemp["character"] = selectCard(cardStacksArg.charactersStack);
  envelopeTemp["weapon"] = selectCard(cardStacksArg.weaponsStack);
  envelopeTemp["houseRoom"] = selectCard(cardStacksArg.houseRoomsStack);

  return envelopeTemp;
}

function showEnvelope(envelopeArg){

  console.log(envelopeArg);
}

envelope = makeEnvelope(cardStacks);

showEnvelope(envelope);
