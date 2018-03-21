// Characters

var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
}
var drOrchid = {
frst_name:   "Doctor",
lst_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"
}

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
}
var missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
}
var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
}
var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"
}
// Weapons

var rope = {
    weight: 10
}      
var knife = {
    weight: 8
}     

var candlestick = {
    weight: 2
}

var dumbbell = {
    weight: 30
}

var poison = {
    weight: 2
}
var axe = {
    weight: 15
}


var bat = {
    weight: 13
}        
var trophy = {
    weight: 25
}     
var pistol = {
    weight: 20
}  

// Rooms
var rooms = [
    "Dinning Room",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "Billiard Room",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "Living Room",
    "Observatory",
    "Theater",
    "Guest House",
    "Patio"
]

// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)
// Rooms' Collection
var roomsArray = [];
roomsArray.push(rooms)
// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol)

function randomSelector (arr){
    if (arr.length === 0){
        return undefined;
    }
   var random = arr[Math.floor(Math.random() * arr.length)];
   return random
}