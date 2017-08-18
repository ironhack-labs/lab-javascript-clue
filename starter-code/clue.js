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
var weaponsName = ["Rope","Knife","Candlestick","Dumbbell","Poison","Axe","Bat","Trophy","Pistol"];
var weaponsWeight = [10,8,2,30,2,15,13,25,20];
var rooms= ['Dinning Room','Conservatory','Kitchen','Study','Library','Billiard Room','Lounge','Ballroom','Hall','Spa','Living Room','Observatory','Theater','Guest House','Patio'];
var weapon= [weaponsName, weaponsWeight];
var mrGreen = {
  firstname:'Jacob',
  lastname:'Green',
  color:'green',
  description:'He has a lot of connections',
  age: 45,
  image:'http://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation:'Entrepreneur'
  };
var drOrchid = {
  firstname:'Doctor',
  lastname:'Orchid',
  color: 'white',
  description:'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age: 26,
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  occupation: 'Scientist'
  };
var profPlum = {
  firstname:'Victor',
  lastname:'Plum',
  color:'purple',
  description: 'Billionare video game designer',
  age: 22,
  image:' https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation: 'Designer'
  };
var missScarlet={
  firstname: 'Kasandra',
  lastname: 'Scarlet',
  color: 'red',
  description: 'She is an A-list movie star with a dark past',
  age: 31,
  image:'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation: 'Actor'
  };
var mrsPeacock={
 firstname: 'Eleanor',
 lastname: 'Peacock',
 color: 'blue',
 description: 'She is from a wealthy family and uses her status and money to earn popularity',
 age: 36,
 image:' https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
 occupation: 'Socialité'
  };
var mrMustard={
 firstname: 'Jack',
 lastname: 'Mustard',
 color: 'yellow',
 description: 'He is a former football player who tries to get by on his former glory',
 age: 62,
 image:'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
 occupation: 'Retired Football player'
  };
var characters= [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];

function random_selector(array) {
  var max=array.length;
  var random_number=Math.floor(Math.random()*max);
  return random_number;
  //console.log (random);
}


function pick_mistery() {
  roomSelect=rooms[random_selector (rooms)];
  weaponSelect=weapon[0][random_selector(weapon[0])];
  characterSelect=characters[random_selector(characters)].firstname;

  misteryEnvelope.push(roomSelect,weaponSelect,characterSelect);
}


function reveal_mistery() {
console.log("The killer is "+ misteryEnvelope[2] + " with the weapon "+misteryEnvelope[1]+" on the place "+ misteryEnvelope[0]);
}
var weaponSelect,roomSelect,characterSelect;
var misteryEnvelope=[];

pick_mistery();
reveal_mistery();
