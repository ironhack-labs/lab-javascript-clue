// ITERATION 1

class Suspect {
    constructor(firstNameValue, lastNameValue, occupationValue, ageValue, descriptionValue, imageValue, colorValue) {
        this.firstName = firstNameValue
        this.lastName = lastNameValue
        this.occupation = occupationValue
        this.age = ageValue
        this.description = descriptionValue
        this.image = imageValue
        this.color = colorValue
    }
}
const mrGreen = new Suspect("Jacob", "Green", "Entrepreneur", 45, "He has a lot of connections", "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "green")
const drOrchid = new Suspect("Doctor", "Orchid", "Scientist", 26, "PhD in plant toxicology. Adopted daughter of Mr. Boddy", "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "white")
const profPlum = new Suspect("Victor", "Plum", "Designer", 22, "Billionaire video game designer", "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", "purple")
const missScarlet = new Suspect("Kasandra", "Scarlet", "Actor", 31, "She is an A-list movie star with a dark past", "https://www.radiotimes.com/uploads/images/Original/111967.jpg", "red")
const mrsPeacock = new Suspect("Eleanor", "Peacock", "Socialité", 36, "She is from a wealthy family and uses her status and money to earn popularity", "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "blue")
const mrMustard = new Suspect("Jack", "Mustard", "Retired Football player", 62, "He is a former football player who tries to get by on his former glory", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", "yellow")

// Suspects Array
const suspectsArray = [
    mrGreen,
    drOrchid,
    profPlum,
    missScarlet,
    mrsPeacock,
    mrMustard,
];

// Rooms Array 
class Rooms {
    constructor(nameValue) {
        this.name = nameValue;
    }
}
const room1 = new Rooms("Dining Room")
const room2 = new Rooms("Conservatory")
const room3 = new Rooms("Kitchen")
const room4 = new Rooms("Study")
const room5 = new Rooms("Library")
const room6 = new Rooms("Billiard Room")
const room7 = new Rooms("Lounge")
const room8 = new Rooms("Ballroom")
const room9 = new Rooms("Hall")
const room10 = new Rooms("Spa")
const room11 = new Rooms("Living Room")
const room12 = new Rooms("Observatory")
const room13 = new Rooms("Theater")
const room14 = new Rooms("Guest House")
const room15 = new Rooms("Patio")

const roomsArray = [
    room1,
    room2,
    room3,
    room4,
    room5,
    room6,
    room7,
    room8,
    room9,
    room10,
    room11,
    room12,
    room13,
    room14,
    room15
];

// Weapons Array
class Weapons {
    constructor(nameValue, weightvalue) {
        this.name = nameValue
        this.weight = weightvalue
    }
}
const weapon1 = new Weapons("rope", 10)
const weapon2 = new Weapons("knife", 8)
const weapon3 = new Weapons("candlestick", 2)
const weapon4 = new Weapons("dumbbell", 30)
const weapon5 = new Weapons("poison", 2)
const weapon6 = new Weapons("axe", 15)
const weapon7 = new Weapons("bat", 13)
const weapon8 = new Weapons("trophy", 25)
const weapon9 = new Weapons("pistol", 20)

const weaponsArray = [
    weapon1,
    weapon2,
    weapon3,
    weapon4,
    weapon5,
    weapon6,
    weapon7,
    weapon8,
    weapon9
];

// ITERATION 2

function selectRandom(cardStack) {
    if (cardStack.length === 0) {
        return undefined
    }
    return (cardStack[Math.floor(Math.random() * cardStack.length)])
}
class Mysteries {
    constructor(suspectValue, weaponValue, roomValue) {
        this.suspect = suspectValue
        this.weapon = weaponValue;
        this.room = roomValue
    }
}
function pickMystery() {
    const suspect = selectRandom(suspectsArray)
    const weapon = selectRandom(weaponsArray)
    const room = selectRandom(roomsArray)
    const newMystery = new Mysteries(suspect, weapon, room)
    return newMystery
}

// ITERATION 3
const solvedMystery = pickMystery()
function revealMystery(solvedMystery) {
    return `${solvedMystery.suspect.firstName} ${solvedMystery.suspect.lastName} killed Mr. Boddy using the ${solvedMystery.weapon.name} in the ${solvedMystery.room.name}!`
}



