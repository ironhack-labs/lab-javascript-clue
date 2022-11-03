// ITERATION 1

// Suspects Array

const suspectsArray = [
        {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: `https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg`,
        color: "green"}, 
        {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: `http://www.radiotimes.com/uploads/images/Original/111967.jpg`,
        color: "white"}, 
        {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: `https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg`,
        color: "purple"},
        {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: `https://www.radiotimes.com/uploads/images/Original/111967.jpg`,
        color: "red"},
        {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: `https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg`,
        color: "blue"},
        {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: `https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg`,
        color: "yellow"}
];

// Rooms Array

const roomsArray = [
    {name: "Dining Room"}, {name: "Conservatory"}, {name: "Kitchen"}, {name: "Study"}, {name: "Library"}, { name: "Billiard Room"}, 
    {name: "Lounge"}, {name: "Ballroom"}, {name: "Hall"}, {name: "Spa"}, {name: "Living Room"}, {name: "Observatory"}, {name: "Theater"}, 
    {name: "Guest House"}, {name: "Patio"}
];

// Weapons Array

const weaponsArray = [
    {name: "rope", weight: 10}, {name: "knife", weight: 8}, {name: "candlestick", weight: 2}, {name: "dumbbell", weight: 30}, 
    {name: "poison", weight: 2}, {name: "axe", weight: 15}, {name: "bat", weight: 13}, {name: "trophy", weight: 25}, {name: "pistol", weight: 20}
];

// ITERATION 2

// Declare a function named selectRandom to randomly select one element from a card stack. 
// The function should expect an array as an argument, and should return a random object from the array.

function selectRandom(arr) {
    let randomNum = Math.floor(Math.random() * (arr.length));
    return arr[randomNum];
}

// Declare a function named pickMystery that takes no arguments
// it returns an object with three properties: suspect, weapon and room, each holding as a value a card of that specific type. 
// You can get a random card of each type by calling selectRandom on each card stack.

function pickMystery() {
    const randomSuspectIndex = Math.floor(Math.random() * (suspectsArray.length));
    const randomWeaponIndex = Math.floor(Math.random() * (weaponsArray.length));
    const randomRoomIndex = Math.floor(Math.random() * (roomsArray.length));

    let pickMysteryArr = [];
    pickMysteryArr.push(suspectsArray[randomSuspectIndex]);
    pickMysteryArr.push(weaponsArray[randomWeaponIndex]);
    pickMysteryArr.push(roomsArray[randomRoomIndex]);

    const initialObj = {};
    pickMysteryArr.forEach(function (element, index) {
        initialObj['key' + index] = element;
    }); 

    initialObj.suspect = initialObj.key0;
    initialObj.weapon = initialObj.key1;
    initialObj.room = initialObj.key2;

    return initialObj
}

// ITERATION 3

// Declare a function named revealMystery that receives an envelope object (with the shape of the object returned by pickMystery) as the single argument, 
// and returns a reveal message in the following format:
// <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!

function revealMystery() {
    const randomSuspectIndex = Math.floor(Math.random() * (suspectsArray.length));
    const randomWeaponIndex = Math.floor(Math.random() * (weaponsArray.length));
    const randomRoomIndex = Math.floor(Math.random() * (roomsArray.length));

    let pickMysteryArr = [];
    pickMysteryArr.push(suspectsArray[randomSuspectIndex]);
    pickMysteryArr.push(weaponsArray[randomWeaponIndex]);
    pickMysteryArr.push(roomsArray[randomRoomIndex]);

    const initialObj = {};
    pickMysteryArr.forEach(function (element, index) {
        initialObj['key' + index] = element;
    });
    initialObj.suspect = initialObj.key0;
    initialObj.weapon = initialObj.key1;
    initialObj.room = initialObj.key2;

    return `${initialObj.suspect.firstName} ${initialObj.suspect.lastName} killed Mr. Boddy using the ${initialObj.weapon.name} in the ${initialObj.room.name}!`
};