// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
frst_name:   Doctor
lst_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: pistol      ---   weight: 20
name: trophy      ---   weight: 25

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/



// ITERATION ONE COUNTING THE CARDS


// rooms list

var diningRoom = {
    name: "diningRoom",
}
var conservatory = {
    name: "Conservatory",
}
var kitchen = {
    name: "Kitchen",
}
var study = {
    name: "Study",
}
var library = {
    name: "library",
}
var billiardRoom = {
    name: "Billiard Room",
}
var diningRoom = {
    name: "diningRoom",
}
var lounge = {
    name: "Lounge",
}
var ballroom = {
    name: "Ballroom",
}
var hall = {
    name: "Hall",
}
var spa = {
    name: "Spa",
}
var livingRoom = {
    name: "Living Room",
}
var observatory = {
    name: "Observatory",
}
var theater = {
    name: "Theater",
}
var guestHouse = {
    name: "Guest House",
}
var patio = {
    name: "Patio",
}

// characters list

var mrGreen = {
    firstName:   "Jacob",
    lastName:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
}

var drOrchid = {
    firstName:   "Doctor",
    lastName:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:   "Scientist"
}


var drOrchid = {
    firstName:   "Doctor",
    lastName:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:   "Scientist"
}



var profPlum = {
    firstName:   "Victor",
    lastName:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
}

var missScarlet = {
    firstName:   "Kasandra",
    lastName:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
}


var mrsPeacock = {
    firstName:   "Eleanor",
    lastName:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
}

var mrMustard = {
    firstName:   "Jack",
    lastName:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football Player"
}

// weapons list

var rope = {
    name: "rope",
    weight: 10
}

var knife = {
    name: "knife",
    weight: 8
}

var candlestick = {
    name: "candlestick",
    weight: 2
}

var dumbbell = {
    name: "dumbbell",
    weight: 30
}

var poison = {
    name: "poison",
    weight: 2
}

var axe = {
    name: "axe",
    weight: 15
}

var bat = {
    name: "bat",
    weight: 13
}

var trophy = {
    name: "trophy",
    weight: 25
}

var pistol = {
    name: "pistol",
    weight: 20
}

// Weapons Collection
var weaponsArray = [];

// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

//push variables to each array
weaponsArray.push(rope,knife,candlestick,dumbbell,poison,axe,bat,pistol,trophy);

roomsArray.push(diningRoom,conservatory,kitchen,study,library,billiardRoom,diningRoom,lounge,ballroom,hall,spa,livingRoom,observatory,theater,guestHouse,patio);

charactersArray.push(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard);


// ITERATION 2 RANDOM randomSelector

function randomSelector(array) {
  return array[Math.floor(Math.random()*(array.length))];
}


// ITERATION 2 RANDOM pickMister
//had to take cardsInfoArray outside of pickMistery and use exact arrays for Jasmine to pass, it use to have parameters array1, array2, array3 and be called with the specific arrays
var cardsInfoArray = [charactersArray, weaponsArray, roomsArray];
var misteryEnvelope = [];
function pickMistery() {
  
  for (var i = 0; i < cardsInfoArray.length; i++) {
    var randomSelectorResult = randomSelector(cardsInfoArray[i]);
    misteryEnvelope.push(randomSelectorResult);
  }
  return misteryEnvelope;

}
pickMistery();

// ITERATION 3 revealMistery
function revealMistery(misteryEnvelope) {
  var misteryRevealed = misteryEnvelope[0].firstName + " " + misteryEnvelope[0].lastName + " killed Mr.Body using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!";
  
  return misteryRevealed;
  
}

revealMistery(misteryEnvelope);


