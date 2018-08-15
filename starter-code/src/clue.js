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

// Character Class

class Character {

    constructor(firstName,
                lastName,
                color,
                description,
                age,
                image,
                occupation) {

        this.first_name = firstName;
        this.last_name = lastName;
        this.color = color;
        this.description = description;
        this.age = age;
        this.image = image;
        this.occupation = occupation;
    }
}

// Creating Characters in charactersArray

charactersArray = [
    new Character("Jacob", "Green", "green", "He has a lot of connections", 45, "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur"),
    new Character("Doctor", "Orchid", "white", "PhD in plant toxicology. Adopted daughter of Mr. Boddy", 26, "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "Scientist"),
    new Character("Victor", "Plum", "purple", "Billionare video game designer", 22, "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", "Designer"),
    new Character("Kasandra", "Scarlet", "red", "She is an A-list movie star with a dark past", 31, "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", "Actor"),
    new Character("Eleanor", "Peacock", "blue", "She is from a wealthy family and uses her status and money to earn popularity", 36, "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "Socialité"),
    new Character("Jack", "Mustard", "yellow", "He is a former football player who tries to get by on his former glory", 62, "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", "Retired Football player")
];


// Room Class

class Room {

    constructor(name) {

        this.name = name;
    }
}

// Creating Rooms in roomsArray

roomsArray = [
    new Room("Dinning Room"),
    new Room("Conservatory"),
    new Room("Kitchen"),
    new Room("Study"),
    new Room("Library"),
    new Room("Billiard Room"),
    new Room("Lounge"),
    new Room("Ballroom"),
    new Room("Hall"),
    new Room("Spa"),
    new Room("Living Room"),
    new Room("Observatory"),
    new Room("Theater"),
    new Room("Guest House"),
    new Room("Patio")
];

// Weapon Class

class Weapon {

    constructor(name,
                weight) {

        this.name = name;
        this.weight = weight;
    }
}

// Creating Weapons in weaponsArray

weaponsArray = [
    new Weapon("rope", 10),
    new Weapon("knife", 8),
    new Weapon("candlestick", 2),
    new Weapon("dumbbell", 30),
    new Weapon("poison", 2),
    new Weapon("axe", 15),
    new Weapon("bat", 13),
    new Weapon("trophy", 25),
    new Weapon("pistol", 20)
];

// Creating randomSelector function

function randomSelector(arr) {

    if(arr.length === 0) return;
    if(arr.length === 1) return arr[0];

    return arr[Math.floor(Math.random() * arr.length)];
}

// Creating pickMistery function and misteryEnvelope variable

function pickMistery() {

    let result = [];

    result.push(
        randomSelector(charactersArray),
        randomSelector(weaponsArray),
        randomSelector(roomsArray)
    );

    return result;
}

let misteryEnvelope = pickMistery();

// Creating revealMistery function

function revealMistery(misteryEnvelope) {

    return `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`;

}



