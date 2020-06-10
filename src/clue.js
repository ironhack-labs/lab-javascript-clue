// ITERATION 1

// Suspects Collection
const suspectsArray = [

    {nickname: "mrGreen",
    first_name:   "Jacob",
    last_name:    "Green",
    occupation:   "Entrepreneur",
    age: 45,
    description:  "He has a lot of connections",
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg ",
    color:        "green"},

    {nickname: "drOrchid",
    first_name:   "Doctor",
    last_name:    "Orchid",
    occupation:   "Scientist",
    age: 26,
    description:  "PhD in plant toxicology. Adopted daughter of Mr.",
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg ",
    color:        "white"},

    {nickname: "profPlum",
    first_name:   "Victor",
    last_name:    "Plum",
    occupation:   "Designer",
    age: 22,
    description:  "Billionaire video game designer",
    image:        "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color:        "purple"},

    {nickname: "missScarlet",
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    occupation:   "Actor",
    age: 31,
    description:  "She is an A-list movie star with a dark past",
    image:        "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color:        "red"},

    {nickname: "mrsPeacock",
    first_name:   "Eleanor",
    last_name:    "Peacock",
    occupation:   "Socialité",
    age: 36,
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color:        "blue"},

    {nickname: "mrMustard",
    first_name:   "Jack",
    last_name:    "Mustard",
    occupation:   "Retired Football playe",
    age: 62,
    description:  "He is a former football player who tries to get by on his former glory",
    image:        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color:        "yellow"},
];

// Weapons Collection
const weaponsArray = [


    {name: "rope", weight: 10},
    {name: "knife", weight: 8},
    {name: "candlestick", weight: 2},
    {name: "dumbbell" , weight: 30},
    {name: "poison", weight: 2},
    {name: "poison", weight: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20}
    ];
    
// Rooms Collection
const roomsArray = [

    "Dinning Room",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "Billiard Room",
    "Lounge",
    "Ballroom",
    "Hall",
    "spa",
    "Living Room",
    "Observatory",
    "Theater",
    "Guest House",
    "Patio"   
];
// ITERATION 2

//Random selector
function selectRandomSuspectsArray (array) { 
    let murderer = array[Math.floor(Math.random() * array.length)];
    return murderer;
}
function selectRandomWeaponsArray (array) { 
let weapon = arr[Math.round(Math.random()*(array.length))];
    return weapon;
}
function selectRandomRoomsArray (array) { 
    let room =array[Math.floor(Math.random() * array.length)];
    return room;
}

//Create the mystery

function pickMystery () {
    let envelope = [];
    envelope.push ({selectRandom(0)});
    envelope.push ({(selectRandom(1)});
    envelope.push ({rselectRandom(2)});

return envelope ;
}


// ITERATION 3

function revealMystery (){ 
    let envelope = pickMistery();
    console.log(mysteryArray[1].first_name +" "+ mysteryArray[1].last_name + " killed Mr.Boddy using the "+ mysteryArray[2].name+ " in the " +  mysteryArray[0]+ " !!!!");

   }





    
