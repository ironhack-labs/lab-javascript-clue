var cardsCharacter = {
  
    MrGreen : [ {
    firstname: "Jacob", 
    lastname: "Green", 
    color: "green", 
    description: "He has a lot of connections", 
    age: 45, 
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", 
    occupation: "Entrepreneur",
    },
   
    DrOrchid = {
    firstname: "Doctor", 
    lastname: "Orchid", 
    color: "white",
    description: "PhD in plant toxicology. Adapted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg", 
    occupation: "Scientist"
    },
    
    ProfPlum = {
    firstname:"Victor",
    lastname:"Plum", 
    color:"purple",
    description:"Billionare video game designer", 
    age:22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
    },
    
    MissScarlet = {
    firstname: "Kasandra", 
    lastname: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
    },
    
    MrsPeacock = {
    firstname: "Eleanor",
    lastname: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36, 
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
    },
    
    MrMustard = {
    firstname: "Jack",
    lastname: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
      }
    ]
  } 
   
   var weapons = {
    
    Weapons : [{ 
  
    Rope: {weight: 10},
    Knife: {weight: 8},
    Candlestick: {weight: 2},
    Dumbbell: {weight: 30},
    Posion: {weight: 2},
    Axe: {weight: 15},
    Bat: {weight: 13},
    Trophy: {weight: 25},
    Pistol: {weight: 20}
    }]
};
  
    var rooms = [
    
    "DinningRoom",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "BilliardRoom",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "LivingRoom",
    "Observatory",
    "Theater",
    "GuestHouse",
    "Patio"
    ];
  

function random_selector(array) {
  var numeroAleatorio = Math.floor(Math.random() * array.length);
  var selection = array[numeroAleatorio];
  return selection;
  }



function pick_mistery() {
  var mistery = [];
  mistery.push(random_selector(characters.character));
  mistery.push(random_selector(weapons.weapon));
  mistery.push(random_selector(rooms));
  return mistery;
  }
  
function reveal_mistery(mistery) {
  
  }
  
  
var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);