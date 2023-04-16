// ITERATION 1
class Suspect {
    constructor(firstName, lastName, occupation, age, description, image, color) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.occupation = occupation,
            this.age = age,
            this.description = description,
            this.image = image,
            this.color = color
    }
}
const mrGreen = new Suspect("Jacob", "Green", "Entrepreneur", 45, "He has a lot of connections", "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "green")
const drOrchid = new Suspect("Doctor", "Orchid", "Scientist", 26, "PhD in plant toxicology. Adopted daughter of Mr. Boddy", "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "white")
const profPlum = new Suspect("Victor", "Plum", "Designer", 22, "He has a lot of connectionsBillionaire video game designer", "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", "purple")
const missScarlet = new Suspect("Kasandra", "Scarlet", "Actor", 31, "She is an A-list movie star with a dark pastHe has a lot of connections", "https://www.radiotimes.com/uploads/images/Original/111967.jpg", "red")
const mrsPeacock = new Suspect("Eleano", "Peacock", "Socialité", 36, "She is from a wealthy family and uses her status and money to earn popularity", "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "blue")
const mrMustard = new Suspect("Jack", "Mustard", "Retired Football player", 62, "He is a former football player who tries to get by on his former glory", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", "yellow")


// Suspects Array
const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

//Weapons

class Weapons {
    constructor(name, weight) {
        this.name = name,
            this.weight = weight
    }
}

const rope = new Weapons("rope", 10)
const knife = new Weapons("knife", 8)
const dumbbell = new Weapons("dumbbell", 30)
const candlestick = new Weapons("candlestick", 2)
const poison = new Weapons("poison", 2)
const axe = new Weapons("axe", 15)
const bat = new Weapons("bat", 13)
const trophy = new Weapons("trophy", 25)
const pistol = new Weapons("pistol", 20)

// Weapons Array

const weaponsArray = [rope, knife, dumbbell, candlestick, poison, axe, bat, trophy, pistol];

//roms

class Room {
    constructor(name) {
        this.name = name
    }
}

const diningRoom = new Room("Dinning Room")
const conservatory = new Room("Conservatorty")
const study = new Room("Study")
const kitchen = new Room("Kitchen")
const library = new Room("Library")
const billiardRoom = new Room("Billiard Room")
const lounge = new Room("Lounge")
const ballroom = new Room("Ballroom")
const hall = new Room("Hall")
const spa = new Room("Spa")
const livingRoom = new Room("Living Room")
const observatory = new Room("Observatory")
const theater = new Room("Theater")
const guestHouse = new Room("Guest House")
const patio = new Room("Patio")

// Rooms Array
const roomsArray = [diningRoom, conservatory, study, kitchen, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];



// ITERATION 2

function selectRandom(array) {
    const random = array[Math.floor(Math.random() * array.length)]
    return random
}

function pickMystery() {


    const mistery = {
        room: selectRandom(roomsArray),
        weapon: selectRandom(weaponsArray),
        suspect: selectRandom(suspectsArray)

    }
    return mistery
}


// ITERATION 3

function revealMystery(mistery) {

    return `${mistery.suspect.firstName} ${mistery.suspect.lastName} killed Mr. Boddy using the ${mistery.weapon.name} in the ${mistery.room.name}!`
}

