

//---- Characters ----

var mrGreen = {
  first_name: "Jacob",
  last_name:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: "45",
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

  var drOrchid ={
    first_name: "Doctor",
    last_name:"Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"};

  var profPlum ={
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"};

  var missScarlet={
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"};

 var mrsPeacock={
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"};

 var mrMustard={
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"};

var characters=[];
characters.push(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard);
//---- Weapons ----
var rope={
  weight: 10
};
var knife={
  weight: 8
};
var candlestick={
  weight: 2
};
var dumbbell={
  weight: 30
};
var poison={
  weight: 2
};
var axe ={
  weight: 15};

var bat={
  weight: 13
};
var trophy={
  weight: 25
};
var pistol={
  weight:20
};
var weapons=[];
weapons.push(rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol);
//---- Rooms ----
var dinningRoom={};
var conservatory={};
var kitchen={};
var study={};
var library={};
var billiardRoom={};
var lounge={};
var ballroom={};
var hall={};
var spa={};
var livingRoom={};
var observatory={};
var theater={};
var guestHouse={};
var patio={};

var rooms=[];
rooms.push(dinningRoom,conservatory,kitchen,study,library,billiardRoom,lounge,ballroom,hall,spa,livingRoom,observatory,theater,guestHouse,patio);

function random_selector(array) {
  var x = Math.floor((Math.random() * array.length));
  return array[x];
}

function pick_mistery(array) {
  var mistery =
  {personajes: random_selector(characters),
  armas: random_selector(weapons),
  habitaciones: random_selector(rooms)};
  return mistery;
}

function reveal_mistery() {
  characters.forEach(function(mistery){
    console.log(mistery.first_name);
  });
}


var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
