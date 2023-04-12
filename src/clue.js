// ITERATION 1

// Suspects Array

const suspectsArray = [];
let suspect1 = {
    firstName: "Jon",
    lastName: "Snow",
    occupation: "Nigth's Watch",
    age: 28,
    description: "Doesn't want to be king",
    image: "Dark Hair",
    color: "Caucasian"
}

let suspect2 = {
    firstName: "Cersei",
    lastName: "Lannister",
    occupation: "Queen Mother",
    age: 39,
    description: "Want's to be queen",
    image: "Blonde hair",
    color: "Caucasian"
}

let suspect3 = {
    firstName: "Missandei",
    lastName: "of Naath",
    occupation: "Councelor",
    age: 27,
    description: "Want's to serve Daenerys",
    image: "Dark Hair",
    color: "Brown skin"
}

let suspect4 = {
    firstName: "Jorah",
    lastName: "Mormont",
    occupation: "Knigth",
    age: 46,
    description: "Want's to be pardoned",
    image: "Blonde hair",
    color: "Caucasian"
}

let suspect5 = {
    firstName: "Arya",
    lastName: "Stark",
    occupation: "Blade Dancer",
    age: 18,
    description: "Want's to kill Cersei",
    image: "Dark hair",
    color: "Caucasian"
}

let suspect6 = {
    firstName: "Theon",
    lastName: "Greyjoy",
    occupation: "Traveler",
    age: 46,
    description: "Want's to get back the iron Islands",
    image: "Dark hair",
    color: "Caucasian"
}

suspectsArray.push(suspect1, suspect2, suspect3, suspect4, suspect5, suspect6);



// Rooms Array

const roomsArray = [];

let room1={
    name:"Dungeon"
}
let room2={
    name:"Basement 1"
}
let room3={
    name:"Basement 2"
}
let room4={
    name:"Dragon's Den"
}
let room5={
    name:"Dungeon"
}
let room6={
    name:"King's Room"
}
let room7={
    name:"Queen's Room"
}
let room8={
    name:"Maiden's Room"
}
let room9={
    name:"Servant's Room"
}
let room10={
    name:"Kid's room"
}
let room11={
    name:"Dungeon 2"
}
let room12={
    name:"Tower"
}
let room13={
    name:"Living Room"
}
let room14={
    name:"Hallway"
}
let room15={
    name:"Beach"
}

roomsArray.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15);

//console.log(roomsArray[0]);


// Weapons Array

let weapon1 = {
    name:"Dagger",
    weight:1
}

let weapon2 = {
    name:"Poison",
    weight:0.1
}

let weapon3 = {
    name:"Sword",
    weight:3
}

let weapon4 = {
    name:"Bottle",
    weight:0.5
}

let weapon5 = {
    name:"Gun",
    weight:0.8
}

let weapon6 = {
    name:"Fire",
    weight:0.1
}

let weapon7 = {
    name:"Knife",
    weight:0.6
}

let weapon8 = {
    name:"Hammer",
    weight:3
}

let weapon9 = {
    name:"Hatchet",
    weight:5
}

const weaponsArray = [];
weaponsArray.push(weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9);


// ITERATION 2

function selectRandom(arr) {

    return arr[Math.floor(Math.random()*arr.length)];
}

console.log(selectRandom(weaponsArray));

function pickMystery() {

    let randomSuspect = selectRandom(suspectsArray);
    let randomRoom = selectRandom(roomsArray);
    let randomWeapon = selectRandom(weaponsArray);

    let randomMistery = {
        suspect: randomSuspect,
        room: randomRoom,
        weapon: randomWeapon
    }

    return randomMistery;
 }



// ITERATION 3

function revealMystery(randomMistery) {

return `${randomMistery.suspect.firstName} ${randomMistery.suspect.lastName} killed Mr. Boddy using the ${randomMistery.weapon.name} in the ${randomMistery.room.name}!`;

}

