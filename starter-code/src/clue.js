// Characters






// Weapons

n

// Rooms



// Characters Collection
var charactersArray = [
  {
    name: "mrGreen",
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
  }
,
  {
  name: "drOrchid",
  frst_name:   "Doctor",
  lst_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist"
  }
,
  {
  name: "profPlum",
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
  }
,
  {
  name: "missScarlet",
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", 
  occupation:   "Actor"
 }
,
 {
 name: "mrsPeacock",
 first_name:   "Eleanor",
 last_name:    "Peacock",
 color:        "blue",
 description:  "She is from a wealthy family and uses her status and money to earn popularity",
 age:          36,
 image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
 occupation:   "Socialité"
}
,
{
name: "mrMustard",
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description: "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"
}
];

// Rooms' Collection
var roomsArray = [
{name: rope, weight: 10},
{name: knife, weight: 8},
{name: candlestick, weight: 2},
{name: dumbbell, weight: 30},
{name: poison, weight: 2},
{name: axe, weight: 15},
{name: bat, weight: 13},
{name: trophy, weight: 25},
{name: pistol, weight: 20},
];

// Weapons Collection
var weaponsArray = [
{name: Dinning_Room},
{name: Conservatory},
{name: Kitchen},
{name: Study},
{name: Library},
{name: Billiard_Room},
{name: Lounge},
{name: Ballroom},
{name: Hall},
{name: Spa},
{name: Living_Room},
{name: Observatory},
{name: Theater},
{name: Guest_House},
{name: Patio},
];

function randomSelector(array){
  var position = Math.floor((Math.random()*array.length));
   return console.log(array[position]);
  }

function pickMistery(array1, array2, array3) {
  ramdomSelector(array1);
  ramdomSelector(array2);
  ramdomSelector(array3);
return console.log("El asesino es "+array1+" con "+array2+" en "+array3);
}

pickMistery(charactersArray, weaponsArray, roomsArray);