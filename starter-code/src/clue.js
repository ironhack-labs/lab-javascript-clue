// ITERATION 1

// Suspects Collection
let suspectsArray = [
{
nickName: "mrGreen",
firstName: "Jacob", 
lastName: "Green", 
occupation: "Entrepreneur", 
age: 45,
description: "He has a lot of connections",
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
color: "green" 
},

{
nickName: "drOrchid", 
firstName: "Doctor", 
lastName: "Orchid",
occupation: "Scientist",
age: 26,
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
color: "white"
},

{
nickName: "profPlum",
firstName: "Victor",
lastName: "Plum",
occupation: "Designer",
age: 22,
description: "Billionaire video game designer",
image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
color: "purple"
}
];


### Weapons
let weaponsArray = [
    {name:"rope",weight:10},
    {name:"knife", weight :8},
    {name: "candlestick", weight: 2},
    {name: "dumbbell", weight: 30},
    {name: "poison", weight: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20}
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
{name: "Hall"},
{name: "Spa"},
{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"}
]


// ITERATION 2

function selectRandom (mySuspect) {
    let result = Math.floor(Math.random() * mySuspect.length)
    return result
    console.log (result)
}

console.log (selectRandom (suspectsArray))

// ITERATION 3
