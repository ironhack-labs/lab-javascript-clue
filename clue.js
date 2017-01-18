var character1 = {
  firstName : "Jacob",
  lastName : "Green",
  color : "green",
  occupation : "private killer",
  age : 34,
  description : "has a lot of connections",
  image : "",
};
var character2 = {
  firstName : "Doctor",
  lastName : "Orchid",
  color : "white",
  occupation : "doctor",
  age : 35,
  description : "Mr. Boddy's daughter",
  image : "",
};
var character3 = {
  firstName : "Victor",
  lastName : "Plum",
  color : "purple",
  occupation : "video game designer",
  age : 36,
  description : "billionaire",
  image : "",
};
var character4 = {
  firstName : "Kasandra",
  lastName : "Scarlet",
  color : "red",
  occupation : "star",
  age : 27,
  description : "haunted by her past",
  image : "",
};
var character5 = {
  firstName : "Eleanor",
  lastName : "Peacock",
  color : "blue",
  occupation : "poser",
  age : 28,
  description : "superficial",
  image : "",
};
var character6 = {
  firstName : "Jack",
  lastName : "Mustard",
  color : "yellow",
  occupation : "football player",
  age : 26,
  description : "glorious",
  image : "",
};

var weapon1 = {
  name : "Rope",
  color : "brown",
  harm : 4,
};
var weapon2 = {
  name : "Knife",
  color : "silver",
  harm : 7,
};
var weapon3 = {
  name : "Candlestick",
  color : "gold",
  harm : 4,
};
var weapon4 = {
  name : "Dumbbell",
  color : "black",
  harm : 7,
};
var weapon5 = {
  name : "Posion",
  color : "colorless",
  harm : 10,
};
var weapon6 = {
  name : "Axe",
  color : "red",
  harm : 8,
};
var weapon7 = {
  name : "Bat",
  color : "brown",
  harm : 6,
};
var weapon8 = {
  name : "Trophy",
  color : "bronce",
  harm : 5,
};
var weapon9 = {
  name : "Pistol",
  color : "black",
  harm : 9,
};

var suspects = [character1,character2,character3,character4,character5,character6];

var rooms = ["Dining room","Conservatory","Kitchen","Study","Library","Billiard room","Lounge","Ballroom", "Hall","Spa","Living room","Observatory","Theater","Guest house","Patio"];

var weapons = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9];

function randomCard(array) {
  return array[Math.floor(Math.random()*array.length)];
   
}
console.log (randomCard(suspects).firstName+" "+ randomCard(suspects).lastName + " assasinated Mr. Boddy with the "+randomCard(weapons).name+ " in the "+ randomCard(rooms)+ ".")
