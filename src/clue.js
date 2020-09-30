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
    color: "purple"
}

];

// Rooms Collection
const roomsArray = [ 
    "Dining Room",
    "Conservatory",
    "Kitchen",
    "Study",
    "Liary",
    "Billiard Room",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "Living Room",
    "Observatory",
    "Theater",
    "Guest House",
    "Patio"
];

// Weapons Collection
const weaponsArray = [

    {name: "rope", weight: 10},
    {name: "knife" , weight: 8},
    {name: "candlestick" , weight: 2},
    {name: "dumbbell" , weight: 30},
    {name: "poison" , weight: 2},
    {name: "axe" , weight: 15},
    {name: "bat" , weight: 13},
    {name: "trophy" , weight: 25},
    {name: "pistol" , weight: 20}
    
];


// ITERATION 2

function selectRandom (array){
return array[Math.floor(Math.random()*array.length)]
}


let mystery = {}

function pickMystery () {

mystery.suspect = selectRandom(suspectsArray)
mystery.weapon = selectRandom(weaponsArray)
mystery.room = selectRandom(roomsArray)

return mystery
}

// ITERATION 3

function revealMystery (envelope){
pickMystery()
return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room}!`
}
//revealMystery(mystery);
