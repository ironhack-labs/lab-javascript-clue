
var mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur",
};

var drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};

var profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer",
};

var missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor",
};

var mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité",
};

var mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player" };

var rope = {name: 'rope', weight: 10};
var knife = {name: 'knife', weight: 8};
var candlestick = {name: 'candlestick', weight: 2};
var dumbell = {name: 'dumbbell', weight: 30};
var poison = {name: 'poison', weight: 2};
var axe = {name: 'axe', weight: 15};
var bat = {name: 'bat', weight: 13};
var trophy = {name: 'trophy', weight: 25};
var pistol = {name: 'pistol', weight: 20};


var diningRoom = {name: "Dinning Room"};
var conservatory = {name: "Conservatory"};
var kitchen = {name: "Kitchen"};
var study = {name: "Study"};
var library = {name: "Library"};
var billiardRoom = {name: "Billiard Room"};
var lounge = {name: "Lounge"};
var ballRoom = {name: "Ballroom"};
var hall = {name: "Hall"};
var spa = {name: "Spa"};
var livingRoom = {name: "Living Room"};
var observatory = {name: "Observatory"};
var theater = {name: "Theater"};
var guestHouse = {name: "Guest House"};
var patio = {name: "Patio"};

// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];

//add characters
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

//add rooms
roomsArray.push(diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballRoom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);

//add weapons
weaponsArray.push(rope, knife, candlestick, dumbell, poison, axe, bat, trophy, pistol);

//select a random card
function randomSelector(array){
  if (array.length > 0){
    var randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum]
  } else {
    return undefined;
  }
};

var misteryEnvelope = [];

function pickMistery(array1, array2, array3){

  var card1 = randomSelector(array1);
  var card2 = randomSelector(array2);
  var card3 = randomSelector(array3);
  misteryEnvelope.push(card1, card2, card3)
  return misteryEnvelope;
};

console.log(pickMistery(charactersArray,weaponsArray,roomsArray));

function revealMistery(misteryEnvelope){
  return message = misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!";
}

console.log(revealMistery(misteryEnvelope));

