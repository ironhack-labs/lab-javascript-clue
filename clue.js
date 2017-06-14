//Iteration 1 - Creating the cards
var cardTypes={
    suspects:[
      {firstName:"Jacob",lastName:"Green",color:"green"},
      {firstName:"Doctor",lastName:"Orchid",color:"white"},
      {firstName:"Victor",lastName:"Plum",color:"purple"},
      {firstName:"Kasandra",lastName:"Scarlet",color:"red"},
      {firstName:"Eleanor",lastName:"Peacock",color:"blue"},
      {firstName:"Jack",lastName:"Mustard",color:"yellow"}
    ],
    rooms:
    ["Dining room", "Conservatory", "Kitchen", "Study", "Library", "Billiard room",
"Lounge", "Ballroom", "Hall", "A spa", "Living room", "Observatory", "Theater", "Guest house", "A patio"],
    weapons:[
      {name:"Rope",weight:"2 kg",hurtScale:5},
      {name:"Knife",weight:"1 kg",hurtScale:8},
      {name:"Candlestick",weight:"3 kg",hurtScale:6},
      {name:"Dumbbell",weight:"4 kg",hurtScale:8},
      {name:"Poison",weight:"0.5 kg",hurtScale:10},
      {name:"Axe",weight:"3 kg",hurtScale:9},
      {name:"Bat",weight:"2 kg",hurtScale:6},
      {name:"Trophy",weight:"3 kg",hurtScale:8},
      {name:"Pistol",weight:"2.5 kg",hurtScale:10}
    ],
  };

//Iteration 2 - Creating and revealing the mystery
//1. Create a method to randomly select one element from a card stack.
function randomNumber(num){
  return Math.floor(Math.random() * num);
}

function selectCard(obj) {
  return obj[randomNumber(obj.length)];
}

//2. Create another function that calls the method above once for each card stack.
function initGame() {
  var suspect = selectCard(cardTypes.suspects);
  var room = selectCard(cardTypes.rooms);
  var weapon = selectCard(cardTypes.weapons);
  //3. Place the “Case File Confidential” in a virtual envelope. :
  return  { suspect:suspect,room:room,weapon:weapon};
}

var envelope = initGame();

//4. Create a method to reveal the mystery.
function revealMystery(obj) {
  console.log("Mystery revealed: ");
  Object.keys(obj).forEach(function(key) {
    console.log(key+":", obj[key]);
  });
}
revealMystery(envelope);
