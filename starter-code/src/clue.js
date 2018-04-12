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
name: Dining Room
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

var mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: src= "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: 'Entrepreneur',
}

var drOrchid = {
    firstName: 'Doctor',
    lastName: 'Orchid',
    color: 'white',
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age: 26,
    image: src= "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: 'scientist',
}

var profPlum ={
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    description: 'Billionare video game designer',
    age: 22,
    image: src= "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: 'Designer',
}

var missScarlet ={
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    color: 'red',
    description: 'She is an A-list movie star with a dark past',
    age: 31,
    image: src= "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: 'Actor',
}

var mrsPeacock ={
    firstName: 'Eleanor',
    lastName: 'Peacock',
    color: 'blue',
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    age: 36,
    image: src="https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: 'Socialite',
}

var mrMustard ={
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: 'He is a former football player who tries to get by on his former glory',
    age: 62,
    image: src="https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: 'Retired Football Player',
}

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

var rope ={
    name: 'Rope',
    weight: 10,
}

var knife ={
    name: 'Knife',
    weight: 8,
}

var candlestick ={
    name: 'candlestick',
    weight: 2,
}

var dumbbell ={
    name: 'Dumbbell',
    weight: 30,
}

var poison ={
    name: 'Poison',
    weight: 2,
}

var axe ={
    name: 'Axe',
    weight: 15,
}

var bat ={
    name: 'Bat',
    weight: 13,
}

var trophy ={
    name: 'Trophy',
    weight: 25,
}

var pistol ={
    name: 'Pistol',
    weight: 20,
}

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

var diningRoom = { room: 'Dining Room'};
var conservatory = { room: 'Conservatory'};
var kitchen = {room: 'Kitchen'};
var study = {room: 'Study'};
var library = {room: 'Library'};
var billiardRoom = {room: 'Billiard Room'};
var lounge = {room: 'Lounge'};
var ballroom = {room: 'Ballroom'};
var hall = {room: 'Hall'};
var spa = {room: 'Spa'};
var livingRoom = {room: 'Living Room'};
var observatory = {room: 'Observatory'};
var theater = {room: 'Theater'};
var guestHouse = {room: 'Guest House'};
var patio = {room: 'Patio'};

roomsArray.push(diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);

function randomSelector(array){
    var i = Math.floor(Math.random()*(array.length));
    return array[i]
}

var misteryEnvelope;

function pickMistery (){
    misteryEnvelope = [randomSelector(charactersArray),
    randomSelector(weaponsArray),
    randomSelector(roomsArray)]
    return misteryEnvelope ;
}

function revealMistery(envelope){
    return envelope[0].firstName + envelope[0].lastName + " killed Mr.Boddy using the " + envelope[1].name + " in the " + envelope[2].room + "!!!!";
}