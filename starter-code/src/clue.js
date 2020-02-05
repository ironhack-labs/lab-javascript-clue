// ITERATION 1

// Suspects Collection
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
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", 
        color: "purple",
    }
];


// Weapons Collection
const weaponsArray = [
    {
    name: "rope",
    weight: 10,
    },
    {
    name: "knife", 
    weight: 8,
    },
    {
    name: "candlestick", 
    weight: 2,
    },
    {
    name: "dumbbell", 
    weight: 30, 
    },
    {
    name: "poison", 
    weight: 2,
    },
];

// Rooms Collection
const roomsArray = [
    {name: "Dining Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"}
];

// ITERATION 2

function selectRandom(someArray) {
    let randomCard = Math.floor(Math.random() * someArray.length)
    console.log(someArray[randomCard])
    return someArray[randomCard]
}

selectRandom(weaponsArray)


function pickMystery() {
    let mystery = {}
    mystery.weapon = selectRandom(weaponsArray)
    mystery.room = selectRandom(roomsArray)
    mystery.suspect = selectRandom(suspectsArray)
    console.log(mystery)
} 

pickMystery()

// ITERATION 3
function revealMystery(obj) {
  console.log(``)
}