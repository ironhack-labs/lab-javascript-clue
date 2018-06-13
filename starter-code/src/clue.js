// Characters Collection
var charactersArray = [];
var mrGreen = {
       name:"Jacob",
       last_name:"Green",
       color:"green",
       description:"He has a lot of connections",
       age: 45,
       image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
       occupation:   "Entrepreneur"
};

var drOrchid = {
       name:   "Doctor",
       last_name:    "Orchid",
       color:        "white",
       description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
       age:          26,
       image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
       ocupation:    "Scientist"
};

var profPlum = {
   name:   "Victor",
   last_name:    "Plum",
   color:        "purple",
   description:  "Billionare video game designer",
   age:          22,
   image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
   occupation:   "Designer"
};

var missScarlet = {
   name:   "Kasandra",
   last_name:    "Scarlet",
   color:        "red",
   description:  "She is an A-list movie star with a dark past",
   age:          31,
   image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
   occupation:   "Actor"
};

var mrsPeacock = {
   name:   "Eleanor",
   last_name:    "Peacock",
   color:        "blue",
   description:  "She is from a wealthy family and uses her status and money to earn popularity",
   age:          36,
   image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
   occupation:   "Socialité"
};

var mrMustard = {
   name:   "Jack",
   last_name:    "Mustard",
   color:        "yellow",
   description:  "He is a former football player who tries to get by on his former glory",
   age:          62,
   image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
   occupation:   "Retired Football player"

};

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
var weaponsArray = [];

var rope = {name: "rope", weight: 10}
var knife = {name: "knife", weight: 8}
var candlestick = {name: "candlestick", weight: 2}
var dumbbell = {name: "dumbbell", weight: 30}
var poison = {name: "poison", weight: 2}
var axe = {name: "axe", weight: 15}
var bat = {name: "bat", weight: 13}
var trophy = {name: "trophy", weight: 25}
var pistol ={name: "pistol", weight: 20}

weaponsArray.push(rope);
weaponsArray.push(knife);
weaponsArray.push(candlestick);
weaponsArray.push(dumbbell);
weaponsArray.push(poison);
weaponsArray.push(axe);
weaponsArray.push(bat);
weaponsArray.push(trophy);
weaponsArray.push(pistol);


charactersArray.push(drOrchid);
charactersArray.push(mrGreen);
charactersArray.push(profPlum);
charactersArray.push(missScarlet);
charactersArray.push(mrsPeacock);
charactersArray.push(mrMustard);


var clue = [];
clue.push(charactersArray);
clue.push(weaponsArray);
clue.push(roomsArray);

var entero = 0;
function randomSelector(array) {
entero = Math.floor(Math.random() * array.length);
return array[entero];
}

var misteryEnvelope = [];

function pickMistery(x) {
for(var i = 0; i < x.length;i++){
 //misteryEnvelope += randomSelector(x[i]); 
 misteryEnvelope[i] = randomSelector(x[i]); 
}
return misteryEnvelope;

/*
misteryEnvelope += x.forEach(randomSelector(x));
console.log(misteryEnvelope);*/
}

function revealMistery(x) {
console.log("You have to know; "+ x[0].name +" "+ x[0].last_name + " killed Mr.Boddy using the "+ x[1].name + " in the "+ x[2].name+"!!!!");
}


pickMistery(clue);
revealMistery(misteryEnvelope);