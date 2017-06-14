Brad Le and Stephanos Theodotou

var mrGreen = {
  color: "green",
  firstname: "Jacob",
  lastname: "Green",
  occupation: "consultant",
  age: 35,
  description: "He has a lot of connections and is always willing to help people out -- for a price."
};

var drOrchid = {
  color: "white",
  firstname: "Mary",
  lastname: "Orchid",
  occupation: "Doctor",
  age: 55,
  description: "She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning."
};

var mrPlum = {
  color: "purple",
  firstname: "Victor",
  lastname: "Plum",
  occupation: "video game designer",
  age: 21,
  description: "He is a billionaire video game designer who is embracing his new popularity."
};

var mrsScarlet = {
  color: "red",
  firstname: "Kasandra",
  lastname: "Scarlet",
  occupation: "Actress",
  age: 26,
  description: "A-list movie star whose past haunts her."
};

var mrsPeacock = {
  color: "blue",
  firstname: "Eleanor",
  lastname: "Peacock",
  occupation: "trust fund baby",
  age: 18,
  description: "She is from a wealthy family and uses her status and money to earn popularity."
};

var mrMustard = {
  color: "yellow",
  firstname: "Jack",
  lastname: "Mustard",
  occupation: "Athlete",
  age: 60,
  description: "He is a former football player who tries to get by on his former glory."
};

var suspects = [mrGreen,drOrchid,mrPlum,mrsScarlet,mrsPeacock,mrMustard];

var weapons = [
{type: "Rope", weight: 30, foundIn: "Conservatory"},
{type: "Knife", weight: 12, foundIn: "Kitchen" },
{type: "Candlestick", weight: 20, foundIn: "Ballroom" },
{type: "Dumbbell", weight: 45, foundIn: "Spa" },
{type: "Poison", weight: 5, foundIn: "Kitchen" },
{type: "Axe", weight: 60, foundIn: "Conservatory" },
{type: "Bat", weight: 30, foundIn: "Study" },
{type: "Trophy", weight: 40, foundIn: "Library" },
{type: "Pistol", weight: 25, foundIn: "Hall" }
 ];

 var rooms = [
{space: "Dining room", frequentedBy:[drOrchid]},
{space: "Conservatory", frequentedBy:[mrsScarlet]},
{space: "Kitchen", frequentedBy:[mrsScarlet]},
{space: "Study", frequentedBy:[mrGreen]},
{space: "Library", frequentedBy:[mrsPeacock]},
{space: "Billiard room", frequentedBy:[mrsPeacock]},
{space: "Lounge", frequentedBy:[mrsPeacock]},
{space: "Ballroom", frequentedBy:[drOrchid, mrPlum]},
{space: "Hall", frequentedBy: [mrGreen]},
{space: "Spa", frequentedBy: [mrsScarlet,mrsPeacock,drOrchid]},
{space: "Living room", frequentedBy: [mrGreen, mrsScarlet]},
{space: "Observatory", frequentedBy: [mrGreen, mrMustard]},
{space: "Theater", frequentedBy: [drOrchid, mrsPeacock]},
{space: "Guest house", frequentedBy:[mrPlum]},
{space: "Patio", frequentedBy:[mrPlum, mrMustard]}
   ];

 // select one element
var randomiser = function (array) {
  return Math.floor(Math.random()*array.length);
};

var cardstacks = [suspects, weapons, rooms];
var confidentialenvelope =[];

for(i = 0; i < cardstacks.length; i++){
  var pick = randomiser(cardstacks[i]);
  confidentialenvelope.push(cardstacks[i][pick]);
}

/*console.log(confidentialenvelope);*/

var nameCorrect=0;
var weaponCorrect=0;
var roomCorrect=0;

function giveMeName(){
  var answer = prompt("Who do you think committed a dreadful murder tonight? (Jacob, Mary, Victor,Kasandra, Eleanor, Jack):");
  if(answer === confidentialenvelope[0].firstname ){
    alert("Well done, you have guessed correctly!");
    nameCorrect++;
  }else{
    console.log("\n");
    console.log("no!");
  }
}
function giveMeWeapon(){
  var answer = prompt("What weapon was used for the dreadful murder tonight? (Rope, Knife, Candlestick,Dumbbell,Poison,Axe,Bat,Trophy,Pistol):");
  if(answer === confidentialenvelope[1].type ){
    alert("Well done, you have guessed correctly!");
    weaponCorrect++;
  }else{
    console.log("\n");
    console.log("no!");
  }
}
function giveMeRoom(){
  var answer = prompt("Where do you think the dreadful murder was committed? (Dining room, Conservatory,Kitchen,Study,Library,Billiard,Lounge,Ballroom,Hall,Spa,Living room,Observatory,Theater,Guest House, Patio):");
  if(answer === confidentialenvelope[2].space ){
    alert("Well done, you have guessed correctly!");
    roomCorrect++;
  }else{
    console.log("\n");
    console.log("no!");
  }
}

while(nameCorrect===0){
  giveMeName();
}
while(weaponCorrect===0){
  giveMeWeapon();
}
while(roomCorrect===0){
  giveMeRoom();
}

alert("Congratulations! You have solved the mystery it was " + confidentialenvelope[0].firstname + " with a " + confidentialenvelope[1].type + " in " + confidentialenvelope[2].space);
