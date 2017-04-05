//suspects objects
var suspect1 = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  occupation: "private killer",
  age: 32,
  description: "helps people out for a price"
};
var suspect2 = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  occupation: "biologist",
  age: 23,
  description: "adopted daughter of Mr. Boddy"
};
var suspect3 = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  occupation: "video game designer",
  age: 36,
  description: "billionaire!"
};
var suspect4 = {
  firstName: "Kasandra",
  lastName: "Scarlett",
  color: "red",
  occupation: "movie star",
  age: 40,
  description: "Haunted"
};
var suspect5 = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  occupation: "gold digger",
  age: 27,
  description: "uses her status to gain popularity"
};
var suspect6 = {
  firstName: "Jack",
  lastName: "Mustard",
   color: "yellow",
  occupation: "football player",
  age: 46,
  description: "tries to get by"
};
//weapons as objects
var rope = {
  name: "rope",
  damage: 6
};
var knife = {
  name: "knife",
  damage: 9
};
var candlestick = {
  damage: 0,
  name: "candlestick"
};
var dumbbell = {
  damage: 3,
  name: "dumbbell"
};
var poison = {
  damage: 10,
  name: "poison"
};
var axe = {
  damage: 9,
  name: "axe"
};
var bat = {
  damage: 8,
  name: "bat"
};
var trophy = {
  damage: 7,
  name: "trophy"
};
var pistol = {
  damage: 9,
  name: "pistol"
};
//rooms array
var houseRooms = [
  "Dining room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billard",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living room",
  "Observatory",
  "Theater",
  "Guest house",
  "Patio"
] ;
//weapon objects in array
var weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];
//suspects as objects in array
var suspects = [suspect1, suspect2, suspect3, suspect4, suspect5, suspect6];
/*
function start(){
  suspect selection
  var valorRandom = Math.floor(Math.random() * suspects.length);
  var randomSuspect = suspects[valorRandom];
  weapon selection
  var valorRandom2 = Math.floor(Math.random() * weapons.length);
  var randomWeapon = weapons[valorRandom2];
  room selection
  var valorRandom3 = Math.floor(Math.random()*houseRooms.length);
  var randomRoom = houseRooms[valorRandom3];
    return randomRoom;
    return randomWeapon;
}
  console.log(start());
  */
  //random card selector
  function shuffle(array) {
    var valorRandom = Math.floor(Math.random()*array.length);
    var selection = array[valorRandom];
    return selection;
  }
//final envelope with info
var finalEnvelope = {
  suspect: shuffle (suspects).firstName,
  weapon: shuffle (weapons).name,
  room: shuffle (houseRooms)
};
console.log(finalEnvelope);
//mistery revealed!!
function misterySolved () {

  console.log("The mistery was solved! The killer is "+shuffle(suspects).firstName+", who usead a "+shuffle(weapons).name+" in the "+shuffle(houseRooms));
}
misterySolved();
