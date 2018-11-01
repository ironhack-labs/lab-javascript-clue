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
first_name:   Doctor
last_name:    Orchid
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

var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur",
}

var drOrchid = {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:    "Scientist"
}

charactersArray.push(mrGreen, drOrchid);


// Rooms' Collection
var roomsArray = [];

var dinningRoom = {
    name: "Dinning Room"
}
var conservatory = {
    name: "Conservatory"
}

roomsArray.push(dinningRoom, conservatory);

// Weapons Collection
var weaponsArray = [];

var rope = {
    name: "rope",
    weight: 10,
}

var knife = {
    name: "knife",
    weight: 8,
}

weaponsArray.push(rope, knife);


function randomSelector(array) {

    return array[Math.floor(Math.random() * array.length)]
};

function pickMistery () {
    var assasin = randomSelector(charactersArray);
    var HomicidalWeapon = randomSelector(weaponsArray);
    var PlaceOfCrime = randomSelector(roomsArray);

    return [assasin, HomicidalWeapon, PlaceOfCrime];
}

var misteryEnvelope = pickMistery();

function revealMistery (mysteryEnvelope) { //no entiendo porqué dentro de esta función aparece mystery y tampoco de donde saca la información
    var character = mysteryEnvelope[0];
    var weapon = mysteryEnvelope[1];
    var room = mysteryEnvelope[2];
    
    //return [misteryEnvelope[0][0] + misteryEnvelope[0][1] + "killed Mr.Boddy using the " + misteryEnvelope[1][0] + " in the " + misteryEnvelope[2][0]"!!!!"]
    return character.first_name + ' ' + character.last_name + ' killed Mr.Boddy using the ' + weapon.name + ' in the ' + room.name + '!!!!';
}