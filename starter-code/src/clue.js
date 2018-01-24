// Characters

// Characters
var characters = {
    mrGreen: {
       first_name:   "Jacob",
       last_name:    "Green",
       color:        "green",
       description:  "He has a lot of connections",
       age:          45,
       image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
       occupation:   "Entrepreneur"
   },
   
    drOrchid: {
   
       first_name:   "Doctor",
       last_name:    "Orchid",
       color:        "white",
       description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
       age:          26,
       image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
       ocupation:   "Scientist"
   },
   
   
    profPlum: {
       first_name:   "Victor",
       last_name:    "Plum",
       color:        "purple",
       description:  "Billionare video game designer",
       age:          22,
       image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
       occupation:   "Designer"
   },
   
   
    missScarlet: {
       first_name:   "Kasandra",
       last_name:    "Scarlet",
       color:        "red",
       description:  "She is an A-list movie star with a dark past",
       age:          31,
       image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
       occupation:   "Actor"
   },
   
   
    mrsPeacock: {
       first_name:   "Eleanor",
       last_name:    "Peacock",
       color:        "blue",
       description:  "She is from a wealthy family and uses her status and money to earn popularity",
       age:          36,
       image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
       occupation:   "Socialité"
   },
   
   
    mrMustard: {
       first_name:   "Jack",
       last_name:    "Mustard",
       color:        "yellow",
       description:  "He is a former football player who tries to get by on his former glory",
       age:          62,
       image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
       occupation:   "Retired Football player"
   }
}


// Characters Collection
var charactersArray = [];
charactersArray.push(characters);
charactersArray;


// Weapons
var weapons = {
    rope: {
        name: "rope",
        weight: 10
     },
     
      knife: {
        name: "knife",
        weight: 8
     },
     
      candlestick: {
        name: "candlestick",
        weight: 2
     },
     
      dumbbell: {
        name: "dumbbell",
        weight: 30
     },
     
      poison: {
        name: "poison",
        weight: 2
     },
     
      axe: {
        name: "axe",
        weight: 15
     },
     
      bat: {
        name: "bat",
        weight: 13
     },
     
      trophy: {
        name: "trophy",
        weight: 25
     },
     
      pistol: {
        name: "pistol",
        weight: 20
     }
}

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(weapons);
weaponsArray;



// Rooms' Collection
var roomsArray = ["Dinning Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];

roomsArray;


function randomSelector(array) {
   array[Math.floor(Math.random() * array.length)];
}

console.log(roomsArray.randomSelector);

function pickMistery(character, weapon, room) {
    var misteryEnvelope = [];

    for (var i = 0; i < character.length && weapon.length && room.length; i++) {
        var selectChar = character[i].randomSelector;
        var selectWeap = weapon[i].randomSelector;
        var selectRoom = room[i].randomSelector;

        misteryEnvelope += selectChar, selectWeap, selectRoom
    }

    return misteryEnvelope;
}




