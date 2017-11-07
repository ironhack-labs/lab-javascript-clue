/*
---- Characters ----
  Mr Green
  first name: Jacob
  last name:  Green
  color: green
  description: He has a lot of connections
  age: 45
  image: https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
  occupation: Entrepreneur
  Dr Orchid
  first name: Doctor
  last name: Orchid
  color: white
  description: PhD in plant toxicology. Adopted daughter of Mr. Boddy
  age: 26
  image: http://www.radiotimes.com/uploads/images/Original/111967.jpg
  occupation: Scientist
  Prof Plum
  first name: Victor
  last name: Plum
  color: purple
  description: Billionare video game designer
  age: 22
  image: https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
  occupation: Designer
  Miss Scarlet
  first name: Kasandra
  last name: Scarlet
  color: red
  description: She is an A-list movie star with a dark past,
  age: 31,
  image: https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,
  occupation: Actor
 Mrs Peacock
  first name: Eleanor
  last name: Peacock
  color: blue
  description: She is from a wealthy family and uses her status and money to earn popularity
  age: 36
  image: https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
  occupation: Socialité
 Mr Mustard
  first name: Jack
  last name: Mustard
  color: yellow
  description: He is a former football player who tries to get by on his former glory
  age: 62
  image: https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
  occupation: Retired Football player
---- Weapons ----
Rope - Weight: 10
Knife - Weight: 8
Candlestick - Weight: 2
Dumbbell - Weight: 30
Poison - Weight: 2
Axe - Weight: 15
Bat - Weight: 13
Trophy - Weight: 25
Pistol - Weight: 20
---- Rooms ----
Dinning Room
Conservatory
Kitchen
Study
Library
Billiard Room
Lounge
Ballroom
Hall
Spa
Living Room
Observatory
Theater
Guest House
Patio
*/


/*Creamos las cartas*/
/*Suspects*/

var suspects = [

  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "mafia",
    age: "45",
    color: "green",
    description: "his color is green. He has a lot of connections and is always willing to help people out -- for a price."
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Biologist",
    age: "26",
    color: "white",
    description: "her color is white. She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Billionaire-videogame designer",
    age: "22",
    color: "purple",
    description: "He is a billionaire video game designer who is embracing his new popularity."
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Movie star",
    age: "31",
    color: "red",
    description: "She is an A-list movie star whose past haunts her."
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Influencer",
    age: "36",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity."
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Football player",
    age: "62",
    color: "yellow",
    description: "He is a former football player who tries to be a former glory."
  }
];
var weapons = [{
    weapon: "Rope",
    weight: "10",
    hurt: "2",
    color: "yellow"
  },
  {
    weapon: "Knife",
    weight: "8",
    hurt: "4",
    color: "red"
  },
  {
    weapon: "Candlestick",
    weight: "2",
    hurt: "2",
    color: "gold"
  },
  {
    weapon: "Dumbbell",
    weight: "30",
    hurt: "4",
    color: "silver"
  },
  {
    weapon: "Poison",
    weight: "2",
    hurt: "5",
    color: "red"
  },
  {
    weapon: "Axe",
    weight: "15",
    hurt: "5",
    color: "green"
  },
  {
    weapon: "Bat",
    weight: "13",
    hurt: "3",
    color: "black"
  },
  {
    weapon: "Trophy",
    weight: "25",
    hurt: "2",
    color: "bronze"
  },
  {
    weapon: "Pistol",
    weight: "20",
    hurt: "5",
    color: "blue"
  }
];
var houseRooms = [{
    room: "Dinning room"
  },
  {
    room: "Conservatory"
  },
  {
    room: "Kitchen"
  },
  {
    room: "Study"
  },
  {
    room: "Library"
  },
  {
    room: "Billiard"
  },
  {
    room: "Lounge"
  },
  {
    room: "Ballroom"
  },
  {
    room: "Hall"
  },
  {
    room: "Spa"
  },
  {
    room: "Living"
  },
  {
    room: "Observatory"
  },
  {
    room: "Theater"
  },
  {
    room: "Guest house"
  },
  {
    room: "Patio"
  }
];


function random_selector(array) {
  var rand = Math.floor(Math.random() * (array.length));
  return (array[rand]);
}


function pick_mistery() {
  var suspects1 = random_selector(suspects);
  var weapons1 = random_selector(weapons);
  var houseRooms1 = random_selector(houseRooms);

  var envelope = [suspects1, weapons1, houseRooms1];
  return envelope;
}
pick_mistery();


function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
