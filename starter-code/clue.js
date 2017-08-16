var Characters  = {
  MrGreen:  {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
},
 DrOrchid : {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
},
ProfPlum : {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
},
  MissScarlet : {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
},
  MrsPeacock:{
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg ",
  occupation: "Socialité"
},
 MrMustard:{
  firstName: "Jack",
  lastNme:"Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg ",
  occupation: "Retired Football player"
 }
}
var weapons = {
    Rope :{ Weight: 10},
Knife: {Weight: 8},
Candlestick:  {Weight: 2},
Dumbbell:{Weight: 30},
Poison :{ Weight: 2},
Axe:{Weight: 15},
Bat:{Weight: 13},
Trophy:{Weight: 25},
Pistol:{Weight: 20}
};

var rooms = ['Dinning Room', "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall, Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio" ];



function random_selector(max) {

 var p=Math.floor( Math.random() * (max) + 1);
return p;


}

var card=[];
function pick_mistery() {

  card[0]=Object.keys(Characters)[random_selector(Object.keys(Characters).length)];
  card[1]=Object.keys(weapons)[random_selector(Object.keys(weapons).length)];
  card[2]=rooms[random_selector(rooms.length)];

}

function reveal_mistery(mistery) {
console.log("El personaje es\t" + card[0] + "con el arma\t" + card[1] + "y esta en la habitacion\t" + card[2]);

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
