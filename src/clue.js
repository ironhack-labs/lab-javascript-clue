// ITERATION 1: Create the cards

/* 
- Create an Array of Objects for each Card Type. 
- Card Types are: Suspects, Rooms and Weapons.
*/

// Suspects Array

const suspectsArray = [
    {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green"
    },

    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white"
    },

    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "http://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple"
    },

    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red"
    },

    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "http://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        color: "blue"
    },

    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football PLayer",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "http://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"
    }
];

// Rooms Array

const roomsArray = [

    {name: "Dining Room"},
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


// Weapons Array

const weaponsArray = [
    {
        name:"rope",
        weight: 10
    },
    {
        name:"knife",
        weight: 8
    },
    {
        name:"candlestick",
        weight: 2
    },
    {
        name:"dumbell",
        weight: 30
    },
    {
        name:"poison",
        weight: 2
    },
    {
        name:"axe",
        weight: 15
    },
    {
        name:"bat",
        weight: 13
    },
    {
        name:"trophy",
        weight: 25
    },
    {
        name:"pistol",
        weight: 20
    }
];



// ITERATION 2: Create the mystery
/* 
 Random Selector:
- Expect an Array as an argument 
- Should return a random element from the array
*/
function selectRandom(cardsArray) {
   const randomNum = Math.floor(Math.random() * cardsArray.length);
   const randomCard = cardsArray[randomNum];
   return randomCard;
}
//console.log(selectRandom(suspectsArray));

/* Create Mystery:
- Takes no arguments.
- returns an object with 3 properties: suspect, weapon and room.
*/
let mystery = {};
function pickMystery() {
    mystery["suspect"] = selectRandom(suspectsArray);
    mystery["weapon"] = selectRandom(weaponsArray);
    mystery["room"] = selectRandom(roomsArray);
   return mystery;
}
//console.log(pickMystery())

/* My first attempt: it works. But the code above is much more simple.
const allCardsArray = [suspectsArray, weaponsArray, roomsArray];

function pickMystery() {

   let mystery = {};

    for (let i = 0; i < allCardsArray.length; i++) {
      let mysteryCard = selectRandom(allCardsArray[i]);
      
      if (i == 0) {
        //Object.assign(mystery,"suspect",Object.entries(mysteryCard)); // <-- This approach didn`t work
        mystery["suspect"] = mysteryCard;
      }
      else if (i == 1) {
        //Object.assign(mystery,"weapon",Object.entries(mysteryCard));
        mystery["weapon"] = mysteryCard;
      }
      else  {
        //Object.assign(mystery,"room",Object.entries(mysteryCard));
        mystery["room"] = mysteryCard;
      }  
}
return mystery;
}

//pickMystery function test:
const mysteryEnvelope = pickMystery();
//console.log(mysteryEnvelope);

*/


// ITERATION 3: Reveal the mystery
/*
- Expects an Object with the shape of the object returned by pickMystery
- Returns a revealing message
*/

function revealMystery(mysteryObj) {
    return `${mysteryObj.suspect.firstName} ${mysteryObj.suspect.lastName} killed Mr. Boddy using the ${mysteryObj.weapon.name} in the ${mysteryObj.room.name}!`
}

