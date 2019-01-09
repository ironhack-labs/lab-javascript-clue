

var MrGreen = {
 firstName: "Jacob",
 lastName: "Green",
 color: "green",
 description: "He has a lot of connections",
 age: 45,
 image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
 occupation: "Entrepreneur"
};
var DrOrchid = {
 firstName: "Doctor",
 lastName: "Orchid",
 color: "white",
 description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
 age: "26",
 image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
 occupation: "Scientist"
};
var ProfPlum = {
 firstName: "Victor",
 lastName: "Plum",
 color: "purple",
 description: "Billionare video game designer",
 age: "22",
 image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
 occupation: "Designer"
};
var MissScarlet = {
 firstName: "Kasandra",
 lastName: "Scarlet",
 color: "red",
 description: "She is an A-list movie star with a dark past,",
 age: "31",
 image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,",
 occupation: "Actor"
};
var MrsPeacock = {
 firstName: "Eleanor",
 lastName: "Peacock",
 color: "blue",
 description: "She is from a wealthy family and uses her status and money to earn popularity",
 age: "36",
 image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
 occupation: "Socialité"
};
var MrMustard = {
 firstName: "Jack",
 lastName: "Mustard",
 color: "yellow",
 description: "He is a former football player who tries to get by on his former glory",
 age: "62",
 image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
 occupation: "Retired Football player",
};

var charactersArray = [];
charactersArray.push(MrGreen, DrOrchid, ProfPlum, MissScarlet, MrsPeacock, MrMustard)

// Rooms' Collection
var roomsArray = [
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
{name: "Patio"}
];

// Weapons Collection
var weaponsArray = [
  {name: "rope"        ,   weight: 10},
  {name: "knife"       ,   weight: 8},
  {name: "candlestick" ,   weight: 2},
  {name: "dumbbell"    ,   weight: 30},
  {name: "poison"      ,   weight: 2},
  {name: "axe"         ,   weight: 15},
  {name: "bat"         ,   weight: 13},
  {name: "trophy"      ,   weight: 25},
  {name: "pistol"      ,   weight: 20}
];


// ITERATION 2

var mistery = [];

function pickMistery() {
    
    mistery.push(randomSelector(charactersArray));
    mistery.push(randomSelector(weaponsArray));
    mistery.push(randomSelector(roomsArray));

  return mistery;
}
// Returning an array with 3 elements fails, but i do not know why

function revealMistery () {
  console.log(mistery[0].firstName + " " + mistery[0].lastName + " killed Mr. Boddy using the " + mistery[1].name + " in the " + mistery[2].name);
}

//charactersArray[getRandomInt(charactersArray.length)].firstName;


function randomSelector (arr) {
  var selected = Math.floor(Math.random() * arr.length);
  return arr[selected];
}

function getRandomInt(max) {
  return ;
};