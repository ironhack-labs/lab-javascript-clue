// Characters

var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
}

var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:    "Scientist"
}


var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
}


var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
}


var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"   
}


var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
}

var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard]
// same result - differt approach:
//charactersArray.push(mrMustard, mrGreen)

// function Character(first_name, last_name, color, description, age, image, occupation) {
//     this.first_name = first_name
//     this.last_name = last_name
//     this.color = color
//     this.description = description
//     this.age = age
//     this.image = image
//     this.occupation = occupation
// } 

// var mrGreen1 = new Character("Jacob", "Green", "green", "He has a lot of connections", 45, 
// "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur")


// Weapons

function NewWeapon(name,weight) {
    this.weapon_name = name
    this.weight = weight
}

var rope = new NewWeapon("rope", 10)
var knife = new NewWeapon("knife", 8)
var candlestick = new NewWeapon("candelstick", 2)
var dumbbell = new NewWeapon("dumbbell", 30)
var poison = new NewWeapon("poison", 2)
var axe = new NewWeapon("bat", 15)
var bat = new NewWeapon("bat", 13)
var trophy = new NewWeapon("trophy", 25)
var pistol = new NewWeapon("pistol", 20)

// Weapons' Collection
var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

// Rooms

var dinning_room = {
    room_name: "Dinning Room"
}
var conservatory = {
    room_name: "Conservatory" 
}
var kitchen = {
    room_name: "Kitchen"
}
var study = {
    room_name: "Study"
}
var library = {
    room_name: "Library"
}
var billiard_room = {
    room_name: "Billiard room"
}
var lounge = {
    room_name: "Lounge"
}
var ballroom = {
    room_name: "Ballroom"
}
var hall = {
    room_name: "Hall"
}
var spa = {
    room_name: "Spa"
}
var living_room = {
    room_name: "Living Room"
}
var observatory = {
    room_name: "Observatory"
}
var theater = {
    room_name: "Theater"
}
var guest_house = {
    room_name: "Guest House"
}
var patio = {
    room_name: "Patio"
}

// Rooms' Collection
var roomsArray = [dinning_room, conservatory, kitchen, study, library, billiard_room, lounge, ballroom, hall, spa, living_room, observatory, theater, guest_house, patio]

function randomSelector(someArr) {
    let randomIndex = Math.floor(Math.random()*(someArr.length))
    return someArr[randomIndex]
}

// function pickMysteryAnotherWay(charactersArray, weaponsArray, roomsArray) {
//     return {
//         character: randomSelector(charactersArray),
//         room: randomSelector(roomsArray),
//         weapon: randomSelector(weaponsArray)
//     }
// }

// var mystery = pickMysteryAnotherWay(charactersArray, weaponsArray, roomsArray);

let misteryEnvelope = []
let allCards = [charactersArray, weaponsArray, roomsArray]

function pickMistery(allCards){
    //if(misteryEnvelope.length >= 3) return;
    misteryEnvelope = []
    for (let i = 0; i < allCards.length; i++){
        misteryEnvelope.push(randomSelector(allCards[i]))
    }
    return misteryEnvelope
}
// function resetEnvelope(){
//  misteryEnvelope = []   
// }

function revealMistery(misteryEnvelope) {
    let firstName = misteryEnvelope[0].first_name
    let lastName = misteryEnvelope[0].last_name
    let weapon = misteryEnvelope[1].weapon_name
    let place = misteryEnvelope[2].room_name
    return `${firstName} ${lastName} killed Mr.Boddy using the ${weapon} in the ${place}`
}
