/* 
* Elba Chimilio
* Project: Clue Game
* Description: The Clue Game assigns three differect stacks (arrays) of cards for: suspect, weapon, and room.
* It has functions randomSelector() which chooses a random card from each stack (array). Returns an array.
* The pickMystery() function calls randomSelector() and assigns each random suspect, weapon, and room. 
* Returns mysterEnvelope object containing each.
* The revealMystery() takes in the mysteryEnvelope obj and prints out the result.
*/

// Characters Collection
const charactersArray = [
    mrGreen = {
        first_name: "Jacob", last_name: "Green", color: "green",
        description: "He has a lot of connections", age: 45,
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        occupation: "Entrepreneur"
    },
    drOrchid = {
        first_name: "Doctor", last_name: "Orchid", color: "white",
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        age: 26, image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        occupation: "Scientist"
    },
    profPlum = {
        first_name: "Victor", last_name: "Plum", color: "purple",
        description: "Billionaire video game designer", age: 22,
        image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        occupation: "Designer"
    },
    missScarlet = {
        first_name: "Kasandra", last_name: "Scarlet", color: "red",
        description: "She is an A-list movie star with a dark past", age: 31,
        image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
        occupation: "Actor"
    },
    mrsPeacock = {
        first_name: "Eleanor", last_name: "Peacock", color: "blue",
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        age: 36, image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        occupation: "Socialité"
    },
    mrMustard = {
        first_name: "Jack", last_name: "Mustard", color: "yellow",
        description: "He is a former football player who tries to get by on his former glory",
        age: 62, image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
        occupation: "Retired Football player"
    }
];

// Rooms Collection
const roomsArray = [
    { name: "Dining Room" },
    { name: "Conservatory" },
    { name: "Dining Room" },
    { name: "Conservatory" },
    { name: "Kitchen" },
    { name: "Study" },
    { name: "Library" },
    { name: "Billiard Room" },
    { name: "Lounge" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa" },
    { name: "Living Room" },
    { name: "Observatory" },
    { name: "Theater" },
    { name: "Guest House" },
    { name: "Patio" }
];

//Weapons Collection
const weaponsArray = [
    { name: "rope", weight: 10 },
    { name: "knife", weight: 8 },
    { name: "candlestick", weight: 2 },
    { name: "poison", weight: 2 },
    { name: "axe", weight: 15 },
    { name: "trophy", weight: 25 },
    { name: "pistol", weight: 20 }
];

//randomSelector() chooses a random card from each stack (array). Returns that random array
function randomSelector(arr) {

    var randomArr = arr[Math.floor(Math.random() * arr.length)];
    return randomArr;

};

//pickMystery() function calls randomSelector() and assigns each random suspect, weapon, and room
//Returns mysterEnvelope object containing each
function pickMystery() {

    let character = randomSelector(charactersArray);
    let weapon = randomSelector(weaponsArray);
    let room = randomSelector(roomsArray);

    return mysteryEnvelope = {
        suspect: character,
        weapon: weapon,
        room: room,
    }

};

//The revealMystery() takes in the mysteryEnvelope obj and prints out the result
function revealMystery(mysteryEnvelope) {

    let mysteryRevealed = mysteryEnvelope.suspect.first_name + " " + mysteryEnvelope.suspect.last_name
        + " killed Mr. Boddy using the " + mysteryEnvelope.weapon.name + " in the " + mysteryEnvelope.room.name + "!!!!";
    return mysteryRevealed;
    // return mysteryEnvelope;

};

revealMystery(pickMystery()); //calls revealMystery() function