function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get a random card which hasn't been used before
// finally not used 
function getRandomCard(){
  var indexSuspect =  getRandomIntInclusive(0,suspects.length-1);
  var indexWeapon = getRandomIntInclusive(0,weapons.length-1);
  var indexRoom = getRandomIntInclusive(0,rooms.length-1);
  
  var suspect = suspects[indexSuspect];
  var weapon = weapons[indexWeapon];
  var room = rooms[indexRoom];
  var card = {suspect: suspects[indexSuspect],weapon: weapons[indexWeapon],room: rooms[indexRoom]};   
  if(cards.indexOf(card)=== -1){
    return card; 
  }
  else{
    getRandomCard();
  }
  
}


var suspects = [
  {name: "Jacob ",lastName : "Green",occupation: "Connector", age: "Unknown",color:"green" },{name: "Doctor ",lastName: "Orchid",occupation: "biologist",age:"Unknown",color:"white" },{name: "Victor",lastName: "Plum", occupation: "videogame designer",age:"Unknown",color:"purple" },{name: "Kasandra",lastName: "Scarlet",occupation:"movie star",age:"Unknown",color:"red" },{name: "Ekeabir",lastName: "Peacock",occupation:"wealthy girl",age:"Unknown",color:"blue" },{name: "Jack",lastName:"Mustard",occupation:"football player",age:"Unknown",color:"yellow" }
  ];

var weapons = ["rope","knife","candlestick","dumbbell","poison","axe","bat","trophie","pistol"];

var rooms = ["dining room","conservatory","kitchen","study","library","billiard room","lounge","ballroom","hall","a spa","living room","observatory","theater","guest house","a patio"];

var cards = [];


for(var i = 0;i<suspects.length;i++){
  var indexWeapon = getRandomIntInclusive(0,weapons.length-1);
  var indexRoom = getRandomIntInclusive(0,rooms.length-1);
  var card = {suspect: suspects[i],weapon: weapons[indexWeapon],room: rooms[indexRoom]};
  cards.push(card);
}

var randomCard = getRandomCard();


for(var i = 0;i<cards.length;i++){
  console.log(cards[i]);
}


