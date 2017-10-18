
var suspects = [

  { firstName: "Jacob",
  lastName:"Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"},

  { firstName: "Doctor",
  lastName:"Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"},

  { firstName: "Victor",
  lastName:"Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"},

   { firstName: "Kasandra",
   lastName:"Scarlet",
   color: "red",
   description: "She is an A-list movie star with a dark past",
   age: 31,image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
   occupation: "Actor"},

  { firstName: "Eleanor",
  lastName:"Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"},

  { firstName: "Jack",
  lastName:"Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"},

]

var weapons = [
  {name: "Rope",
   weight: 10},

  {name: "Knife",
   weight: 8},

  {name: "Candlestick",
   weight: 2},

  {name: "Dumbbell",
   weight: 30},

  {name: "Poison",
   weight: 2},

  {name: "Axe",
   weight: 15},

  {name: "Rope",
   weight: 10},

  {name: "Bat",
   weight: 13},

  {name: "Trophy",
   weight: 25},

  {name: "Pistol",
   weight: 20},
  ];

var rooms= ["Dinning Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];


function random_selector(array) {
 var random = Math.floor(Math.random()* array.length) ;
 return  (array[random]) ;
}


function pick_mistery() {
var caseFileConfidential = [random_selector(suspects), random_selector(weapons), random_selector(rooms)];
return caseFileConfidential;
}


pick_mistery();
