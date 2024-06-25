// ITERATION 1

// Suspects Array

const suspectsArray = [
{
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 5,
    description: "brown hair, glasses",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
},
{
    firstName: "Laura",
    lastName: "Grau",
    occupation: "Medic",
    age: 30,
    description: "black hair, beautiful smile",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "blue",
},
{
    firstName: "Iñigo",
    lastName: "Esteban",
    occupation: "Unemployed",
    age: 33,
    description: "a bit rude and clueless",
    image: " https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "black",
},
{
    firstName: "Michael",
    lastName: "Jordan",
    occupation: "Basketball Player",
    age: 55,
    description: "very pale and fat",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
},
{
    firstName: "Bruce",
    lastName: "Springsteen",
    occupation: "Musician",
    age: 65,
    description: "white hair, always with a guitar",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "purple",
},
{
    firstName: "Steve",
    lastName: "Jobs",
    occupation: "Farmer",
    age: 48,
    description: "unknown",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "red",
},
];

// Rooms Array

const roomsArray = [
     {
        name: "Dining Room",
      },
      {
        name: "Rooftop",
      },
      {
        name: "Kitchen",
      },
      {
        name: "Study",
      },
      {
        name: "Library",
      },
      {
        name: "Billiard Room",
      },
      {
        name: "Lounge",
      },
      {
        name: "Ballroom",
      },
      {
        name: "Hall",
      },
      {
        name: "Spa",
      },
      {
        name: "Living Room",
      },
      {
        name: "Observatory",
      },
      {
        name: "Theater",
      },
      {
        name: "Guest House",
      },
      {
        name: "Basketball court",
      },
];

// Weapons Array

const weaponsArray = [
    {
        name: "scapel",
        weight: 10,
    },
    {
        name: "blackboard",
        weight: 190,
    },
    {
        name: "basketball ball",
        weight: 90,
    },
    {
        name: "knife",
        weight: 15,
    },
    {
        name: "gun",
        weight: 350,
    },
    {
        name: "whistle",
        weight: 18,
    },
    {
        name: "guitar",
        weight: 450,
    },
    {
        name: "cellular",
        weight: 150,
    },
    {
        name: "bitten apple",
        weight: 30,
    },
];


// ITERATION 2

function selectRandom(array) {
    let randomI= array[Math.floor(Math.random()*array.length)]
    return randomI
}

let suspect = selectRandom(suspectsArray)
let weapon = selectRandom(weaponsArray)
let room = selectRandom(roomsArray)

function pickMystery() {
    return{suspect, weapon, room}
    console.log(suspect)
}


// ITERATION 3

function revealMystery(envelope) {
let {suspect, weapon, room} = envelope
return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
}
console.log(`${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`)