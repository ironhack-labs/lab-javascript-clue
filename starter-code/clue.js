var c1 = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  occupation: 'Entrepreneur',
};

var c2 = {
  firstName: 'Doctor',
  lastName: 'Orchid',
  color: 'white',
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age: 26,
  occupation: 'Scientist',
};

var c3 = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'Billionare video game designer',
  age: 22,
  occupation: 'Designer',
};

var c4 = {
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is an A-list movie star with a dark past',
  age: 31,
  occupation: 'Actor',
};

var c5 = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description:
    'She is from a wealthy family and uses her status and money to earn popularity',
  age: 36,
  occupation: 'Socialite',
};

var c6 = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description:
    'He is a former football player who tries to get by on his former glory',
  age: 62,
  occupation: 'Retired Football player',
};

var w1 = {
  name: 'Rope',
  weight: 10,
  color: 'yellow',
  damages: 2,
};

var w2 = {
  name: 'knife',
  weight: 8,
  color: 'silver',
  damages: 7,
};

var w3 = {
  name: 'candlestick',
  weight: 2,
  color: 'white',
  damages: 3,
};

var w4 = {
  name: 'dumbell',
  weight: 30,
  color: 'blue',
  damages: 5,
};

var w5 = {
  name: 'poison',
  weight: 2,
  color: 'red',
  damages: 9,
};

var w6 = {
  name: 'axe',
  weight: 15,
  color: 'green',
  damages: 8,
};

var w7 = {
  name: 'bat',
  weight: 13,
  color: 'wood',
  damages: 6,
};

var w8 = {
  name: 'trophy',
  weight: 25,
  color: 'gold',
  damages: 4,
};

var w9 = {
  name: 'pistol',
  weight: 20,
  color: 'black',
  damages: 10,
};

var r1 = {
  name: 'Dinning Room',
  square: '23m2',
};

var r2 = {
  name: 'Conservatory',
  square: '8m2',
};

var r3 = {
  name: 'Kitchen',
  square: '15m2',
};

var r4 = {
  name: 'Study',
  square: '65m2',
};

var r5 = {
  name: 'Library',
  square: '46m2',
};

var r6 = {
  name: 'Billiard Room',
  square: '18m2',
};

var r7 = {
  name: 'Lounge',
  square: '25m2',
};

var r8 = {
  name: 'Ballroom',
  square: '165m2',
};

var r9 = {
  name: 'Hall',
  square: '36m2',
};

var r10 = {
  name: 'Spa',
  square: '58m2',
};

var r11 = {
  name: 'Living Room',
  square: '65m2',
};

var r12 = {
  name: 'Observatory',
  square: '5m2',
};

var r13 = {
  name: 'Theater',
  square: '76m2',
};

var r14 = {
  name: 'Guest House',
  square: '265m2',
};

var r15 = {
  name: 'Patio',
  square: '25m2',
};

var characters = [c1, c2, c3, c4, c5, c6];
var weapons = [w1, w2, w3, w4, w5, w6, w7, w8, w9];
var rooms = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15];

function random_selector(array) {
  var i = '';
  i = Math.floor(Math.random() * array.length);
  return array[i];
}

//console.log (random_selector(characters));

var mistery = [];

function pick_mistery() {
  var game = [characters, weapons, rooms];

  for (var j = 0; j < game.length; j++) {
    mistery.push(random_selector(game[j]));
  }
  return mistery;
}
pick_mistery();
console.log(mistery);


function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);


/*

---- Characters ----

var mrGreen = {}


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
