/*
All declared variables 
*/

//Characters
var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
}

var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:    "Scientist"
}

var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
}

var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
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
var rope = {
    name: "rope",
    weight: 10
}
var knife = {
    name: "knife",       
    weight: 8
    }
var candlestick = {
    name: "candlestick", 
    weight: 2
    }
var dumbbell = {
    name: "dumbbell",   
    weight: 30
    }
var poison = {
    name: "poison",      
    weight: 2
    }
var axe = {
    name: "axe",         
    weight: 15
    }
var bat = {
    name: "bat",         
    weight: 13
    }
var trophy = {
    name: "trophy",     
    weight: 25
    }    
var pistol = {
    name: "pistol",     
    weight: 20
    }

// Rooms
var diningRoom = {name: "DiningRoom"}
var conservatory = {name: "Conservatory"}
var kitchen = {name: "Kitchen"}
var study = {name: "Study"}
var library = {name: "Library"}
var billiardRoom = {name: "Billiard Room"}
var lounge = {name: "Lounge"}
var ballroom = {name: "Ballroom"}
var hall = {name: "Hall"}
var spa = {name: "Spa"}
var livingRoom = {name: "Living Room"}
var observatory = {name: "Observatory"}
var theater = {name: "Theater"}
var guestHouse = {name: "Guest House"}
var patio = {name: "Patio"}

// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Weapons Collection
var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

// Rooms' Collection
var roomsArray = [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];


/*
Functions created outside of the object
*/

//[Random Selector] function outside an object.
function randomSelector(someArray){
    var max = someArray.length;
    return someArray[Math.floor(Math.random() * Math.floor(max))];
  }

//[Create the mystery] function outside an object.
function pickMistery(characterStack, weaponStack, roomStack){
  var misteryEnvelope = [];
  misteryEnvelope.push(randomSelector(characterStack));
  misteryEnvelope.push(randomSelector(weaponStack));
  misteryEnvelope.push(randomSelector(roomStack));
  return misteryEnvelope;
}

//[Revealing the mistery] function outside an object.
function revealMistery(someArray){
  return someArray[0].first_name + " " + someArray[0].last_name + " killed Mr.Boddy using the " + someArray[1].name + " " + "in the " + someArray[2].name + " !!!!"
}

/*
Function calls from function outside of an object 
*/


//function call > output = random number of characters array.
  console.log(randomSelector(charactersArray));

//function call > output = random number of characters array.
  console.log(randomSelector(weaponsArray));
  
//function call > output = random number of characters array.
  console.log(randomSelector(roomsArray));

//function call > output = mysteryEnvelope containing array with the 3 picked cards, a character, a weapon and a room.
console.log(pickMistery(charactersArray, weaponsArray, roomsArray));


//function call > output = the revealed mistery.
console.log(revealMistery(pickMistery(charactersArray, weaponsArray, roomsArray)));


/*
All created functions stored in a object called >> cards
*/

var cards = {
    charactersArray,
    weaponsArray,
    roomsArray,
    randomSelector: function(someArray){
        var max = someArray.length;
        return someArray[Math.floor(Math.random() * Math.floor(max))];
    },
    pickMistery: function(characterStack, weaponStack, roomStack){
        var misteryEnvelope = [];
        misteryEnvelope.push(this.randomSelector(characterStack));
        misteryEnvelope.push(this.randomSelector(weaponStack));
        misteryEnvelope.push(this.randomSelector(roomStack));
        return misteryEnvelope;
    }, 
    revealMistery: function(){
        var someArray = this.pickMistery(this.charactersArray, this.weaponsArray, this.roomsArray)
        return someArray[0].first_name + " " + someArray[0].last_name + " killed Mr.Boddy using the " + someArray[1].name + " " + "in the " + someArray[2].name + " !!!!"
      }
}

/*
Function calls done from the created object called >> cards
*/

console.log(cards.randomSelector(cards.roomsArray));
console.log(cards.pickMistery(cards.weaponsArray, cards.weaponsArray, cards.roomsArray));
console.log(cards.revealMistery());