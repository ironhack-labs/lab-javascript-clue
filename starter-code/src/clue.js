// Characters

var mrGreen = {
  first_name:  "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
};


var drOrchid = {
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation:   "Scientist"
}

var profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
}

var missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
}


var mrsPeacock ={
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
}


var mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
}

var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];




// Weapons

var weaponsArray = [
  {
    name: "rope",
    weight: 10
   },
   {
    name: "knife",
    weight: 8
   },
   {
    name: "candlestick",
    weight: 2
   },
   {
    name: "dumbbell ",
    weight: 30
   },
   {
    name: "poison",
    weight: 2
   },
   {
    name: "axe",
    weight: 15
   },
   {
    name: "bat",
    weight: 13
   },
   {
    name: "trophy",
    weight: 25
   },
   {
    name: "pistol",
    weight: 20
   }
]



var roomsArray = [
  {name: "Dinning Room"},
  {name: "Conservatory"},
  {name: "Kitchen"},
  {name: "Study"},
  {name: "Library"},
  {name: "Billiard Room"},
  {name: "Lounge"},
  {name: "Ballroom"},
  {name: "Hall"},
  {name: "Spa"},
  {name: "Living Room"},
  {name: "Theater"},
  {name: "Guest House"},
  {name: "Patio"}
]


// function randomSelector(array1, array2, array3){
//   var randomNumber1 = Math.floor(Math.random() * (array1.length + 1));
//   var randomNumber2 = Math.floor(Math.random() * (array2.length + 1));
//   var randomNumber3 = Math.floor(Math.random() * (array3.length + 1));
// }

function randomSelector(array){
  var randomNumber = Math.floor(Math.random() * array.length);
  var res = [];
  res.push(array[randomNumber]);
  // for(var = i; i < array.length; i++){
  //   res.push(array[])
  // }
  // console.log(randomNumber);
  return res;
  
}

// console.log(randomSelector(weaponsArray));

// console.log(randomSelector(charactersArray));
// console.log(randomSelector(weaponsArray));

function　pickMistery(){
var misteryEnvelope = [];
misteryEnvelope.push(randomSelector(charactersArray));
misteryEnvelope.push(randomSelector(weaponsArray));
misteryEnvelope.push(randomSelector(roomsArray));
return　misteryEnvelope;
}

// console.log("pickmistery", pickMistery());

// console.log(pickMistery()[0][0].first_name + " " + pickMistery()[0][0].last_name + "killed Mr.Boddy using the");

function revealMistery(array){
  return array[0][0].first_name + " " + array[0][0].last_name + " killed Mr.Boddy using the " + array[1][0].name + " in the " + array[2][0].name ;
}

console.log(revealMistery(pickMistery()));

// name: rope        ---   weiight: 10
// name: knife       ---   weight: 8
// name: candlestick ---   weight: 2
// name: dumbbell    ---   weight: 30
// name: poison      ---   weight: 2
// name: axe         ---   weight: 15
// name: bat         ---   weight: 13
// name: trophy      ---   weight: 25
// name: pistol      ---   weight: 20

// Rooms
// name: Dinning Room
// name: Conservatory
// name: Kitchen
// name: Study
// name: Library
// name: Billiard Room
// name: Lounge
// name: Ballroom
// name: Hall
// name: Spa
// name: Living Room
// name: Observatory
// name: Theater
// name: Guest House
// name: Patio


// // Characters Collection
// var charactersArray = [];

// // Rooms' Collection
// var roomsArray = [];

// // Weapons Collection
// var weaponsArray = [];
