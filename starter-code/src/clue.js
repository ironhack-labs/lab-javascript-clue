// Characters

let mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
}

let drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
}

let Victor = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
}

let missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie start with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
}

let mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialite"
}

let mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired football player"
}

// Weapons

const rope = {
    name: "rope",
    weight: 10
}
const knife = {
    name: "knife",
    weight: 8
}
const candlestick = {
    name: "candlestick",
    weight: 2
}
const dumbbell = {
    name: "dumbbell",
    weight: 30
}
const poison = {
    name: "poison",
    weight: 2
}
const axe = {
    name: "axe",
    weight: 15
}
const bat = {
    name: "bat",
    weight: 13
}
const trophy = {
    name: "trophy",
    weight: 25
}
const pistol = {
    name: "pistol",
    weight: 20
}

// Character's Collection
var charactersArray = [mrGreen, drOrchid, Victor, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
var roomsArray = ['Dining Room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio'];

// Weapons Collection
var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

function randomSelector(array) {
    if (array.length === 0) return undefined;
    return array[Math.floor(Math.random()*array.length)]
}



function pickMistery() {
    var misteryEnvelope = {
        suspect: randomSelector(charactersArray),
        weapon: randomSelector(weaponsArray),
        room: randomSelector(roomsArray)
    }
    return revealMistery(misteryEnvelope)
}

function revealMistery(misteryEnvelope){
    return `${misteryEnvelope.suspect.first_name} ${misteryEnvelope.suspect.last_name} killed Mr.Boddy using the ${misteryEnvelope.weapon.name} in the ${misteryEnvelope.room}!`
}

pickMistery()












// function randomSelector(arr){
//     if (arr.length === 0) return undefined;
//     return arr[Math.floor(Math.random()*arr.length)];
// }

// function pickMistery() {
//     let misteryEnvelope = {
//         suspect: randomSelector(charactersArray),
//         weapon: randomSelector(weaponsArray),
//         room: randomSelector(roomsArray),
//         revealMistery: function() {
//             return `${this.suspect.first_name} ${this.suspect.last_name} killed Mr. Boddy using the ${this.weapon.name} in the ${this.room}`
//         }
//     }
//     return misteryEnvelope.revealMistery();
// }

// pickMistery()

