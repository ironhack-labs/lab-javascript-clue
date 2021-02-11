// ITERATION 1
// Suspects Collection
let mrGreen = {
firstName: "Jacob",
lastName: "Green",
occupation: "Entrepreneur",
age: 45,
description: "He has a lot of connections",
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
color: "green"
}
let drOrchid = {
firstName: "Doctor",
lastName: "Orchid",
occupation: "Scientist",
age: 26,
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
color: "white"
}
let profPlum = {
firstName: "Victor",
lastName: "Plum",
occupation: "Designer",
age: 22,
description: "Billionaire video game designer",
image:"https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
color: "purple"
}
let missScarlet = {
firstName: "Kasandra",
lastName: "Scarlet",
occupation: "Actor",
age: 31,
description: "She is an A-list movie star with a dark past",
image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
color: "red"
}
let mrsPeacock = {
firstName: "Eleanor",
lastName: "Peacock",
occupation: "Socialité",
age: 36,
description: "She is from a wealthy family and uses her status and money to earn popularity",
color: "blue"
}
let mrMustard = {
firstName: "Jack",
lastName: "Mustard",
occupation: "Retired Football player",
age: 62,
description: "He is a former football player who tries to get by on his former glory",
image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
color: "yellow",
}

const suspectsArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];

// Rooms Collection
class Room {
    constructor(name){
        this.name=name;
    }
}
const roomsArray = [new Room("Dining Room"),new Room("Conservatory"),
new Room("Kitchen"), new Room("Study"), new Room("Library"), new Room("Billiard Room"),
new Room("Lounge"), new Room("Ballroom"), new Room("Hall"), new Room("Spa"),
new Room("Living Room"), new Room("Observatory"), new Room("Theater"), new Room("Guest House"),
new Room("Patio")];
// console.log(roomsArray);

// Weapons Collection
class Weapon {
    constructor(name, weight){
        this.name= name;
        this.weigt= weight;
    }
}

const weaponsArray = [new Weapon("rope",10),new Weapon("knife",8),new Weapon("candlestick",2),
new Weapon("dumbbell",30),new Weapon("poison",2),new Weapon("axe",15),
new Weapon("bat",13), new Weapon("trophy",25), new Weapon("pistol",20)];
// console.log(weaponsArray);
// ITERATION 2
function selectRandom (arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}
function pickMystery () {
    // returns an object with three properties: suspect, weapon and room
    // each holding as a value a card of that specific type
    let mystery = {
        suspect : selectRandom(suspectsArray),
        weapon : selectRandom(weaponsArray),
        room : selectRandom(roomsArray)
    }
    return mystery;
}
// console.log(pickMystery());

// ITERATION 3
function revealMystery(object) {
    //<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!
    return `${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`
}
// let mystery1 = pickMystery()
// console.log(revealMystery(mystery1))