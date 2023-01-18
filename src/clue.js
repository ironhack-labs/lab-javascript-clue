// ITERATION 1

// Suspects Array

const suspectsArray = [
    
        {firstName: "Dalila",  
        lastName: "Reisch", 
        occupation: "Spa Manager", 
        age: 30, 
        description: "She knows everyone good and bad in the industry",
        image: "",
        color: "purple"},
    
    
        {firstName: "Erin",  
        lastName: "Clark", 
        occupation: "Back-End Developer", 
        age: 31, 
        description: "She very smart and good with picking locks",
        image: "",
        color: "black"}, 
   
  
        {firstName: "Tom",  
        lastName: "Powell", 
        occupation: "Volleyball Player", 
        age: 30, 
        description: "He can easily disapear from a country",
        image: "",
        color: "green"},
    
 
        {firstName: "Gabrielle",  
        lastName: "Palmer", 
        occupation: "Teacher", 
        age: 35, 
        description: "She loves playing the innocent",
        image: "",
        color: "yellow"},
    
    
        {firstName: "Mr. Poopy",  
        lastName: "Butthole", 
        occupation: "Professor", 
        age: 33, 
        description: "Known as Professor Poopybutthole, is a long-time family friend of the Smith Family",
        image: "",
        color: "red"},
  
        {firstName: "Richard",  
        lastName: "Sanchez", 
        occupation: "Scientist", 
        age: 50, 
        description: "Known for being impatient, he's a misanthropic alcoholic scientist, everyone hates him",
        image: "",
        color: "blue"}
    
];
//console.log(suspectsArray)

// Rooms Array

const roomsArray = [
       {
        name: "suite",
      },
       {
        name: "kitchen",
      },
      {
        name: "study",
      },
      {
        name: "library",
      },
      {
        name: "games room",
      },
      {
        name: "cinema",
      },
      {
        name: "bathroom",
      },
      {
        name: "hall",
      },
      {
        name: "spa",
      },
      {
        name: "rooftop",
      },
      {
        name: "lounge",
      },
      {
        name: "ballroom",
      },
      {
        name: "hall",
      },
      {
        name: "balcony",
      },
      {
        name: "salon",
      }
];

// Weapons Array

const weaponsArray = [
      {
        name: "knife",
        weight: 1
      },
      {
        name: "gun",
        weight: 3
      },
      {
        name: "poison",
        weight: 0.5
      },
      {
        name: "hammer",
        weight: 2
      },
      {
        name: "pen",
        weight: 1
      },
      {
        name: "rope",
        weight: 1
      },
      {
        name: "pen",
        weight: 1
      },
      {
        name: "axe",
        weight: 1
      },
      {
        name: "lipstick",
        weight: 1
      }
];


// ITERATION 2

function selectRandom(array) {
    if (array === 0 ) return undefined;
    let randomElement = Math.floor(Math.random() * array.length)
    let item = array[randomElement]
    
    return item
}


function pickMystery() {
    let mystery = {
        suspect: selectRandom(suspectsArray),
        room:  selectRandom(roomsArray),
        weapon : selectRandom(weaponsArray)
    }
    
   return mystery
     
}
/* let final = pickMystery() */


// ITERATION 3

function revealMystery(arr) {
    return `${arr.suspect.firstName} ${arr.suspect.lastName} killed Mr. Boddy using the ${arr.weapon.name} in the ${arr.room.name}!`;
    
}
console.log(revealMystery())