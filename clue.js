// Pair Programming DJAFAR and ARNAU

var suspect1 = { name: "Jacob Green", color: "green", clue: "He has a lot of connections and is always willing to help people out -- for a price" };
var suspect2 = { name: "Doctor Orchid", color: "white", clue: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning (Wonder what happened with Mrs. White?)" };
var suspect3 = { name: "Victor Plum", color: "purple", clue: "He is a billionaire video game designer who is embracing his new popularity." };
var suspect4 = { name: "Kasandra Scarlet", color: "red", clue: "She is an A-list movie star whose past haunts her" };
var suspect5 = { name: "Eleanor Peacock", color: "blue", clue: "She is from a wealthy family and uses her status and money to earn popularity." };
var suspect6 = { name: "Jack Mustard", color: "yellow", clue: "He is a former football player who tries to get by on his former glory." };

var suspects = [suspect1,suspect2,suspect3,suspect4,suspect5,suspect6];


var roomOne= {name:"Dining room"};
var roomTwo= {name:"Conservatory"};
var roomThree= {name:"Kitchen"};
var roomFour= {name: "Study"};
var roomFive= {name: "Library"};
var roomSix= {name: "Billiard room"};
var roomSeven= {name: "Lounge"};
var roomEight= {name: "Ballroom"};
var roomNine= {name: "Hall"};
var roomTen= {name: "A spa"};
var roomEleven= {name: "Living room"};
var roomTwelve={name: "Observatory"};
var roomThirteen= {name: "Theater"};
var roomFourteen= {name: "Guest house"};
var roomFifteen= {name: "A patio"};

var rooms = [ roomOne, roomTwo, roomThree, roomFour, roomSix, roomSeven, roomEight, roomNine, roomTen, roomEleven, roomTwelve, roomThirteen, roomFourteen, roomFifteen];


var weapon1 = {name: "Rope", weight: 1 , damage: 50};
var weapon2 = {name: "Knife", weight:1 , damage: 100};
var weapon3 = {name: "Candlestick", weight: 0.4 , damage: 10};
var weapon4 = {name: "Dumbbell", weight: 5 , damage: 45};
var weapon5 = {name: "Poison", weight: 0.1, damage: 100};
var weapon6 = {name: "Axe", weight: 4 , damage: 100};
var weapon7 = {name: "Bat", weight: 3, damage: 80};
var weapon8 = {name: "Trophy", weight: 3 , damage: 35};
var weapon9 = {name: "Pistol", weight: 4, damage: 200};

var weapons = [weapon1,weapon2,weapon3,weapon4,weapon5,weapon6,weapon7,weapon8,weapon9];


  //console.log(player1);

pickingCard = [suspects, rooms, weapons];
var pickedCards = [];

var getRandom = function (array) {
  return Math.floor(Math.random() * array.length);
};

function getCards(){

  pickingCard.forEach(function(element) {
      var result = getRandom(element);
      pickedCards.push(element[result].name);
  });

}

getCards();
var caseFileConfidential = pickedCards;

console.log(caseFileConfidential);
