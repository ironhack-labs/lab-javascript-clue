var MrGreen = {
    firstName: "Jacob",
    lastName:  "Green",
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

var Rope = { name:"rope",Weight: 10};
var Knife = {name:"knife", Weight: 8};
var Candlestick = {name:"Candlestick", Weight: 2};
var Dumbbell = {name:"Dumbbell", Weight: 30};
var Poison = {name:"Poison", Weight: 2};
var Axe = {name:"axe", Weight: 15};
var Bat = {name:"bat",Weight: 13};
var Trophy = {name:"trophy",Weight: 25};
var Pistol = {name:"pistol",Weight: 20};


var Rooms =
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

var characters = [MrGreen, DrOrchid, ProfPlum, MissScarlet, MrsPeacock, MrMustard];
var Weapons = [Rope, Knife, Candlestick, Dumbbell, Poison, Axe, Bat, Trophy, Pistol];


function random_selector(array) {
  var randomSelector = array[Math.floor(Math.random()*array.length)];
  return randomSelector;
}

function pick_mistery() {

  var randomCharacter = random_selector(characters);
  var randomWeapon= random_selector(Weapons);
  var randomRoom= random_selector(Rooms);
return ("The murderer is " + randomCharacter.firstName + " " + randomCharacter.lastName + " aged " + randomCharacter.age + ", used the " + randomWeapon.name + " in the " + randomRoom + ". What a bad guy!!");
}

function reveal_mistery(mistery) {
  console.log(mistery);

}

var mistery_envelope = pick_mistery();
//reveal_mistery(mistery_envelope);
