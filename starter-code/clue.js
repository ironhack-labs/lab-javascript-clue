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

/* Characters */
var mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation: 'Entrepreneur'
};
var drOrchid = {
  firstName: 'Doctor',
  lastName: 'Orchid',
  color: 'white',
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age: 26,
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  occupation: 'Scientist'
};
var profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'Billionare video game designer',
  age: 22,
  image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation: 'Designer'
};
var missScarlet = {
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is an A-list movie star with a dark past',
  age: 31,
  image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation: 'Actor'
};
var mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  age: 36,
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation: 'Socialité'
};
var mrMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a former football player who tries to get by on his former glory',
  age: 62,
  image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation: 'Retired Football player'
};

/* Weapons */

var rope ={
    weight: 10,
    color: 'brown',
    injure: 'strangle'
};
var knife ={
    weight: 8,
    color: 'silver',
    injure: 'cut'
};
var candlestick ={
    weight: 2,
    color: 'golden',
    injure: 'blow'
};
var dumbbell ={
    weight: 30,
    color: 'black',
    injure: 'blow'
};
var poison ={
    weight: 2,
    color: 'green',
    injure: 'poisoning'
};
var axe ={
    weight: 15,
    color: 'red',
    injure: 'cut'
};
var bat ={
    weight: 13,
    color: 'lightBrown',
    injure: 'blow'
};
var trophy ={
    weight: 25,
    color: 'golden',
    injure: 'blow'
};
var pistol ={
   weight: 20,
   color: 'black',
    injure: 'shot'
};

/* Rooms */
var dinningRoom = {
    size: 30,
    description: 'Room for consuming food.',
    color:'maroon'
};
var conservatory = {
    size: 50,
    description: 'Is a building or room having glass or tarpaulin roofing and walls used as a greenhouse or a sunroom. ',
    color:'white'
};
var kitchen = {
    size: 20,
    description: 'Is a room used for cooking and food preparation in a dwelling ',
    color:'green'
};
var study = {
    size: 30,
    description: 'It is a room designed for study.',
    color:'brown'
};
var library = {
    size: 60,
    description: 'Room where the books are kept',
    color:'brown'
};
var billiardRoom = {
    size: 25,
    description: 'Room to spend time',
    color:'red'
};
var lounge = {
    size: 80,
    description: 'Room to rest watching TV',
    color:'blue'
};
var ballroom = {
    size: 100,
    description: 'Room for dancing',
    color:'mirror'
};
var hall = {
    size: 10,
    description: 'A long hallway',
    color:'beige'
};
var spa = {
    size: 100,
    description: 'Room to relax and unwind',
    color:'lightBlue'
};
var livingRoom = {
    size: 20,
    description: 'Room in a house for general and informal everyday use.',
    color:'green'
};
var observatory = {
    size: 60,
    description: 'room or building housing an astronomical telescope or other scientific equipment for the study of natural phenomena.',
    color:'white'
};
var theater = {
    size: 100,
    description: 'a building or outdoor area in which plays and other dramatic performances are given',
    color:'red'
};
var guestHouse = {
    size: 200,
    description: 'guest House',
    color:'white'
};
var patio = {
    size: 250,
    description: 'a paved outdoor area adjoining a house.',
    color:'grey'
};

/* Crear varios arrays, uno para cada categoria. */
/* stacks */
var suspectsStack = [mrGreen,drOrchid,missScarlet,mrMustard,mrsPeacock,profPlum];
var weaponsStack = [rope,knife,trophy,bat,poison,pistol,axe,dumbbell,candlestick];
var roomsStack = [patio,guestHouse,theater,dinningRoom,hall,library,livingRoom,spa,lounge,observatory,conservatory,ballroom,billiardRoom,study,kitchen];

/* Coge aleatoriamente el elemento de un array */
function random_selector(array) {

    return array[Math.floor(Math.random() * array.length)];
}

/* LLama a la funcion random_selector para cada array */
function pick_mistery() {
    var suspect = random_selector(suspectsStack);
    var weapon = random_selector(weaponsStack);
    var room = random_selector(roomsStack);
    return [suspect,weapon,room];
}

function reveal_mistery(mistery) {
  return mistery;
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
