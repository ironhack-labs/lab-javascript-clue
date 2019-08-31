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
occupation:    Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionaire video game designer
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

const mrGreen = {
    first_name: 'Jacob',
    last_name: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation: 'Entrepreneur'
}

const drOrchid = {
    first_name: 'Doctor',
    last_name: 'Orchid',
    color: 'white',
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age: 26,
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation: 'Scientist'
}

const profPlum = {
    first_name: 'Victor',
    last_name: 'Plum',
    color: 'purple',
    description: "Billionaire video game designer",
    age: 22,
    image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation: 'Designer'
}

 const missScarlet = {
     first_name: 'Kasandra',
     last_name: 'Scarlet',
     color: 'red',
     description: 'She is an A-list movie star with a dark past',
     age: 31,
     image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
     occupation: 'Actor'
 }

const mrsPeacock = {
    first_name: 'Eleanor',
    last_name: 'Peacock',
    color: 'blue',
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    age: 36,
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation: 'Socialité'
}

const mrMustard = {
    first_name: 'Jack',
    last_name: 'Mustard',
    color: 'yellow',
    description: 'He is a former football player who tries to get by on his former glory',
    age: 62,
    image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation: 'Retired Football player'
}



const dinning = {name: 'Dining Room'}
const convervatory = {name: 'Conservatory'}
const kitchen = {name: 'Kitchen'}
const study = {name: 'Study'}
const library = {name: 'Library'}
const billiard = {name: 'Billiard Room'}
const lounge = {name: 'Lounge'}
const ballroom = {name: 'Ballroom'}
const hall = {name: 'Hall'}
const spa = {name: 'Spa'}
const living = {name: 'Living Room'}
const observatory = {name: 'Observatory'}
const theater = {name: 'Theater'}
const guest = {name: 'Guest House'}
const patio = {name: 'Patio'}


const rope = {name: 'rope', weight: 10}
const knife = {name: 'knife', weight: 8}
const candlestick = {name: 'candlestick', weight: 2}
const dumbbell = {name: 'dumbbell',weight: 30}
const poison = {name: 'poison', weight: 2}
const axe = {name: 'axe', weight: 15}
const bat = {name: 'bat', weight: 13}
const trophy = {name: 'trophy', weight: 25}
const pistol = {name: 'pistol', weight: 20}



/* let charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
let weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];
let roomsArray = [dinning, convervatory, kitchen, study, library, billiard, lounge, ballroom, hall, spa,
    living, observatory, theater, guest, patio]; */



// Characters Collection
const charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Collection
const roomsArray = [dinning, convervatory, kitchen, study, library, billiard, lounge, ballroom, hall, spa,
    living, observatory, theater, guest, patio];

// Weapons Collection
const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

function randomSelector(array){
    if(array.length == 0){
        return undefined;
    }

    return array[Math.floor(Math.random()*array.length)];
}

function pickMystery(){

    const  mysteryEnvelope = {
        suspect : randomSelector(charactersArray),
        weapon : randomSelector(weaponsArray),
        room : randomSelector(roomsArray)
    }

    return mysteryEnvelope;    
}

function revealMystery(mysteryEnvelope){
    let firstname = mysteryEnvelope.suspect.first_name;
    let lastname = mysteryEnvelope.suspect.last_name;
    let weapon = mysteryEnvelope.weapon.name;
    let room = mysteryEnvelope.room.name;
    return `${firstname} ${lastname} killed Mr. Boddy using the ${weapon} in the ${room}!!!!`;
}