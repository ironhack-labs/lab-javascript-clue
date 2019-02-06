var mrGreen = {
        first_name: "Jacob",
        last_name: "Green",
        color: "green",
        description: "He has a lot of connections",
        age: 45,
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        occupation: "Enterpreneur"
    },

    drOrchid = {
        first_name: "Doctor",
        last_name: "Orchid",
        color: "white",
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        age: 26,
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        occupation: "Scientist"
    },

    profPlum = {
        first_name: "Victor",
        last_name: "Plum",
        color: "purple",
        description: "Billionare video game designer",
        age: 22,
        image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        occupation: "Designer"
    },

    missScarlet = {
        first_name: "Kasandra",
        last_name: "Scarlet",
        color: "red",
        description: "She is an A-list movie star with a dark past",
        age: 31,
        image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
        occupation: "Actor"
    },

    mrsPeacock = {
        first_name: "Eleanor",
        last_name: "Peacock",
        color: "blue",
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        age: 36,
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        occupation: "Socialité"
    },

    mrMustard = {
        first_name: "Jack",
        last_name: "Mustard",
        color: "yellow",
        description: "He is a former football player who tries to get by on his former glory",
        age: 62,
        image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
        occupation: "Retired Football player"
    },

    weapon0 = { name: "rope", weight: 10 },
    weapon1 = { name: "knife", weight: 8 },
    weapon2 = { name: "candlestick", weight: 2 },
    weapon3 = { name: "dumbbell", weight: 30 },
    weapon4 = { name: "poison", weight: 2 },
    weapon5 = { name: "axe", weight: 15 },
    weapon6 = { name: "bat", weight: 13 },
    weapon7 = { name: "trophy", weight: 25 },
    weapon8 = { name: "pistol", weight: 20 },


    room00 = { name: "Dinning Room" },
    room01 = { name: "Conservatory" },
    room02 = { name: "Kitchen" },
    room03 = { name: "Study" },
    room04 = { name: "Library" },
    room05 = { name: "Billiard Room" },
    room06 = { name: "Lounge" },
    room07 = { name: "Ballroom" },
    room08 = { name: "Hall" },
    room09 = { name: "Spa" },
    room10 = { name: "Living Room" },
    room11 = { name: "Observatory" },
    room12 = { name: "Theater" },
    room13 = { name: "Guest House" },
    room14 = { name: "Patio" }

// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)

// Rooms' Collection
var roomsArray = [];
roomsArray.push(room00, room01, room02, room03, room04, room05, room06, room07, room08, room09, room10, room11, room12, room13, room14)

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(weapon0, weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8)

function getRandom(num) {
    return Math.floor(Math.random() * num)
}

function randomSelector(arr) {
    return arr[getRandom(arr.length)]
}

var misteryEnvelope = []

function pickMistery() {
    misteryEnvelope = [randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray)]
    return misteryEnvelope
}

function revealMistery(misteryEnvelope) {
    return misteryEnvelope[0].first_name + " " +
        misteryEnvelope[0].last_name + " killed Mr.Boddy using the " +
        misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!"
}

console.log(revealMistery(pickMistery()))