var charactersArray = [
    {name: "MrGreen",
    first_Name: "Jacob",
    last_Name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
    },
    {name: "DrOrchid",
    first_Name: "Doctor",
    last_Name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: "26",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
    },
    {name: "ProfPlum",
    first_Name: "Victor",
    last_Name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: "22",
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
    },
    {name: "MissScarlet",
    first_Name: "Kasandra",
    last_Name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past,",
    age: "31",
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,",
    occupation: "Actor"
    },
    {name: "MrsPeacock",
    first_Name: "Eleanor",
    last_Name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: "36",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
    },
    {name: "MrMustard",
    first_Name: "Jack",
    last_Name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: "62",
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player",
    }
];

// Rooms' Collection
var roomsArray =
    ["DinningRoom",
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
    "Patio"];

// Weapons Collection
var weaponsArray = [{ name: "rope", weight: 10 },
{ name: "knife", weight: 8 },
{ name: "Candlestick", weight: 2 },
{ name: "Dumbbell", weight: 30 },
{ name: "Poison", weight: 2 },
{ name: "axe", weight: 15 },
{ name: "bat", weight: 13 },
{ name: "trophy", weight: 25 },
{ name: "pistol", weight: 20 }];

function randomSelector(array){
    var randomValue = array[Math.floor(Math.random()*array.length)];
    return randomValue;
}

function pickMistery() {
    var mistery = [];
    mistery.push(randomSelector(charactersArray));
    mistery.push(randomSelector(weaponsArray));
    mistery.push(randomSelector(roomsArray));
    return mistery;
}

var misteryEnvelope = pickMistery();

function revealMistery(envelope){
    var solution = (envelope[0].first_name) + " " + (envelope[0].last_name) + " killed Mr.Boddy using the " + envelope[1].name + " in the " + (envelope[2].name) +"!!!!";
    return solution;
}
