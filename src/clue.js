// ITERATION 1

// Suspects Array

const suspectsArray = [];


class Suspects {
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
const mrGreen = new Suspects('Jacob', 'Green', 'Enterpreneur', 45, 'he has a lot ofconnections', 'https:// pbs.twimg.com / profile_images / 506787499331428352 / 65jTv2uC.jpeg', 'green')
const drOrchid = new Suspects('Doctor', 'Orchid', 'Scientis', 26, 'PhD in plant toxicology.Adopted daughter of Mr.Boddy', 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'white')
const profPlum = new Suspects('Victor', 'Plum', 'designer', 22, 'Billionaire video game designer', ' https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg', 'purple')
const missScarlet = new Suspects('kasandra', 'Scarlet', 'Actor', 31, 'She is an A - list movie star with a dark past', ' https://www.radiotimes.com/uploads/images/Original/111967.jpg', 'red')
const mrsPeacock = new Suspects('Eleanor', 'Peacock', 'Socialité', 36, 'She is from a wealthy family and uses her status and money to earn popularity', ' https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'blue')
const mrMustard = new Suspects('Jack', 'Mustard', 'Retired Football player', 62, 'He is a former football player who tries to get by on his former glory', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg', 'yellow')


suspectsArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)

console.log(suspectsArray)
// Rooms Array

const roomsArray = [];

class Rooms {
    constructor(nameRoom) {
        this.Rooms = nameRoom
    }

}
const firstRoom = new Rooms('Dining Room')
const secondRoom = new Rooms('Conservatory')
const thirdRoom = new Rooms('kitchen')
const fourthRoom = new Rooms('Study')
const fifthRoom = new Rooms('library')
const sixthRoom = new Rooms('Billard Room')
const seventhRoom = new Rooms('Lounge')
const eighthRoom = new Rooms('Ballroom')
const ninthRoom = new Rooms('hall')
const tenthRoom = new Rooms('Spa')
const eleventhRoom = new Rooms('Living Room')
const twelfthRoom = new Rooms('Billard Observatory')
const thirteenthRoom = new Rooms('Theater')
const fourteenthRoom = new Rooms('Guest House')
const fifteenthRoom = new Rooms('Patio')

roomsArray.push(firstRoom, secondRoom, thirdRoom, fourthRoom, fifthRoom, sixthRoom, seventhRoom, eighthRoom, ninthRoom, tenthRoom, eleventhRoom, twelfthRoom, thirteenthRoom, fourteenthRoom, fifteenthRoom)
console.log(roomsArray)




// Weapons Array

const weaponsArray = [];

class Weapons {
    constructor(nameValue = '', weigthValue = Number) {
        this.name = nameValue
        this.weigth = weigthValue
    }

}

const weapon1 = new Weapons('rope', 10)
const weapon2 = new Weapons('knife', 8)
const weapon3 = new Weapons('candlestick', 2)
const weapon4 = new Weapons('dumbell', 30)
const weapon5 = new Weapons('poison', 2)
const weapon6 = new Weapons('axe', 15)
const weapon7 = new Weapons('bat', 13)
const weapon8 = new Weapons('trophy', 25)
const weapon9 = new Weapons('pistol', 20)

weaponsArray.push(weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9)
console.log(weaponsArray)




// ITERATION 2

function selectRandom() {

    const array = []
    for (let i = 0; i < array.length; i++) {
        return array.splice(i, 1)
    }

}

selectRandom


function pickMystery() {
    let suspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)]
    let room = roomsArray[Math.floor(Math.random() * roomsArray.length)]
    let weapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)]

    return { suspect, room, weapon }

}
pickMystery






// ITERATION 3

function revealMystery() {

    return `${firstName} ${lastName}, killed Mr. Boddy using the, ${weapon} in the, ${room}!`
}

revealMystery







