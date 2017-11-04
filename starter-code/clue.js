/*---- Characters ----*/


var MrGreen = {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  /*image: https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg ,*/
  occupation: "Entrepreneur"
}

var DrOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  /* image: http://www.radiotimes.com/uploads/images/Original/111967.jpg */
  occupation: "Scientist"
}

var ProfPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  /* image: https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg */
  occupation: "Designer"
}

var MissScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  /* image: https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg, */
  occupation: "Actor"
}

var MrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  /* image: https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg */
  occupation: "Socialité"
}

var MrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  /* image: https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg */
  occupation: "Retired Football player"
}

var suspects = [MrGreen, DrOrchid, ProfPlum, MissScarlet, MrsPeacock, MrMustard];

/* ---- Weapons ---- */

var rope = {
  Name: "rope",
  Weight: 10
}

var knife = {
  Name: "knife",
  Weight: 8
}

var candlestick = {
  Name: "candlestick",
  Weight: 2
}

var dumbbell = {
  Name: "dumbbell",
  Weight: 30
}

var poison = {
  Name: "poison",
  Weight: 2
}

var axe = {
  Name: "axe",
  Weight: 15
}

var bat = {
  Weight: 13,
  Name: "bat"
}

var trophy = {
  Weight: 25,
  Name: "trophy"
}

var pistol = {
  Weight: 20,
  Name: "pistol"
}

var weapons = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

var rooms = ["Dinning Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room",
"Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];

/* Functions*/

function random_selector(array) {
var j = Math.floor(Math.random() * array.length);
return array[j]
}


function pick_mistery(suspects, weapons, rooms) {
var mistery = [random_selector(suspects), random_selector(weapons), random_selector(rooms)];
return (mistery);
}

function reveal_mistery(mistery) {
console.log("El asesino fue " + mistery[0].firstName + " "+ mistery[0].lastName + ". El arma utilizada fue --> " + mistery[1].Name + ". La habitación  fue --> " + mistery[2]);
}

var mistery_envelope = pick_mistery(suspects, weapons, rooms);
reveal_mistery(mistery_envelope);
