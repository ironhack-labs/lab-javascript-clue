/*
VAR var varexample = 0;
ARRAY var arrayExample = [ "item0", "item1", "item2"];
ARRAY IN ARRAY = [
  ["bob", "Susy", "Ted"],
  ["Lilly", "Sarah", "Billy"]
]
OBJECT  var objectExample = {name: "bob", age: "21"};
        var objectExasmple2 = {name: "david", age:"36"};
OBJECTS IN ARRAY var objectInArrayEx = [
    {name: "bob", age: "21"},
    {name: "david", age:"36"},
];
OBJECTS IN OBJECTS var classRoom = {
  teacher: { firstname: "Greg", lastname: "Dach", age: 38 }
}
DATA STRUCTURE

GAME CHARACTERS 
  each character is object with Key: Value

*/


// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

var mrGreen = {
  character:    "mrGreen",
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
};

var drOrchid = {
  character:    "Dr. Orchid", 
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:    "Scientist"
};

var profPlum = {
  character:    "Professor Plum",
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
};

var missScarlet = {
  character:    "Miss Scarlet",
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
};

var mrsPeacock = {
  character:    "Mrs Peacock",
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
};

var mrMustard = {
  character:    "mrMustard",
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
};

// Weapons
var rope = {name: "rope", weight: 10};
var knife = {name: "knife", weight: 8};
var candlestick = {name: "candlestick", weight: 2};
var dumbbell = {name: "dumbbell", weight: 30};
var poison = {name: "poison", weight: 2};
var axe = {name: "axe", weight: 15};
var bat = {name: "bat", weight: 13};
var trophy = {name: "trophy", weight: 25};
var pistol = {name: "pistol", weight: 20};

// Rooms
var dinningRoom = { name: "Dinning Room"};
var conservatory ={ name: "Conservatory"};
var kitchen = { name: "Kitchen"};
var study = { name: "Study",};
var library ={ name: "Library"};
var billiardRoom = { name: "Billiard Room"};
var lounge = { name: "Lounge"};
var ballRoom ={ name: "Ballroom"};
var hall ={ name: "Hall"};
var spa = { name: "Spa"};
var livingRoom = {  name: "Living Room"};
var observatory = { name: "Observatory"};
var theater = { name: "Theater"};
var guestHouse = {  name: "Guest House"};
var patio = { name: "Patio"};


// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
console.log(charactersArray);
console.log("\n");

// Rooms' Collection
var roomsArray = [];
roomsArray.push(dinningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballRoom, hall, spa,  livingRoom, observatory, theater, guestHouse, patio);
console.log(roomsArray);
console.log("\n");

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);
console.log(weaponsArray);
console.log("\n");

// players shuffle each one of the card stacks: suspect, weapon and room = 
//Create a method randomSelector to randomly select one element from a card stack. The method should receive an array as an argument, and return randomly one of the elements of the array.
//1 create function called randomSelector for random number between two entire numbers
function randomSelector (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
   
};

//2 pickMistery = function that call randomSelector three times for
  //3 var c = random number between 0 and 5 for charactersArray
var c = 0;
var w = 0;
var r = 0;
var misteryEnvelope = [];
function PickMistery (){
    
    var c = randomSelector(0,charactersArray.length-1);
    console.log(c);

    var w = randomSelector(0,weaponsArray.length-1);
    console.log(w);
    
    var r = randomSelector(0,roomsArray.length-1);
    console.log(r);
    
    misteryEnvelope.push(charactersArray[c].character, weaponsArray[w].name, roomsArray[r].name );
    return console.log(misteryEnvelope);
  };

  PickMistery ();

  /*console.log("\npick character random card");
  var c = randomSelector(0,charactersArray.length-1);
  console.log(c);
  
  //4 var w = random number between 0 and 8 for weaponsArray
  console.log("\npick weapon random card");
  var w = randomSelector(0,weaponsArray.length-1);
  console.log(w);

  //5 var r = random number between 0 and 14 for roomsArray
  console.log("\npick room random card");
  var r = randomSelector(0,roomsArray.length-1);
  console.log(r);

//6 
console.log("\nmisteryEnvelope");
var misteryEnvelope = [charactersArray[c].character, weaponsArray[w].name, roomsArray[r].name ];*/
//console.log(misteryEnvelope);

//7 
console.log("\nreveal Mistery");
revealMistery = (charactersArray[c].first_name + " " + charactersArray[c].last_name + " Killed Mr.Boddy using the " + weaponsArray[w].name + " in the " + roomsArray[r].name + " !!!!");
console.log(revealMistery);