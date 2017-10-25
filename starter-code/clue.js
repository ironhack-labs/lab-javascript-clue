var clue = {
  characters : [
    {
  cardname: "Jacob Green",
  firstname: "Jacob",
  lastname:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur",
},
  {
  cardname: "Doctor Orchid",
  firstname: "Doctor",
  lastname: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr Boddy",
  age: "26",
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist",
},
{
  cardname: "Victor Plum",
  firstname: "Victor",
  lastname: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: "22",
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer",
},
{
  cardname: "Kasandra Scarlet",
  firstname: "Kasandra",
  lastname: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: "31",
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
},
{
  cardname: "Eleonor Peacock",
  firstname: "Eleanor",
  lastname: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: "36",
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité",
},
{
  cardname: "Colonel Mustard",
  firstname: "Jack",
  lastname: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: "62",
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player",
}
],
Weapons : [
  { name : "Rope" , weight: 10 },
  { name : "Knife" , weight: 8 },
  { name : "Candlestick" , weight: 2 },
  { name : "Dumbbell" , weight: 30 },
  { name : "Poison" , weight: 2 },
  { name : "Axe" , weight: 15 },
  { name : "Bat" , weight: 13 },
  { name : "Trophy" , weight: 25 },
  { name : "Pistol" , weight: 20 },
],

Rooms : [
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
  "Patio",
]
};

function random_selector(array) {
  var randomCharacter = clue.characters[parseInt(Math.random()*6+0)].cardname;
  var randomWeapon = clue.Weapons[parseInt(Math.random()*9+0)].name;
  var randomRooms = clue.Rooms[parseInt(Math.random()*15+0)];
  return "The culprit is " + randomCharacter + " with the " + randomWeapon + " in the " + randomRooms;
}

function revealTheMystery (array) {
console.log(random_selector(array));
}

revealTheMystery(clue);
