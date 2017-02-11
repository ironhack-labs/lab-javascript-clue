var clueDo = [
    [//Suspects
    { firstName: "Jacob",    lastName:"Green",   color: "green",  connections: "yes", helps: "yes", price: "yes", money: "yes", darkPast: "no"},
    { firstName: "Doctor",   lastName:"Orchid",  color: "white",  connections: "no",  helps: "no",  price: "yes", money: "no",  darkPast: "yes"},
    { firstName: "Victor",   lastName:"Plum",    color: "purple", connections: "yes", helps: "yes", price: "no",  money: "yes", darkPast: "no"},
    { firstName: "Kasandra", lastName:"Scarlet", color: "red",    connections: "yes", helps: "yes", price: "yes", money: "yes", darkPast: "yes"},
    { firstName: "Eleanor",  lastName:"Peacock", color: "blue",   connections: "yes", helps: "yes", price: "yes", money: "yes", darkPast: "no"},
    { firstName: "Jack",     lastName:"Mustard", color: "yellow", connections: "no",  helps: "no",  price: "yes", money: "no",  darkPast: "no"}
    ],
    [//Weapons
    { name: "rope",        weight: "6 pounds",  color: "blue",   power: "6"},
    { name: "knife",       weight: "2 pounds",  color: "red",    power: "4"},
    { name: "candlestick", weight: "30 pounds", color: "yellow", power: "5"},
    { name: "dumbbell",    weight: "80 pounds", color: "grey",   power: "7"},
    { name: "poison",      weight: "1 pound",   color: "green",  power: "10"},
    { name: "axe",         weight: "50 pounds", color: "silver", power: "8"},
    { name: "bat",         weight: "10 pounds", color: "brown",  power: "3"},
    { name: "trophy",      weight: "20 pounds", color: "gold",   power: "2"},
    { name: "pistol",      weight: "25 pounds", color: "black",  power: "9"}
    ],
    [//Rooms
    { roomName: "diningRoom",   space: "big",    color: "white",  concurrency: "15"},
    { roomName: "conservatory", space: "big",    color: "green",  concurrency: "3"},
    { roomName: "kitchen",      space: "medium", color: "orange", concurrency: "4"},
    { roomName: "study",        space: "small",  color: "red",    concurrency: "2"},
    { roomName: "library",      space: "big",    color: "brown",  concurrency: "6"},
    { roomName: "billiardRoom", space: "medium", color: "purple", concurrency: "12"},
    { roomName: "lounge",       space: "small",  color: "gold",   concurrency: "8"},
    { roomName: "ballroom",     space: "huge",   color: "black",  concurrency: "7"},
    { roomName: "hall",         space: "huge",   color: "yellow", concurrency: "14"},
    { roomName: "spa",          space: "medium", color: "aqua",   concurrency: "10"},
    { roomName: "livingRoom" ,  space: "small",  color: "grey",   concurrency: "13"},
    { roomName: "observatory",  space: "medium", color: "blue",   concurrency: "5"},
    { roomName: "theater",      space: "big",    color: "silver", concurrency: "11"},
    { roomName: "guestHouse",   space: "huge",   color: "bistre", concurrency: "10"},
    { roomName: "patio",        space: "huge",   color: "canari", concurrency: "9"}
    ]
];
function pickCardSuspect() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * clueDo[0].length;
  randomNumber = Math.floor(randomNumber);
  return clueDo[0][randomNumber];
}
function pickCardWeapon() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * clueDo[1].length;
  randomNumber = Math.floor(randomNumber);
  return clueDo[1][randomNumber];
}
function pickCardRooms() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * clueDo[2].length;
  randomNumber = Math.floor(randomNumber);
  return clueDo[2][randomNumber];
}
alert("We are picking up your cards. The information we will provide you is confidential. Please use the following code to reveal secret info: 75864");
var input = prompt("If you want to reaveal your cards information please write the code previously provided: ");
   if (input === "75864") {
     console.log("This is your person info: \n " , pickCardSuspect() , "\n", "your weapon is \n" ,  pickCardWeapon()  , "\n", " your room is \n" , pickCardRooms());
} else {
   alert("The code you provided is not correct");
}
