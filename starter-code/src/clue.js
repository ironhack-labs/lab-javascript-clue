

let mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
}

let drOrchid= {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
}

let profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
}

let missScarlet ={
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
}

let mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
}


let MrMustard ={
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
}


// Weapons
let weapon1={
    name: "rope",
     weight: 10
}


let weapon2={
    name: "knife",
    weight: 8
}

let weapon3={
    name: "candlestick",
    weight: 2
}
let weapon4={
    name: "dumbbell",
    weight: 30
}
let weapon5={
    name: "poison",
    weight: 2
}
let weapon6={
    name: "axe",
    weight: 15
}

let weapon7={
    name: "bat",
    weight: 13
}
let weapon8={
    name: "trophy",
    weight: 25
}
let weapon9={
    name: "pistol",
    weight: 20
}




// Rooms
let room1= {
    name: "Dinning Room"
}

let room2= {
    name: "Conservatory"
}

let room3= {
    name: "Kitchen"
}

let room4= {
    name: "Study"
}

let room5= {
    name: "Library"
}

let room6= {
    name: "Billiard Room"
}

let room7= {
    name: "Ballroom"
}

let room8= {
    name: "Hall"
}

let room9= {
    name: "Spa"
}

let room10= {
    name: "Living Room"
}

let room11= {
    name: "Observatory"
}

let room12= {
    name: "Theater"
}

let room13= {
    name: "Guest House"
}

let room14= {
    name: "Patio"
}

// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,MrMustard)

// Rooms' Collection
var roomsArray = [];
roomsArray.push(room1,room2,room3,room4,room5,room6,room7,room8,room9,room10,room11,room12,room13,room14)

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(weapon1,weapon2,weapon3,weapon4,weapon5,weapon6,weapon7,weapon8,weapon9)


function randomSelector (array){
    let numeroarray=array.length
    let numero=Math.floor(Math.random()*numeroarray)
    return(array[numero]);
}


function pickMistery (x, y, z){
    let a=randomSelector(x)
    let b=randomSelector(y)
    let c=randomSelector(z)
    let misteryEnvelope = [a,b,c]
    
    return misteryEnvelope
}

let miArr = pickMistery(charactersArray, roomsArray, weaponsArray);

function revealMistery (data){
  let fname = data[0].first_name
  let lname = data[0].last_name
  let weapon= data[2].name
  let room= data[1].name
    console.log(fname + " "+ lname + " killed Mr. Boddy using the " + weapon + " in the " + room)
}

revealMistery(miArr)
