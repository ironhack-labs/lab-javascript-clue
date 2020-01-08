// ITERATION 1

// Suspects Collection
const mrGreen = {
    firstName: "Jacob" ,
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "http/bs.twimg.com/profile_images/506787499331428352/65",
    color: "green",
}

const drOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http/www.radiotimes.com/uploads/images/Original/111967",
    color: "white",
}

const profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: 'Billionaire video game designer',
    image: "https/66.mediatumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540 ",
    color: "purple",
}

const misScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https/www.radiotimes.com/uploads/images/Original/111967",
    color: "red",
}

const mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité"   ,
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: "https/metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
}

const mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: "https/static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
}
const suspectsArray = [mrGreen, drOrchid, profPlum, misScarlet, mrsPeacock, mrsPeacock,  mrMustard];

// Rooms Collection
const roomsArray = [
    {name: "Dining Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Roo"},
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


// Weapons Collection


const weaponsArray = [
    {name: "rope", weight: 10},
    {name: "candlestick", weight: 2},
    {name: "dumbbell" , weight: 30},
    {name: "poison" , weight: 2},
    {name: "axe" , weight: 15},
    {name: "bat" , weight: 13},
    {name: "trophy" , weight: 25},
    {name: "pistol" , weight: 20}
    ];

// ITERATION 2

function selectRandom(array){
    let randomNum = Math.floor(Math.random() * array.length)
    const finalCard = array[randomNum]
    return finalCard
}

function pickMystery() {
    const randomCards = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
    return randomCards
}


// ITERATION 3

function revealMystery(obj) {
    //obj = pickMystery()  
    return(`${obj.suspect.firstName} ${obj.suspect.lastName} killed Mr. Boddy using the ${obj.weapon.name} in the ${obj.room.name}!`)

}