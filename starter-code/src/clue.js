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
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

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

// Characters Collection

var mrGreen = { 
  first_name: "Jacob", 
  last_name: "Green", 
  color: "green", 
  description: "he has a lot of connections",
  age: 45, 
  imgage: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "entrepreneur", };
var drOrchid = { 
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist",
  };
var profPlum = {  
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer",
};
var missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor",
};
var mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité",
};


  var diningRoom = {name: "Dinning Room"};
  var conservatory = {name: "Conservatory"};
  var kitchen = {name: "Kitchen"};
  var study = {name: "Study"};
  var library = {name: "Library"};
  var billiard = {name: "Billiard Room"};
  var lounge = {name: "Lounge"};
  var ballRoom = {name: "Ballroom"};
  var hall = {name: "Hall"};
  var spa = {name: "Spa"};
  var livingRoom = {name: "Living Room"};
  var observatory = {name: "Observatory"};
  var theater = {name: "Theater"};
  var guestHouse = {name: "Guest House"};
  var patio = {name: "Patio"};



  var rope = {name: "rope", weight: 10};
  var knife = {name: "knife", weight: 8};
  var candleStick = {name: "candlestick", weight: 2};
  var dumbBell = {name: "dumbbell", weight: 30};
  var poison = {name: "poison", weight: 2};
  var axe = {name: "axe", weight: 15};
  var bat = {name: "bat", weight: 13};
  var trophy = {name: "trophy", weight: 25};
  var pistol = {name: "pistol", weight: 20};



      var charactersArray = [   
        
      ];

      // Rooms' Collection
      var roomsArray = [

      ];

      // Weapons Collection
      var weaponsArray = [

      ];


charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock);

roomsArray.push(diningRoom, conservatory, kitchen, study, library, billiard, lounge, ballRoom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);

weaponsArray.push(rope, knife, candleStick, dumbBell, poison, axe, bat, trophy, pistol);

var random = [
  charactersArray,
  weaponsArray,
  roomsArray,
]

function randomSelector(random) {
  var nbRandom = Math.floor(Math.random() * random.length);
  return random[nbRandom]; 
}

function pickMistery (){
  var weaponRandom = randomSelector(weaponsArray);
  var roomRandom = randomSelector(roomsArray);
  var characterRandom = randomSelector(charactersArray);
  var misteryEnvelope = [characterRandom, weaponRandom, roomRandom]; 
  return misteryEnvelope;
  return random[O][1][2];
}

function revealMistery (misteryEnvelope) {
  
  var reveal = misteryEnvelope[0].first_name + " " +  misteryEnvelope[0].last_name + " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!";
  return reveal;
}lab