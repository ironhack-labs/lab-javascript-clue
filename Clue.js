var mr_green = {
  firstName: "Jacob",
  lastName: "Green",
  occupation: "Mobster",
  age: 50,
  description: "He has a lot of connections and is always willing to help people out -- for a price.",
  color: "Green"
}

var ms_white = {
  firstName: "Doctor",
  lastName: "Orchid",
  ocuppation: "Biologist",
  age: 30,
  description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning",
  color: "White"
}

var mr_purple = {
  firstName: "Victor",
  lastName: "Plum",
  occupation: "Video Game Designer",
  age: 40,
  description:"He is a billionaire video game designer who is embracing his new popularity.",
  color: "Purple"
}
var ms_red = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  occupation: "Movie Star",
  age: 35,
  description:"She is an A-list movie star whose past haunts her.",
  color: "Red"
  }

var ms_blue = {
  firstName:"Eleanor",
  lastName:"Peacock",
  occupation: "Unemployed",
  age: 60,
  description:"She is from a wealthy family and uses her status and money to earn popularity.",
  color: "Blue"
}

var mr_yellow ={
  firstName:"Jack",
  lastName:"Mustard",
  occupation:"Football Player",
  age: 50,
  description: "He is a former football player who tries to get by on his former glory.",
  color: "Yellow"
}

var suspects =[mr_green, ms_white, mr_purple, ms_red, ms_blue, mr_yellow];

var rope = { name: "Rope" };
var knife = { name: "Knife" };
var candlestick = { name: "Candlestick" };
var dumbbell = { name: "Dumbbell" };
var poison = { name: "Poison" };
var axe = { name: "Axe" };
var bat = { name: "Bat" };
var trophy = { name: "Trophy" };
var pistol = { name: "Pistol" };

var weapons = [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];

var diningRoom = { name: "Dinning Room" };
var conservatory = { name: "Conservatory" };
var kitchen = { name: "Kitchen" };
var study = { name: "Study" };
var library = { name: "Library" };
var billiardRoom = { name: "Billiard Room" };
var lounge = { name: "Lounge" };
var ballroom = { name: "Ballroom" };
var hall = { name: "Hall" };
var spa = { name: "Spa" };
var livingRoom = { name: "Living Room" };
var observatory = { name: "Observatory" };
var theater = { name: "Theater" };
var guestHouse = { name: "Guest House" };
var patio = { name: "Patio" };

var rooms = [diningRoom,conservatory,kitchen,study,library,billiardRoom,lounge,ballroom,hall,spa,livingRoom,observatory,theater,guestHouse,patio];



function randomNumGen(deck) {
  var randomNum = Math.floor(Math.random() * deck.length);
  return(deck[randomNum]);
}

function createMyst(){
  var murderer = randomNumGen(suspects);
  var murderWeapon = randomNumGen(weapons);
  var crimeScene = randomNumGen(rooms);

  var caseFile = [];
  caseFile.push(murderer,murderWeapon,crimeScene);
  return caseFile
}
function reveal_mystery(mystery) {
  console.log(mystery[0].first_name + " " + mystery[0].last_name + " killed Mr.Boddy using the " + mystery[1].name + " in the " + mystery[2].name + "!!!!");
}

var mistery_envelope = createMyst();
reveal_mistery(mistery_envelope);


console.log(mystery_envelope)
