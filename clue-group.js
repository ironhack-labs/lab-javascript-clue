

var person;
var people=[
  {green : {name: "Jacob",color: "Green",gender: "Male"}},
  {orchid: {name: "none",color: "White",gender: "Female"}},
  {plum: {name: "Victor",color: "Purple",gender: "Male"}},
  {scarlett: {name: "Kasandra",color: "Red",gender: "Female"}},
  {peacock: {name: "Eleanor",color: "Blue",gender: "Female"}},
  {mustard: {name: "Jack",color: "Yellow",gender: "Male"}}
]

var weapon;
var weapons=[
  {rope : {type: "Rope", damage: "1", deadliness: "Low", bloody: "No"}},
  {knife : {type: "Knife", damage: "4", deadliness: "Medium", bloody: "Yes"}},
  {candlestick : {type: "Candlestick", damage: "2", deadliness: "Low", bloody: "Yes"}},
  {dumbbell : {type: "Dumbbell", damage: "3", deadliness: "Medium", bloody: "Yes"}},
  {poison : {type: "Poison", damage: "5", deadliness: "Very High", bloody: "Depends"}},
  {axe : {type: "Axe", damage: "5", deadliness: "High", bloody: "Lots!"}},
  {bat : {type: "Bat", damage: "3", deadliness: "Medium", bloody: "Depends"}},
  {trophy : {type: "Trophy", damage: "3", deadliness: "Medium", bloody: "Depends"}},
  {pistol : {type: "Pistol", damage: "5", deadliness: "Very High", bloody: "Yes"}}
]

var room;
var houserooms=[
  "Dining room",
  "Conservatory",
  "Kitchen ",
  "Study ",
  "Library",
  "Billiardroom ",
  "Lounge ",
  "Ballroom",
  "Hall",
  "Spa",
  "Livingroom",
  "Observatory",
  "Theater",
  "Guesthouse",
  "Patio"
]

function randomise (array){
var i = 0;
i = Math.floor((Math.random() *((array.length-1) - 0 + 1)));
return array [i];
}


var casefile=[];


person=randomise(people);
casefile.push(person);

weapon=randomise(weapons);
casefile.push(weapon);

room=randomise(houserooms);
casefile.push(room);

console.log("The murder was done by:");
console.log(casefile[0]);

console.log("The weapon was:");
console.log(casefile[1]);

console.log("The houseroom was:");
console.log(casefile[2]);
