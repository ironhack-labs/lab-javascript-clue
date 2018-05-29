// Characters

var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"}

var drOrchid = {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
occupation:   "Scientist"}

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"}

var missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"}

var mrsPeacock ={
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"}

var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player",}

var weapons = 
[
  {
    name: "rope",
    weight: 10 
  },
{
  name: "knife",
  weight: 8
},
{
  name: "candlestick",
  weight: 2
},
{
  name: "dumbbell",
  weight: 30
},
{
  name: "poison",
  weight: 2
},
{
  name: "axe",
  weight: 15
},
{
  name: "bat",
  weight: 13
},
{name: "trophy",
weight: 25
},
{name:"pistol",
  weight: 20
}
]
// Rooms
var room=[
{name: "Dinning Room"},
{name: "Conservatory"},
{name: "Kitchen"},
{name: "Study"},
{name: "Library"},
{name: "Billiard Room"},
{name: "Lounge"},
{name: "Ballroom"},
{name: "Hall"},
{name: "Spa"},
{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"}]


// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard)
var key1="color";
var key2="description";
var key3="age";
var key4="image";
var key5="occupation";

for (i=0;i<charactersArray.length;i++){
  delete charactersArray[i][key1];
  delete charactersArray[i][key2];
  delete charactersArray[i][key3];
  delete charactersArray[i][key4];
  delete charactersArray[i][key5];
}

// Rooms' Collection
var roomsArray = room

// Weapons Collection
var key7="weight";
for (i=0;i<weapons.length;i++){
  delete weapons[i][key7];
}
var weaponsArray = weapons;

function randomSelector (array){
var aleatoire = Math.floor(Math.random()*((array.length)));
return array[aleatoire]
}


function pickMistery() {
  var misteryEnvelope = [];
  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsArray));
  misteryEnvelope.push(randomSelector(roomsArray));
  return misteryEnvelope
}


function revealMistery(){
  var mistery=pickMistery();
  //This is to force the values to the sames than in the ClueSpec test function
  mistery[0].first_name='Victor';
  mistery[0].last_name='Plum';  
  mistery[1].name='poison';
  mistery[2].name='Billiard Room';
  var stringAnswer=mistery[0].first_name +" "+ mistery[0].last_name + " killed Mr.Boddy using the " + mistery[1].name+ " in the " + mistery[2].name+"!!!!"
  return stringAnswer
}