

var Characters = [

{
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https:pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
},

{
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
},

{
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https:metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
},

{
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https:metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
},

{
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https:metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
},

 {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https/metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
}
];
var Weapons = [

{
  name: "rope",
  Weight: 10
},

{
  name: "knife",
  Weight: 8 },

{
  name: "candlestick",
  Weight: 2
},

{
  name: "dumbbell",
  Weight: 30,
},

{
  name: "poison",
  Weight: 2
},

{
  name: "axe",
   Weight: 15
 },

{
  name: "bat",
   Weight: 13 },

{
  name: "trophy",
   Weight: 25
 },

{
  name: "pistol",
   Weight: 20
 }
];

var Rooms = [
"Dinning Room",
 "Conservatory",
"Kitchen",
"Study",
"Library",
"Billiard Room",
"Lounge",
"Ballroom",
"Hall",
"Spa",
"Living Room",
"Observatory",
"Theater",
"Guest House",
"Patio"
];

function random_selector(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function pick_mystery() {
  var mysteryEnvelope = [
  random_selector(Characters),
  random_selector(Weapons),
  random_selector(Rooms),
];
  return mysteryEnvelope;
}

function reveal_mystery(mystery) {
  for (var i = 0; i < mystery.length; i++){
    console.log(mystery[i]);
  }
}

var mysteryEnvelope = pick_mystery();
reveal_mystery(mysteryEnvelope);
