// Characters

var  mrGreen={
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur",
}
var drOrchid = {
frst_name:   "Doctor",
lst_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist",
}
var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designe7",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer",
}
var missScarlet ={
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor",
}
var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
}
var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"
}



// Weapons
var wp1 ={name: "rope",weight: 10}
var wp2 = {name: "knife",weight: 8}
var wp3 = {name: "candlestick",weight: 2}
var wp4 = { name: "dumbbell",weight: 30}
var wp5 = { name: "poison",weight: 2}
var wp6 = { name: "axe",weight: 15}
var wp7 = { name: "bat",weight: 13}
var wp8 = { name: "trophy",weight: 25}
var wp9 = { name: "pistol",weight: 20}

// Rooms
var room1 = {
  name: "Dinning Room"
}
var room2 = {
  name: "Conservatory"
}
var room3 = {
  name: "Kitchen"
}
var room4 = {
  name: "Study"
}
var room5 = {
  name: "Library"
}
var room6 = {
  name: "Billiard Room"
}
var room7 = {
  name: "Lounge"
}
var room8 = {
  name: "Ballroom"
}
var room9 = {
  name: "Hall"
}
var room10 = {
  name: "Spa"
}
var room11 = {
  name: "Living Room"
}
var room12 = {
  name: "Observatory"
}
var room13 = {
  name: "Theater"
}
var room14 = {
  name: "Guest House"
}
var room15 = {
  name: "Patio"
}

// Characters Collection
var charactersArray = [];
function updateCharacters(arr1,arr2,arr3,arr4,arr5,arr6,arr){
  arr.push(arr1,arr2,arr3,arr4,arr5,arr6);
  //console.log(arr)
}
// funcion para llenar el array de personajes
updateCharacters(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard,charactersArray)
// Rooms' Collection
var roomsArray = [];
function updateRooms(arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr10,arr11,arr12,arr13,arr14,arr15,arr){
arr.push(arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr10,arr11,arr12,arr13,arr14,arr15);
}

updateRooms(room1,room2,room3,room4,room5,room6,room7,room8,room9,room10,room11,room12,room13,room14,room15,roomsArray);
//console.log(roomsArray)

// Weapons Collection
var weaponsArray = [];

function updateWeapons(arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr){
  arr.push(arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9);
}

updateWeapons(wp1,wp2,wp3,wp4,wp5,wp6,wp7,wp8,wp9,weaponsArray)

//console.log(weaponsArray)

function randomSelector(arr){
 var new_arr = arr[Math.floor(Math.random() * arr.length)];
  return new_arr

}

function pickMistery(arr1,arr2,arr3){

  var misteryEnvelope = new Array();
   arr1 = randomSelector(arr1)
   arr2 = randomSelector(arr2)
   arr3 = randomSelector(arr3)

  misteryEnvelope.push(arr1,arr2.name,arr3.name)


  return misteryEnvelope

}

function revealMistery(){
  var mistery = pickMistery(charactersArray,weaponsArray,roomsArray)

 alert(mistery[0] + " killed Mr.Boddy "+ " using the " + mistery[1] + " in the " + mistery[2] + "!!!")

}

randomSelector(charactersArray)
revealMistery()

//pickMistery(charactersArray,weaponsArray,roomsArray)