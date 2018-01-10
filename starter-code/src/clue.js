var mrGreen = {
  First_name: "Jacob", 
  last_name: "Green", 
  color: "green", 
  description: "He has a lot of connections", 
  age: "45", 
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", 
  occupation: "Entrepreneur"
}

var drOrchid = {
  frst_name: "Doctor",
  lst_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: "26",
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation: "Scientist"
}

var profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: "22",
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
}

var missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          "31",
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
}

var mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          "36",
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité",
}

var rope = { name: "rope", weight: 10}
var knife = { name: "knife", weight: 8}
var candlestick = { name: "candlestick", weight: 2 }
var dumbbell = { name: "dumbbell", weight: 30 }
var poison = { name: "poison", weight: 2 }
var axe = { name: "axe", weight: 15 }
var bat = { name: "bat", weight: 13 }
var trophy = { name: "trophy", weight: 25 }
var pistol = { name: "pistol", weight: 20 }

var dinningRoom = { name: "Dinning Room" }
var conservatory = { name: "Conservatory"}
var kitchen = { name: "Kitchen" }
var study = { name: "Study" }
var library = { name: "Library" }
var billiardRoom = { name: "Billiard Room" }
var lounge = { name: "Lounge" }
var ballroom = { name: "Ballroom" }
var hall = { name: "Hall" }
var spa = { name: "Spa" }
var livingRoom = { name: "Living Room"}
var observatory = { name: "Observatory"}
var theater = { name: "Theater"}
var guestHouse = { name: "Guest House" }
var patio = { name: "Patio" }

var roomsArray = [];

var weaponsArray = [];

var charactersArray = [];

charactersArray.push(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock);
weaponsArray.push(rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol);
roomsArray.push(dinningRoom,conservatory,kitchen,study,library,billiardRoom,lounge,ballroom,hall,spa,livingRoom,observatory,theater,guestHouse,patio);

//console.log(charactersArray,weaponsArray,roomsArray);

function randomSelector(arr) {
  var suffle = Math.floor(Math.random()*arr.length)
  return arr[suffle];
}

function pickMistery() {
  var randomCard = []
  var cartarweapon = randomSelector(weaponsArray)
  var cartaroom = randomSelector(roomsArray)
  var cartacharacter = randomSelector(charactersArray)
  randomCard.push(cartacharacter, cartaroom, cartarweapon)
  return randomCard
}

console.log(pickMistery());
pickMistery();