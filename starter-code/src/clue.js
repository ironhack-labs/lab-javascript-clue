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


//Iteración 1

// Characters Collection

var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];

var mrGreen={
    first_name: "Jacob",
    last_name: "Green",
    color:"green",
    description: "He has a lot of conections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    ocupation: "Entreprenur"
}

var drOrchid={
    first_name: "Doctor",
    last_name: "Orchid",
    color:"white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation: "Scientist"
}

var profPLum = {
    first_name: "Victor",
    last_name: "Plum",
    color:"purple",
    description: "Billionard video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    ocupation: "Designer"
}

var missScarlet={
    first_name: "Kasandra",
    last_name: "Scarlet",
    color:"red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    ocupation: "Actor"
}

var mrsPeacock={
    first_name: "Eleanor",
    last_name: "Peacock",
    color:"blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    ocupation: "Socialité"
}

var mrMustard ={
    first_name: "Jack",
    last_name: "Mustard",
    color:"yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    ocupation: "Retired football player"
}

var rope ={
    name: "rope",
    weight: 10
}

var knife ={
    name: "knife",
    weight: 8
}

var candlestick={
    name: "candlestick",
    weight: 2
}

var dumbbell={
    name: "dumbbell",
    weight: 30
}

var poison={
    name: "poison",
    weight: 2
}

var axe={
    name: "axe",
    weight: 15
}

var bat={
    name: "bat",
    weight: 13
}

var trophy={
    name: "trophy",
    weight: 25
}

var pistol={
    name: "pistol",
    weight: 20
}

var dinning={
    name:"Dinning room"
}

var conservatory={
    name:"Conservatory"
}

var kitchen={
    name:"Kitchen"
}

var study={
    name:"Study"
}

var library={
    name:"Library"
}

var billiardRoom={
    name:"Billiard room"
}

var lounge={
    name:"Lounge"
}

var ballRoom={
    name:"Ballroom"
}

var hall={
    name:"Hall"
}

var spa={
    name:"Spa"
}

var livingRoom={
    name:"Living room"
}

var observatory={
    name:"Observatory"
}

var theater={
    name:"Theater"
}

var guestHouse={
    name:"Guest house"
}

var patio={
    name:"Patio"
}

charactersArray.push(mrGreen)
charactersArray.push(drOrchid)
charactersArray.push(profPLum)
charactersArray.push(missScarlet)
charactersArray.push(mrsPeacock)
charactersArray.push(mrMustard)

weaponsArray.push(rope)
weaponsArray.push(knife)
weaponsArray.push(candlestick)
weaponsArray.push(dumbbell)
weaponsArray.push(poison)
weaponsArray.push(axe)
weaponsArray.push(bat)
weaponsArray.push(trophy)
weaponsArray.push(pistol)

roomsArray.push(dinning)
roomsArray.push(conservatory)
roomsArray.push(kitchen)
roomsArray.push(study)
roomsArray.push(library)
roomsArray.push(billiardRoom)
roomsArray.push(lounge)
roomsArray.push(ballRoom)
roomsArray.push(hall)
roomsArray.push(spa)
roomsArray.push(livingRoom)
roomsArray.push(observatory)
roomsArray.push(theater)
roomsArray.push(guestHouse)
roomsArray.push(patio)

//Iteración 2


//Randomly select an element of an array
function randomSelector(array){
    //Math.floor(Math.random() * array.length;
    return array[Math.floor(Math.random() * array.length)]
}

//Creando el misterio por resolver
var misteryEnvelope= [

]

function pickMistery(){
    /*
    misteryEnvelope.character=randomSelector(charactersArray);
    misteryEnvelope.weapon=randomSelector(weaponsArray);
    misteryEnvelope.room=randomSelector(roomsArray);
    */
    misteryEnvelope.push(randomSelector(charactersArray))
    misteryEnvelope.push(randomSelector(weaponsArray))
    misteryEnvelope.push(randomSelector(roomsArray))
}


//Iteración 3
function revealMistery(misteryEnvelope){
    //return misteryEnvelope.character.first_name + " "+ misteryEnvelope.character.last_name + " killed Mr Boddy using the "+ misteryEnvelope.weapon.name + " in the "+ misteryEnvelope.room.name
    return misteryEnvelope[0]["first_name"]+" "+ misteryEnvelope[0]["last_name"]+" killed Mr Boddy using the " + misteryEnvelope[1]["name"] +" in the "+ misteryEnvelope[2]["name"]
}
