// ---- Characters ----

var mrGreen = {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"};

var drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"}

var profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"}

var missScarlet = {firstName: "Kasandra",
    lastName: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"}

 var mrsPeacock = {firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialite"}

 var mrMustard =
  {firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"}

console.log(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard);

// ---- Characters array ----

var Characters=[
  "Green",
  "Orchid",
  "Plum",
  "Scarlet",
  "Peacock",
  "Mustard",
]

// ---- Rooms array ----

var Rooms=[
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
]

// ---- Weapons array ----

var Weapons=[
  "Rope",
  "Knife",
  "Candlestick",
  "Dumbbell",
  "Poison",
  "Axe",
  "Bat",
  "Trophy",
  "Pistol"
]

function random_selector(array) {
  randInt = Math.floor((Math.random()*array.length))
  return array[randInt];
}

function pick_mistery() {
  // var tableau= [Characters,Rooms,Weapons]  
  var Character = random_selector(Characters);
  var Room = random_selector(Rooms);
  var Weapon = random_selector(Weapons);
  var mystery = [Character,Room,Weapon];
  return mystery;
};


function reveal_mistery(mystery) {
  console.log("the killer is: "+mystery[0])
  console.log("the room is: "+mystery[1])
  console.log("the weapon is: "+mystery[2])
};

mistery_envelope=pick_mistery();
console.log(reveal_mistery(mistery_envelope));