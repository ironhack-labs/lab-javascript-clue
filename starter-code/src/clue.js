// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
frst_name:   Doctor
lst_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

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

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];


//start of characters
var mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: url("https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg"),
    occupation: "Entrepreneur"
};

charactersArray.push(mrGreen);

var drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: url("http://www.radiotimes.com/uploads/images/Original/111967.jpg"),
    occupation: "Scientist"
};

charactersArray.push(drOrchid);

var profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: url("https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg"),
    occupation: "Designer"
};
charactersArray.push(profPlum);
var missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: url("https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg"),
    occupation: "Actor"
};
charactersArray.push(missScarlet);
var mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: url("https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg"),
    occupation: "Socialité"
};
charactersArray.push(mrsPeacock);
var mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: url("https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg"),
    occupation: "Retired Football player"
};
charactersArray.push(mrMustard);

//start of weapons
var rope = {
    name: "rope",
    weight: 10
};
weaponsArray.push(rope);
var knife = {
    name: "knife",
    weight: 8
};
weaponsArray.push(knife);
var candlestick = {
    name: "candlestick",
    weight: 2
};
weaponsArray.push(candlestick);
var dumbbell = {
    name: "dumbbell",
    weight: 30
};
weaponsArray.push(dumbbell);
var poison = {
    name: "poison",
    weight: 2
};
weaponsArray.push(poison);
var axe = {
    name: "axe",
    weight: 15
};
weaponsArray.push(axe);
var bat = {
    name: "bat",
    weight: 13
};
weaponsArray.push(bat);
var trophy = {
    name: "trophy",
    weight: 25
};
weaponsArray.push(trophy);
var pistol = {
    name: "pistol",
    weight: 20
};
weaponsArray.push(pistol);

//start of rooms
var dinningRoom = {
    name: "Dinning Room"
};
roomsArray.push(dinningRoom);
var Conservatory = {
    name: "Conservatory"
};
roomsArray.push(Conservatory);
var Kitchen = {
    name: "Kitchen"
};
roomsArray.push(Kitchen);
var Study = {
    name: "Study"
};
roomsArray.push(Study);
var Library = {
    name: "Library"
};
roomsArray.push(Library);
var billiardRoom = {
    name: "Billiard Room"
};
roomsArray.push(billiardRoom);
var Lounge = {
    name: "Lounge"
};
roomsArray.push(Lounge);
var Ballroom = {
    name: "Ballroom"
};
roomsArray.push(Ballroom);
var Hall = {
    name: "Hall"
};
roomsArray.push(Hall);
var Spa = {
    name: "Spa"
};
roomsArray.push(Spa);
var livingRoom = {
    name: "Living Room"
};
roomsArray.push(livingRoom);
var Observatory = {
    name: "Observatory"
};
roomsArray.push(Observatory);
var Theater = {
    name: "Theater"
};
roomsArray.push(Theater);
var guestHouse = {
    name: "Guest House"
};
roomsArray.push(guestHouse);
var Patio = {
    name: "Patio"
};
roomsArray.push(Patio);

function randomSelector(cardStack) {
    return cardStack[Math.floor(Math.random() * (cardStack.length))]
}

function pickMistery() {

    var misteryEnvelope = [];
    var rCharacter = randomSelector(charactersArray);
    var rWeapon = randomSelector(weaponsArray);
    var rPlace = randomSelector(roomsArray);


    misteryEnvelope.push(rCharacter, rWeapon, rPlace);

    return misteryEnvelope;
}


function revealMistery(misteryEnvelope) {
    return (misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + "killed Mr.Boddy using the " + misteryEnvelope[1].name + "in the" + misteryEnvelope[2].name + "!!!")

}

