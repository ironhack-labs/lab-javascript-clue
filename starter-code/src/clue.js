//ITERATION 1 - Creating the cards
//Data Structuring
//Create one data structure for each of the people, weapons, and rooms described above. Each document must have all the info.

// Characters
var mrGreen = {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
};


var drOrchid = {
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:    "Scientist"
};

var profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
};

var missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
};

var mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
};

var mrMustard = {
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
var bat = {name: "bat" , weight: 13};
var trophy = {name: "trophy", weight: 25};
var pistol = {name: "pistol", weight: 20};

// Rooms
var dinningRoom = {name: "Dinning Room"};
var conservatory = {name: "Conservatory"};
var kitchen = {name: "Kitchen"};
var study = {name: "Study"};
var library = {name: "Library"};
var billliardRoom = {name: "Billiard Room"};
var lounge = {name: "Lounge"};
var ballroom = {name: "Ballroom"};
var hall = {name: "Hall"};
var spa = {name: "Spa"}
var livingRoom = {name: "Living Room"};
var observatory = {name: "Observatory"};
var theater = {name: "Theater"};
var guestHome = {name: "Guest House"};
var patio = {name: "Patio"};

//After creating the data structure, push every document into their corresponding array. charactersArray, weaponsArray, roomsArray.

// Characters Collection
var charactersArray = [];

charactersArray.push(mrGreen);
charactersArray.push(drOrchid);
charactersArray.push(profPlum);
charactersArray.push(missScarlet);
charactersArray.push(mrsPeacock);
charactersArray.push(mrMustard);


// Rooms' Collection
var roomsArray = [];

roomsArray.push(dinningRoom); 
roomsArray.push(conservatory);
roomsArray.push(kitchen);
roomsArray.push(study);
roomsArray.push(library);
roomsArray.push(billliardRoom);
roomsArray.push(lounge);
roomsArray.push(ballroom);
roomsArray.push(hall);
roomsArray.push(spa);
roomsArray.push(livingRoom);
roomsArray.push(observatory);
roomsArray.push(theater);
roomsArray.push(guestHome);
roomsArray.push(patio);


// Weapons Collection
var weaponsArray = [];

weaponsArray.push(rope);
weaponsArray.push(knife);
weaponsArray.push(candlestick);
weaponsArray.push(dumbbell);
weaponsArray.push(poison);
weaponsArray.push(axe);
weaponsArray.push(bat);
weaponsArray.push(trophy);
weaponsArray.push(pistol);


//ITERATION 2 - Creating the mistery
//At the beginning of the game, players shuffle each one of the card stacks to create a combination of suspect, weapon and room. This will be the mystery to solve.

//Remember our tests!
//We will be working with test again! You need to open the SpecRunner.html file in order to see them. The following instructions will guide you through all the methods and functionality your code should have to pass all the tests.

//Random Selector
//Create a method randomSelector to randomly select one element from a card stack. The method should receive an array as an argument, and return randomly one of the elements of the array.

function randomSelector(array) {

  return array[Number.parseInt(Math.random() * array.length)];
}

//Create the mystery
//We need to create a pickMistery method that will call randomSelector for each card stack, and return an array with the 3 picked cards, a character, a weapon and a room. Our mystery should be stored on a misteryEnvelope variable.
 
function pickMistery() {
  
  var misteryEnvelope = [];
  
     misteryEnvelope.push(randomSelector(charactersArray));
     misteryEnvelope.push(randomSelector(weaponsArray));
     misteryEnvelope.push(randomSelector(roomsArray));
  
  return misteryEnvelope;
}

var solution = pickMistery(charactersArray, weaponsArray, roomsArray);

//ITERATION 3 - Revealing the mistery
//Finally, we need to reveal the mystery. Create a revealMistery method, that will receive our misteryEnvelope array as an argument and return the revealed mystery like this:

//<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!

function revealMistery(solution) {
  
   return solution[0].first_name + 
    " " + solution[0].last_name + " killed Mr.Boddy using the " 
    + solution[1].name + " in the " + solution[2].name + "!!!!";
}


