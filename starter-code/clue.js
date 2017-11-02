//---- Characters ----
 var mrGreen = {
   firstName: "Jacob",
   lastName: "Green",
   color: "green",
   description: "He has a lot of connections",
   age: 45,
   image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
   occupation: "Entrepreneur"
 }
 var drOrchid = {
   firstName: "Doctor",
   lastName: "Orchid",
   color: "white",
   description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
   age: 26,
   image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
   occupation: "Scientist"
 }
 var profPlum = {
   firstName: "Victor",
   lasName: "Plum",
   color: "purple",
   description: "Billionare video game designer",
   age: 22,
   image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
   occupation: "Designer"
 }
 var missScarlet = {
   firstName: "Kasandra",
   lastName: "Scarlet",
   color: "red",
   description: "She is an A-list movie star with a dark past",
   age: 31,
   image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
   occupation: "Actor"
 }

 var mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
  }

  var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
 }

 var suspects = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// ---- Weapons ----
rope = {
  name: "Rope",
  weight: 10,
  image: ""
}

knife = {
  name: "Knife",
  weight: 8,
  image: "http://images.clipartpanda.com/knife-clip-art-hunting-knife.svg"
}

candleStick = {
  name: "Candle stick",
  weight: 2,
  image: ""
}

dumbbell = {
  name: "Dumbbell",
  weight: 30,
  image: ""
}

poison = {
  name: "Poison",
  weight: 2,
  image: ""
}

axe = {
  name: "Axe",
  weight: 15,
  image: ""
}

bat = {
  name: "Bat",
  weight: 13,
  image: ""
}

trophy = {
  name: "Trophy",
  weight: 25,
  image: ""
}

pistol = {
  name: "Pistol",
  weight: 20,
  image: ""
}

var weapons = [rope, knife, candleStick, dumbbell, poison, axe, bat, trophy, pistol];


//---- Rooms ----
var rooms = [
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
  var i = Math.floor(Math.random() * array.length);  
  return array[i]
}

function pick_mistery() {
  var mistery = [random_selector(suspects), random_selector(weapons), random_selector(rooms)];
  return mistery;
}

function reveal_mistery(mistery) {
  console.log("Suspect: " + mistery[0].firstName + "\n\rWeapon: " + mistery[1].name + "\n\rRoom: " + mistery[2]);
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);