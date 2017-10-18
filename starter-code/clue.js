var mrGreen = {firstName: "Jacob", lastName: "Green", color: "green", description: "He has a lot of connections", age: "45", image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", occupation: "Entrepreneur"}

var drOrchid = {firstName: "Doctor", lastName: "Orchid", color: "white", description: "Phd in plant toxicology. Adopted daughter of Mr Boddy", age: "26", image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg", occupation: "Scientist"}

var profPlum = {firstName: "Victor", lastName: "Plum", color: "Purple", description: "Billionare video game designer", age: "22", image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", occupation: "Designer"}

var missScarlet = {firstName: "Kassandra", lastName: "Scarlet", color: "red", description: "She is an A-list movie star with a dark past", age: "31", image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", occupation: "Actor"}

var mrsPeacock = {firstName: "Eleanor", lastName: "Peacock", color: "blue", description: "She is from a wealthy family and uses her status and money to earn popularity", age: "36", image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", occupation: "Socialite"}

var drMustard = {firstName: "Jack", lastName: "Mustard", color: "yellow", description: "He is a former football player who tries to get by on his former glory", age: "62", image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", occupation: "Retired football player"}

var players = [drMustard, mrsPeacock, missScarlet, profPlum, drOrchid, mrGreen];


var weapons ={
  Rope : 10,
  Knife: 8,
  Candlestick: 2,
  Dumbbell: 30,
  Poison: 2,
  Axe: 15,
  Bat: 13,
  Trophy: 25,
  Pistol: 20
}
  
  var rooms  = [
" Dinning Room",
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
"Patio"
    ]


// Iteration 2


// 1 randomly select
function random_selector(a) {
  var x = Math.floor(Math.random() * a.length);
  rand = players[x];
  return rand
}

random_selector(players);
 console.log("Hola", rand)
 
// 2  (still working)
var randPlayers = players;
var randWeapons = weapons;
var randRooms = rooms;

function pick_mistery() {
  var x = Math.floor(Math.random() * a.length);
  rand = players[x];
  return rand
}
