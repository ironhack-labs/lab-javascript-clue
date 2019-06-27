/*
missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons
name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

*/
//Iteration 1 - Creating the cards
//Game Characters
// Characters
var mrGreen = {
    first_name: 'Jacob'
last_name: 'Green'
color: 'green'
description: 'He has a lot of connections'
age: 45
image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg'
occupation: 'Entrepreneur'
};

var drOrchid = {
    first_name: 'Doctor'
last_name: 'Orchid'
color: 'white'
description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy'
age: 26
image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg'
ocupation: 'Scientist'
}

var profPlum = {
    first_name: 'Victor'
last_name: 'Plum'
color: 'purple'
description: 'Billionare video game designer'
age: 22
image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg'
occupation: 'Designer'
}

//Characters Collection 
var charactersArray = ["mrGreen", "drOrchid", "profPlum", "missScarlet", "mrsPeacock", "mrsPeacock", "mrMustard"];
// Rooms Collection
var roomsArray = [
    { name: "Dinning Room" },
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
// Weapons Collection
var weaponsArray = [
    { name: 'rope', weight: 10 }, //0
    { name: 'knife', weight: 8 }, //1
    { name: 'candlestick', weight: 2 }, //2
    { name: 'dumbbell', weight: 30 },
    { name: 'poison', weight: 2 },
    { name: 'bat', weight: 13 },
    { name: 'axe', weight: 15 },
    { name: 'trophy', weight: 25 },
    { name: 'pistol', weight: 20 }
];

//Iteration 2 - Creating the mistery
//Random Selector
function randomSelector(array) {
    if (array.length === 0) {
        return undefinded
    }
    else if (array.length > 0) {
        let randomPosition = Math.floor(Math.random() * array.length)
        return array[randomPosition]
    }
}

let weapon = randomSelector(weaponsArray):
    let room = randomSelector(roomsArray);
let gameCharacter = randomSelector(charactersArray);

//Create the mystery
//we need to create a method 'misteryEnvelope' that contains all the other object (rooms, characters...) 
//(Methods are functions stored as object properties.)
/* We need to create a pickMistery method that will call randomSelector 
for each card stack, and return an array with the 3 picked cards, a character, a weapon and a room. 
Our mystery should be stored on a misteryEnvelope variable.*/

//???? I dont understand how to access the single steps 
//First misteryEnvelope variable that contains the 2 picked cards 
var misteryEnvelope = {
    weaponsArray,
    roomsArray,
    charactersArray
    //then I nedd the pickMistery method that will call randomSelector  > method means .pickMistery
}
//?????????????????????????????????????????????????

var misteryEnvelope = pickMistery(ranMath.(Math.random() * Math.floor(max));
}randomSelector.pickMistery(misteryEnvelope)
//and now I want a return of all 3 arrays (weapon, room, character) but with a random content
//?????????????????????????????????????????????????
//Iteration 3 - Revealing the mistery
/* Finally, we need to reveal the mystery. Create a revealMistery method, 
that will receive our misteryEnvelope array as an argument and return the revealed mystery 
like this:
<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!*/

return mystery { `<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!` }