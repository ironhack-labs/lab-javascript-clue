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
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
}

const drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:    "Scientist"
}

const profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionaire video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
}

const missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"  
}

const mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
}

const mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
}

// weapons

const rope = {
    name: "rope",
    weight: 10
}

const knife = {
    name: "knife",
    weight: 8
}

const candlestick = {
    name: "candlestick",
    weight: 2
}

const dumbbell = {
    name: "dumbbell",
    weight: 30
}

const poison = {
    name: "poison",
    weight: 2
}

const axe = {
    name: "axe",
    weight: 15
}

const bat = {
    name: "bat",
    weight: 13
}

const trophy = {
    name: "trophy",
    weight: 25
}

const pistol = {
    name: "pistol",
    weight: 20
}

// Rooms

const diningroom = {
    name: "Dining Room"
}

const conservatory = {
    name: "Conservatory" 
}

const    kitchen = {
    name: "Kitchen"
}

const   study = {
    name: "Study"
}

const  library = {
    name: "Library" 
}

const  billiardroom = {
    name: "Billiard Room" 
}

const   lounge = {
    name: "Lounge"
}

const  ballroom = {
    name:  "Ballroom" 
}

const   hall = {
    name: "Hall"
}

const   spa = {
    name: "Spa" 
}

const   livingroom = {
    name: "Living Room"
}

const    observatory = {
    name: "Observatory" 
}

const   theater = {
    name: "Theater"
}

const    guesthouse = {
    name: "Guest House"
}

const    patio = {
    name: "Patio"
}

// Characters Collection
const charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Collection
const roomsArray = [diningroom, conservatory, kitchen, study, library, billiardroom, lounge, ballroom, hall, spa, livingroom, observatory, theater, guesthouse, patio]

// Weapons Collection
const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

// Create a function randomSelector to randomly select one element from a card stack. The method should receive an array as an argument, and return randomly one of the elements of the array.

function randomSelector(arrayname) {
  return arrayname[Math.floor(Math.random() * arrayname.length)]
}

// We need to create a pickMystery function that will call randomSelector for each card stack, and return an object with the 3 picked cards, a suspect, a weapon and a room. Our mystery should be stored on a mysteryEnvelope variable.
let mysteryEnvelope = {}

function pickMystery() {
  mysteryEnvelope.suspect = randomSelector(charactersArray)
  mysteryEnvelope.weapon = randomSelector(weaponsArray)
  mysteryEnvelope.room = randomSelector(roomsArray)
  return mysteryEnvelope
}

/*
Finally, we need to reveal the mystery. Create a revealMystery function, that will receive our mysteryEnvelope object as an argument and return the revealed mystery like this:

<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!!!!
*/
function revealMystery (a) {
  let fname = a.suspect['first_name']
  let lname = a.suspect['last_name']
  let weapon = a.weapon['name']
  let room = a.room.name
  return `${fname} ${lname} killed Mr. Boddy using the ${weapon} in the ${room}!!!!`
}

pickMystery()
revealMystery(mysteryEnvelope)