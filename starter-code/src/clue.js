// Characters

var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur",
}

var drOrchid = {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
occupation:   "Scientist",
}

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer",
}

var missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor",
}

var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité",
}

var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player",
fullName: function () {
  return this.first_name+" "+this.last_name
}
}


// Weapons


rope = {name: "rope", weight: 10}
knife = {name: "knife"       , weight: 8}
candlestick = {name: "candlestick" , weight: 2}
dumbbell = {name: "dumbbell"    , weight: 30}
poison = {name: "poison"      , weight: 2}
axe = {name: "axe"         , weight: 15}
bat = {name: "bat"         , weight: 13}
trophy = {name: "trophy"      , weight: 25}
pistol = {name: "pistol"      , weight: 20}

// Rooms

diningRoom = {name: "Dinning Room"} 
conservatory = {name: "Conservatory"}
kitchen = {name: "Kitchen"}
study = {name: "Study"}
library = {name: "Library"}
billiardRoom = {name: "Billiard Room"}
lounge = {name: "Lounge"}
ballroom = {name: "Ballroom"}
hall = {name: "Hall"}
spa = {name: "Spa"}
livingRoom = {name: "Living Room"}
observatory = {name: "Observatory"}
theater = {name: "Theater"}
guestHouse = {name: "Guest House"}
pation = {name: "Patio"}


// Characters Collection
var charactersArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard,];

// Rooms' Collection
var roomsArray = [diningRoom,conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, pation];

// // Weapons Collection
var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

var fullArray = [charactersArray,weaponsArray,roomsArray]

function randomSelector (array) {
  var randomCard;
  randomCard = Math.floor((Math.random() * array.length))
  return array[randomCard]
}

function pickMistery (array, callFunction) {
  var misteryEnvelope = []
  for (var i = 0; i<array.length; i++) {
    misteryEnvelope.push(callFunction(array[i]))
}
return misteryEnvelope
}

function revealMistery (array, callFunction1, callFunction2) {
  var solution = []
  solution.push(callFunction2(array,callFunction1))
  return solution[0][0].first_name+" "+solution[0][0].last_name+" killed Mr.Boddy using "+solution[0][1].name+" in the "+solution[0][2].name
}

