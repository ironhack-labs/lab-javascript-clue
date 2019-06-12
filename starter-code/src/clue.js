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
first_name:   Doctor
last_name:    Orchid
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
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];

let mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
  };
  
  let drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
  };
  
  let profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
  };
  
  let missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
  };
  
  let mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
  };
  
  let mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
  };
  
let rope = {name:"rope", weight: 10};
let knife = {name:"knife",weight: 8};
let candlestick = {name:"candlestick",weight: 2};
let dumbbell = {name:"dumbbell",weight: 30};
let poison = {name:"dumbbell",weight: 2};
let axe = {name:"axe",weight: 15};
let bat = {name:"bat",weight: 13};
let trophy = {name:"trophy",weight: 25};
let pistol = {name:"pistol",weight: 20};
  
  let Room1 = {name:"Dinning Room"};
  let Room2 = {name:"Conservatory"};
  let Room3 = {name:"Kitchen"};
  let Room4 = {name:"Study"};
  let Room5 = {name:"Library"};
  let Room6 = {name:"Billiard Room"};
  let Room7 = {name:"Lounge"};
  let Room8 = {name:"Ballroom"};
  let Room9 = {name:"Hall"};
  let Room10 = {name:"Spa"};
  let Room11 = {name:"Living Room"};
  let Room12 = {name:"Observatory"};
  let Room13 = {name:"Theater"};
  let Room14 = {name:"Guest House"};
  let Room15 = {name:"Patio"};
  
  var charactersArray = [];
  
  var roomsArray = [];
  
  var weaponsArray = [];
  
  //push documents
  charactersArray.push(mrGreen);
  charactersArray.push(drOrchid);
  charactersArray.push(profPlum);
  charactersArray.push(missScarlet);
  charactersArray.push(mrsPeacock);
  charactersArray.push(mrMustard);
  
  roomsArray.push(Room1);
  roomsArray.push(Room2);
  roomsArray.push(Room3);
  roomsArray.push(Room4);
  roomsArray.push(Room5);
  roomsArray.push(Room6);
  roomsArray.push(Room7);
  roomsArray.push(Room8);
  roomsArray.push(Room9);
  roomsArray.push(Room10);
  roomsArray.push(Room11);
  roomsArray.push(Room12);
  roomsArray.push(Room13);
  roomsArray.push(Room14);
  roomsArray.push(Room15);
  
  weaponsArray.push(rope);
  weaponsArray.push(knife);
  weaponsArray.push(candlestick);
  weaponsArray.push(dumbbell);
  weaponsArray.push(poison);
  weaponsArray.push(axe);
  weaponsArray.push(bat);
  weaponsArray.push(trophy);
  weaponsArray.push(pistol);
  
  function randomSelector(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }
  
  function pickMistery(){
    let mistery = [];
    mistery.push(randomSelector(charactersArray));
    mistery.push(randomSelector(weaponsArray));
    mistery.push(randomSelector(roomsArray));
    return mistery;
  } 
  
  let misteryEnvelope = pickMistery();
  
  function revealMistery(misteryEnvelope){
    return `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`;
  }
  