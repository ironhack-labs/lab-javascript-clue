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

//We created a constructor, which is a function, to easily add "Characters" which are OBJECTS
//in the function parameters we include the "object-keys" that we will be adding everytime we use the constructor
//the operator "this" is used to create a property/key for the object and we assign to it the parameter
function Character(
  first_name,
  last_name,
  color,
  description,
  age,
  image,
  occupation
) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.color = color;
  this.description = description;
  this.age = age;
  this.image = image;
  this.occupation = occupation;
}
//Here we create, as a new variables, every new "Character" Object calling the constructor
//and passing it, as parameters, the VALUES for each property/key.
//This works with the key-value model we have been learning
let mrGreen = new Character(
  "Jacob",
  "Green",
  "green",
  "He has a lot of connections",
  45,
  "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  "Entrepreneur"
);
let drOrchid = new Character(
  "Doctor",
  "Orchid",
  "white",
  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  26,
  "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  "Scientist"
);
let profPlum = new Character(
  "Victor",
  "Plum",
  "purple",
  "Billionare video game designer",
  22,
  "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  "Designer"
);
let missScarlet = new Character(
  "Kasandra",
  "Scarlet",
  "red",
  "She is an A-list movie star with a dark past",
  31,
  "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  "Actor"
);
let mrsPeacock = new Character(
  "Eleanor",
  "Peacock",
  "blue",
  "She is from a wealthy family and uses her status and money to earn popularity",
  36,
  "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  "Socialité"
);
let mrMustard = new Character(
  "Jack",
  "Mustard",
  "yellow",
  "He is a former football player who tries to get by on his former glory",
  62,
  "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  "Retired Football player"
);

//Now we use the newly created variables, which are "Character" objects, to assign them to an array
var charactersArray = [
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
];

// Rooms' Collection
// We assign to a N-length array N number of objects, each of which only contains one key-value pair
var roomsArray = [
  { name: "Dinning Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" }
];

// Weapons Collection
// Similar to the previous array, this time with 2 key-value pairs
var weaponsArray = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 }
];

// We create a function that pseudo-randomly returns one of the arrays elements
// The random number is selected from 0 to array.length-1 index
function randomSelector(array) {
  let random = Math.floor(Math.random() * array.length); //floor(random_between_0-0.9*number_of_elements)
  return array[random];
}

// We apply randomSelector function to each array, giving us a "random" set of character+weapon+room
function pickMistery() {
  let misteryEnvelope = [
    randomSelector(charactersArray),
    randomSelector(weaponsArray),
    randomSelector(roomsArray)
  ];

  return misteryEnvelope;
}
// We return a string accordin to Jasmine's requirements: First name last name + weapon + room
// Remember, we had issues with typos. Also, we use dot notation to access the objects properties
// for each array.
function revealMistery(misteryEnvelope) {
  return `${misteryEnvelope[0].first_name} ${
    misteryEnvelope[0].last_name
  } killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${
    misteryEnvelope[2].name
  }!!!!`;
  return;
}
