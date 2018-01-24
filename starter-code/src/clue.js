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

var Rooms = [
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
];

// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];
*/
var charactersArray = [
    mrGreen = {
        first_name: "Jacob", last_name: "Green", color: "green", description:  "He has a lot of connections",
        age: 45, image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", occupation: "Entrepreneur"
    },
    drOrchid = {
        first_name: "Doctor", last_name: "Orchid", color: "white", description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        age: 26, image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg", ocupation: "Scientist"
    },
    profPlum = {
        first_name: "Victor", last_name: "Plum", color: "purple", description: "Billionare video game designer", age: 22,
        image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", occupation: "Designer"
    },
    missScarlet = {
        first_name: "Kasandra", last_name: "Scarlet", color: "red", description: "She is an A-list movie star with a dark past",
        age: 31, image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", occupation: "Actor"
    },
    mrsPeacock = {
        first_name: "Eleanor", last_name: "Peacock", color: "blue",
        description: "She is from a wealthy family and uses her status and money to earn popularity", age: 36,
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", occupation: "Socialité"
    },
    mrMustard = {    
        first_name: "Jack", last_name: "Mustard", color: "yellow",
        description: "He is a former football player who tries to get by on his former glory", age: 62, 
        image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", occupation: "Retired Football player"
    }
];
var weaponsArray = [
    rope = {
        name: "rope", weight: 10
    },
    knife = {
        name: "knife", weight: 8
    },
    candlestick = {
        name: "candlestick", weight: 2  
    },
    dumbbell = {
        name: "dumbbell", weight: 30
    },
    poison = {
        name: "poison", weight: 2
    },
    axe = {
        name: "axe", weight: 15
    },
    bat = {
        name: "bat", weight: 13
    },
    trophy = {
        name: "trophy", weight: 25 
    },
    pistol = {
        name: "pistol", weight: 20
    }
];
var roomsArray = [
    dinningRoom = {
        name: "Dinning Room"
    },
    conservatory = {
        name: "Conservatory"
    },
    kitchen = {
        name: "Kitchen"
    },
    study = {
        name: "Study"
    },
    library = {
        name: "Library"
    },
    billardRoom = {
        name: "Billiard Room" 
    },
    lounge = {
        name: "Lounge"
    },
    ballroom = {
        name: "Ballroom"
    },
    hall = {
        name: "Hall"
    },
    spa = {
        name: "Spa"
    },
    livingRoom = {
        name: "Living Room"
    },
    observatory = {
        name: "Observatory"
    },
    theater = {
        name: "Theater"
    },
    guestHouse = {
        name: "Guest House"
    },
    patio = {
        name: "Patio"
    }   
];
function randomSelector(ranArray) {
    var rand;
    var rand = ranArray[Math.floor(Math.random() * ranArray.length)];
}
function pickMistery(charactersArray, weaponsArray, roomsArray){
    var pickMystery = [];

    randomSelector(charactersArray);
    randomSelector(weaponsArray);
    randomSelector(roomsArray);

    return pickMystery(randomSelector);
}