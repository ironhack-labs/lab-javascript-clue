// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [
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
];

// Weapons Collection
var weaponsArray = [];

function Character(first, last, color, description, age, image, occupation) {
    this.first_name = first;
    this.last_name = last;
    this.color = color;
    this.description = description;
    this.age = age;
    this.image = image;
    this.occupation = occupation;
    this.pushToTheList = function() {
        charactersArray.push(this);
    }
    this.pushToTheList();
}

function Weapon(name, weight) {
    this.name = name;
    this.weight = weight;
    this.pushToTheList = function() {
        weaponsArray.push(this);
    }
    this.pushToTheList();
}

var mrGreen = new Character(
    "Jacob",
    "Green",
    "green",
    "He has a lot of connections",
    45,
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    "Entrepreneur"
);

var drOrchid = new Character(
    "Doctor",
    "Orchid",
    "white",
    "PhD in plant toxicology.Adopted daughter of Mr.Boddy",
    26,
    "http: //www.radiotimes.com/uploads/images/Original/111967.jpg",
    "Scientist"
);

var profPlum = new Character(
    "Victor",
    "Plum",
    "purple",
    "Billionare video game designer",
    22,
    "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    "Designer"
);

var missScarlet = new Character(
    "Kasandra",
    "Scarlet",
    "red",
    "She is an A-list movie star with a dark past",
    31,
    "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    "Actor"
);

var mrsPeacock = new Character(
    "Eleanor",
    "Peacock",
    "blue",
    "She is from a wealthy family and uses her status and money to earn popularity",
    36,
    "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    "Socialité"
);

var mrMustard = new Character(
    "Jack",
    "Mustard",
    "yellow",
    "He is a former football player who tries to get by on his former glory",
    62,
    "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    "Retired Football player"
);

var weapon1 = new Weapon("rope", 10);
var weapon2 = new Weapon("candlestick", 2);
var weapon3 = new Weapon("dumbbell", 30);
var weapon4 = new Weapon("poison", 2);
var weapon5 = new Weapon("axe", 15);
var weapon6 = new Weapon("bat", 13);
var weapon7 = new Weapon("trophy", 25);
var weapon8 = new Weapon("pistol", 20);

var misteryEnvelope = [];

// 
// this.clue = function() {
//     var clue1 = misteryEnvelope[0]["occupation"];
//     document.getElementById("clue").innerHTML = clue1;
// }


function Guess(name) {
    this.name = name;
    this.randomSelector = function(array) {
        var card = array[Math.floor(Math.random() * array.length)];
        misteryEnvelope.push(card);
    }

    this.randomSelector(charactersArray);
    this.randomSelector(weaponsArray);
    this.randomSelector(roomsArray);

    this.score = function() {
        let previousCount = document.getElementById("score").innerHTML;
        document.getElementById("score").innerHTML = parseInt(previousCount) + 1;
    }

    this.revealMistery = function() {
        if (this.name === misteryEnvelope[0]["first_name"]) {
            document.getElementById("murderer").setAttribute("src", misteryEnvelope[0]["image"]);
            document.getElementById("weapon").innerHTML = "Weapon: " + misteryEnvelope[1]["name"];
            document.getElementById("room").innerHTML = "Room: " + misteryEnvelope[2];
            document.getElementById("result").innerHTML = `You are right! ${name} killed Mr.Boddy with the ${misteryEnvelope[1]["name"]} in the ${misteryEnvelope[2]} `;
            this.score();
        } else if (this.name != misteryEnvelope[0]["first_name"]) {
            document.getElementById("result").innerHTML = `Sorry ${name} did not killed Mr.Boddy. ${misteryEnvelope[0]["first_name"]} ${misteryEnvelope[0]["last_name"]} killed Mr.Boddy with the ${misteryEnvelope[1]["name"]} in the ${misteryEnvelope[2]} `
            document.getElementById("murderer").setAttribute("src", misteryEnvelope[0]["image"]);
            document.getElementById("weapon").innerHTML = "Weapon: " + misteryEnvelope[1]["name"];
            document.getElementById("room").innerHTML = "Room: " + misteryEnvelope[2];
        }
        misteryEnvelope = [];
    }
    this.revealMistery();

}

function userGuess() {
    var inputElement = document.getElementById("userInput").value;
    Guess(inputElement);
}

window.onload = function() {
    var submitbtn = document.getElementById("submt");
    submitbtn.addEventListener("click", userGuess);
}



// without methods
// function randomSelector(array) {
//     var card;
//     if (array === charactersArray) {
//         card = `${array[Math.floor(Math.random() * array.length)]["first_name"]} ${array[Math.floor(Math.random() * array.length)]["last_name"]}`
//         misteryEnvelope.push(card)
//     } else if (array === weaponsArray) {
//         card = array[Math.floor(Math.random() * array.length)]["name"]
//         misteryEnvelope.push(card)
//     } else {
//         card = array[Math.floor(Math.random() * array.length)]
//         misteryEnvelope.push(card)
//     }
// }


// function pickMistery(func) {
//     func(charactersArray);
//     func(weaponsArray);
//     func(roomsArray);
// }

// function revealMistery() {
//     pickMistery(randomSelector);
//     return `${misteryEnvelope[0]} killed Mr.Boddy using the ${misteryEnvelope[1]} in the ${misteryEnvelope[2]}!!!!`;

// }



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