// ITERATION 1

// Suspects Array

const suspectsArray = ["mrGreen", "drOrchid", "profPlum", "missScarlet", "mrsPeacock", "mrMustard"];

suspectsArray[0] =  {
firstName: "Jacob",
lastName: "Green",
occupation: "Entrepreneur",
age: 45,
description: "He has a lot of connections",
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
color: "green" }

 suspectsArray[1] = 
 {
firstName: "Doctor",
lastName: "Orchid",
occupation: "Scientist",
age: 26,
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
color: "white" }

suspectsArray[2] = {
firstName: "Victor",
lastName: "Plum",
occupation: "Designer",
age: 22,
description: "Billionaire video game designer",
image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
color: "purple"}

suspectsArray[3] = {
firstName: "Kasandra",
lastName: "Scarlet",
occupation: "Actor",
age: 31,
description: "She is an A-list movie star with a dark past",
image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
color: "red" }

suspectsArray[4] = {
firstName: "Eleanor",
lastName: "Peacock",
occupation: "Socialité",
age: 36,
description: "She is from a wealthy family and uses her status and money to earn popularity",
image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
color: "blue"}

suspectsArray[5] = {
firstName: "Jack",
lastName: "Mustard",
occupation: "Retired Football player",
age: "62",
description: "He is a former football player who tries to get by on his former glory",
image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
color: "yellow" }



// Rooms Array

const roomsArray = [];

roomsArray[0] = {name: "Dining Room"},
roomsArray[1] = {name: "Conservatory"},
roomsArray[2] = {name: "Kitchen"},
roomsArray[3] = {name: "Study"},
roomsArray[4] = {name: "Library"},
roomsArray[5] = {name: "Billiard Room"},
roomsArray[6] = {name: "Lounge"},
roomsArray[7] = {name: "Ballroom"},
roomsArray[8] = {name: "Hall"},
roomsArray[9] = {name: "Spa"},
roomsArray[10] = {name: "Living Room"},
roomsArray[11] = {name: "Observatory"},
roomsArray[12] = {name: "Theater"},
roomsArray[13] = {name: "Guest House"},
roomsArray[14] = {name: "Patio"}


// Weapons Array

const weaponsArray = []

weaponsArray[0] = {name: "rope", weight: 10}
weaponsArray[1] = {name: "knife", weight: 8}
weaponsArray[2] = {name: "candlestick",  weight: 2}
weaponsArray[3] = {name: "dumbbell",  weight: 30}
weaponsArray[4] = {name: "poison",  weight: 2}
weaponsArray[5] = {name: "axe",  weight: 15}
weaponsArray[6] = {name: "bat", weight: 13}
weaponsArray[7] = {name: "trophy", weight: 25}
weaponsArray[8] = {name: "pistol", weight: 20}


// ITERATION 2

function selectRandom(arr) {
    let randomReturn = arr[Math.floor(Math.random() * arr.length)]
    return randomReturn
}
console.log(selectRandom(weaponsArray))


function pickMystery() {
    let yourMystery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }

    return yourMystery
}
console.log(pickMystery())


// ITERATION 3

function revealMystery(mystery) {
    
   return `${mystery.suspect.firstName}  ${mystery.suspect.lastName}  killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!`
}
console.log(revealMystery(pickMystery()))