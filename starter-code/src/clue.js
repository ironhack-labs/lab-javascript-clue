
var MrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};
var DrOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: "26",
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};
var ProfPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: "22",
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};
var MissScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past,",
  age: "31",
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,",
  occupation: "Actor"
};
var MrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: "36",
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};
var MrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: "62",
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player",
};

var Rope = { name: "rope", weight: 10 };
var Knife = { name: "knife", weight: 8 };
var Candlestick = { name: "Candlestick", weight: 2 };
var Dumbbell = { name: "Dumbbell", weight: 30 };
var Poison = { name: "Poison", weight: 2 };
var Axe = { name: "axe", weight: 15 };
var Bat = { name: "bat", weight: 13 };
var Trophy = { name: "trophy", weight: 25 };
var Pistol = { name: "pistol", weight: 20 };

var roomsArray =
  ["DinningRoom",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "BilliardRoom",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "LivingRoom",
    "Observatory",
    "Theater",
    "GuestHouse",
    "Patio"];

// Characters Collection
var charactersArray = [MrGreen, DrOrchid, ProfPlum, MissScarlet, MrsPeacock, MrMustard];

// Rooms' Collection
//var roomsArray = [];

// Weapons Collection
var weaponsArray = [Rope, Knife, Candlestick, Dumbbell, Poison, Axe, Bat, Trophy,Pistol];

//picking card from each stack

function randomSelector(array){ 
  // if (array.length === 0){
  //   return undefined;
  // }
  
  var randomIndex = array[Math.floor(Math.random()*array.length)];
  return randomIndex; 
  }

// create the mystery

function pickMistery(){
  // if (array.length === 0){
  //   return undefined;
  // }

  var misteryEnvelope = [];

  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsArray));
  misteryEnvelope.push(randomSelector(roomsArray));
  
  return misteryEnvelope;
}

//reveal Mistery

function revealMistery(misteryEnvelope){

return (misteryEnvelope[0] + " killed Mr.Boddy using the " + misteryEnvelope[1] + " in the " + misteryEnvelope[2] + "!!!!");

}