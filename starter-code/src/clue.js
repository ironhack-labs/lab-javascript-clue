// Characters
const mrGreen = {
    first_name:   "Jaco",
    last_name:    "Gree",
    color:        "gree",
    description:  "He has a lot of connection",
    age:           4,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpe",
    occupation:   "Entrepreneur"
}

const drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:           26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:   " Scientist"
}
const profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionaire video game designer",
    age:           22,
    image:        "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    occupation:   "Designer"
}
const missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:           31,
    image:        "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:   "Actor"
}
const mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:           36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
} 
 
const mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:           62,
    image:        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    occupation:   "Retired Football player"
} 





// Weapons

const rope = {name: "rope", weight: 10}
const knife ={name: "knife", weight: 8}
const candlestick = {name: "candlestick", weight: 2}
const dumbbell ={name: "dumbbell", weight: 30}
const poison ={name: "poison", weight: 2}
const axe ={name: "axe", weight: 15}
const bat ={name: "bat", weight: 13}
const trophy ={name: "trophy", weight: 25}
const pistol ={name: "pistol", weight: 20}

// Rooms
const Diningn_room ={name: "Dining Room"}
const Conservatory ={name: "Conservatory"}
const Kitchen ={name: "Kitchen"}
const Study ={name: "Study"}
const Library ={name: "Library"}
const Billiard_Room ={name: "Billiard Room"}
const Lounge ={name: "Lounge"}
const Ballroom ={name: "Ballroom"}
const Hall ={name: "Hall"}
const Spa ={name: "Spa"}
const Living_Room ={name: "Living Room"}
const Observatory ={name: "Observatory"}
const Theater ={name: "Theater"}
const Guest_House ={name: "Guest House"}
const Patio ={name: "Patio"}


// Characters Collection
const charactersArray = [];
charactersArray.push (mrGreen, drOrchid,profPlum,missScarlet, mrsPeacock, mrMustard  )

// Rooms Collection
const roomsArray = [];
roomsArray.push(rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol)
// Weapons Collection
const weaponsArray = [];
weaponsArray.push (Diningn_room,Conservatory,Kitchen,Study,Library,Billiard_Room,Lounge,Ballroom,Hall,Spa,Living_Room,Observatory,Theater,Guest_House,Patio)

console.log (charactersArray,weaponsArray,roomsArray)

/*random selector*/

function randomSelector(array) {
    return array[Math.floor(Math.random()*array.length)]

}
function pickMystery(params) {
    let mysteryEnvelope = {}
        mysteryEnvelope.suspect = randomSelector(charactersArray)
        mysteryEnvelope.room = randomSelector(roomsArray)
        mysteryEnvelope.weapon = randomSelector(weaponsArray)

    return mysteryEnvelope
}
function revealMystery(mysteryEnvelope) {
    return  (mysteryEnvelope.suspect.first_name + " " + mysteryEnvelope.suspect.last_name + " killed Mr. Boddy using the " + mysteryEnvelope.weapon.name + " in the " + mysteryEnvelope.room.name + "!!!!")
}
console.log(revealMystery)