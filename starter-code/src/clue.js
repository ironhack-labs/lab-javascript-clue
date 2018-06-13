// Characters
var personajes={mrGreen, drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard};
var mrGreen={
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
    };
var drOrchid={
  frst_name:   "Doctor",
  lst_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist",

};
var profPlum={
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
};
var missScarlet={
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
    last_name:   "Peacock",
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
    var Weapons=[
        {name: "rope", weight: 10 }, 
        {name: "knife", weight: 8},
        {name: "candlestick", weight: 2},
        {name: "dumbbell",   weight: 30},
        {name: "poison",   weight: 2},
        {name: "axe", weight: 15},
        {name: "bat", weight: 13},
        {name: "trophy", weight: 25},
        {name: "pistol", weight: 20},
    ];
    var rooms = [
        {name: "Dinning Room"},
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




// Characters Collection
var charactersArray = [mrGreen, drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];

// Rooms' Collection
var roomsArray = [rooms[0],
                  rooms[1], 
                  rooms[2],
                  rooms[3],
                  rooms[4],
                  rooms[5],
                  rooms[6],
                  rooms[7],
                  rooms[8],
                  rooms[9],
                  rooms[10],
                  rooms[11],
                  rooms[12],
                  rooms[13],
                  rooms[14]
                ];

// Weapons Collection
var weaponsArray = [
    Weapons[0],
    Weapons[1],
    Weapons[2],
    Weapons[3],
    Weapons[4],
    Weapons[5],
    Weapons[6],
    Weapons[7],
   ];

   function randomSelector (array){
    randomItem = array[Math.floor(Math.random()*array.length)];
    return randomItem;

   }
randomSelector(weaponsArray);
function pickMistery (a){
 var misteryEnvelope= [randomSelector(a)];
 return misteryEnvelope;
}

function revealMistery(){
    
  var  asecino=randomSelector(charactersArray);
  var asecino1=asecino.first_name+asecino.last_name;
  var obj=randomSelector(weaponsArray);
  var obj1=obj;
  var lugar=randomSelector(roomsArray);
  console.log(asecino1+" mató a Mr.Boddy usando");
  console.log(+obj1+" en ");
  console.log(lugar);
}
revealMistery();