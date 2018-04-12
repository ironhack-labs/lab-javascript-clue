//Characters
 const mrGreen = {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          "45",
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"};

  const drOrchid = {
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          "26",
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:    "Scientist"};
  
  const profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          "22",
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"};
  
 const missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          "31",
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"};
  
  const mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          "36",
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"};
  
 const mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          "62",
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"};

// Weapons Collection

 const weapon1= {name: "rope", weight:10};
 const weapon2= {name: "knife", weight:8};
 const weapon3= {name: "candlestick", weight:2};
 const weapon4= {name: "dumbbell", weight:30};
 const weapon5= {name: "poison", weight:2};
 const weapon6= {name: "axe", weight:15};
 const weapon7= {name: "bat", weight:13};
 const weapon8= {name: "trophy", weight:25};
 const weapon9= {name: "pistol", weight:20};

// Rooms' Collection

const place1 = {name: "Dinning Room"};
const place2 = {name: "Conservatory"};
const place3 = {name: "Kitchen"};
const place4 = {name: "Study"};
const place5 = {name: "Library"};
const place6 = {name: "Billiard Room"};
const place7 = {name: "Lounge"};
const place8 = {name: "Ballroom"};
const place9 = {name: "Hall"};
const place10 ={ name: "Spa"};
const place11 ={ name: "Living Room"};
const place12 ={ name: "Observatory"};
const place13 ={ name: "Theater"};
const place14 ={ name: "Guest House"};
const place15 ={ name: "Patio"};

  var charactersArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];
  
  var roomsArray = [place1,place2,place3,place4,place5,place6,place7,place8,place9,place10,place11,place12,place13,place14,place15];
  
  var weaponsArray = [weapon1,weapon2,weapon3,weapon4,weapon5,weapon6,weapon7,weapon8,weapon9];

function randomSelector (arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

function pickMistery(characters, weapons, rooms) {
  let mistery = [];
  mistery.push(randomSelector(charactersArray));
  mistery.push(randomSelector(weaponsArray));
  mistery.push(randomSelector(roomsArray));
  return mistery;
}

let misteryEnvelope = pickMistery(charactersArray,weaponsArray,roomsArray);

function revealMistery(misteryEnvelope) {
  return misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!";
}