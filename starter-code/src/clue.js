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
*/

// function Methods(){
//     this.randomSelector = function(arr){
//         if (arr.length === 0) return undefined;
//         return arr[Math.floor(Math.random() * arr.length)];
//     }
// }

function randomSelector(arr){
    if (arr.length === 0) return undefined;
    return arr[Math.floor(Math.random() * arr.length)];
}

var mysteryEnvelope = {};

function pickMystery(arr, key){
    mysteryEnvelope[key] = randomSelector(arr);
    console.log(mysteryEnvelope);
    return mysteryEnvelope;
}

function revealMystery(obj){
    return `${obj.suspect.firstName} ${obj.suspect.lastName} killed Mr. Boddy  using the ${obj.weapon.name} in the ${obj.room}`;
}

function Characters(first_name, last_name, color, description, age, image, occupation){
    this.firstName = first_name;
    this.lastName = last_name;
    this.color = color;
    this.description = description;
    this.age = age
    this.image= image;
    this.occupation= occupation;
}

var green = new Characters("Jacob", "Green", "green", "He has a lot of connections", 45, "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur");
var drOrchid = new Characters("Doctor", "Orchid", "white", "PhD in plant toxicology. Adopted daughter of Mr. Boddy", 26, "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "Scientist");
var profPlum = new Characters("Victor", "Plum", "purple", "Billionaire video game designer", 22, "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", "Designer");
var scarlett = new Characters("Kasandra", "Scarlet", "red", "She is an A-list movie star with a dark past", 31, " https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", "Actor");
var peacock = new Characters("Eleanor", "Peacock", "blue", "She is from a wealthy family and uses her status and money to earn popularity", 36, "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "Socialite");
var mustard = new Characters("Jack", "Mustard", "yellow", "He is a former football player who tries to get by on his former glory", 62, "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", "Retired Football Player");

// Characters Collection
const charactersArray = [];

charactersArray.push(green, drOrchid, profPlum, scarlett, peacock, mustard);

console.log(randomSelector(charactersArray));
console.log(pickMystery(charactersArray, "suspect"));

// var game = new Methods();

// console.log(game.randomSelector(charactersArray));

// console.log(charactersArray);

// Weapons

// name: rope        ---   weight: 10
// name: knife       ---   weight: 8
// name: candlestick ---   weight: 2
// name: dumbbell    ---   weight: 30
// name: poison      ---   weight: 2
// name: axe         ---   weight: 15
// name: bat         ---   weight: 13
// name: trophy      ---   weight: 25
// name: pistol      ---   weight: 20

function Weapons(name, weight){
    this.name = name;
    this.weight = weight;
}

var one = new Weapons("rope", 10);
var two = new Weapons("knife", 8);
var three = new Weapons("candlestick", 2);
var four = new Weapons("dumbbell", 30);
var five = new Weapons("poison", 2);
var six = new Weapons("axe", 15);
var seven = new Weapons("bat", 13);
var eight = new Weapons("trophy", 25);
var nine = new Weapons("pistol", 20);

// Weapons Collection
const weaponsArray = [];

weaponsArray.push(one, two, three, four, five, six, seven, eight, nine);

console.log(randomSelector(weaponsArray));
console.log(pickMystery(weaponsArray, "weapon"));
// console.log(game.randomSelector(weaponsArray));
// console.log(weaponsArray);
// console.log(one.name);


// Rooms
/*
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

// function Rooms(name){
//     this.name= name;
// }

// var dining = new Rooms("Dining Room");
// var conservatory = new Rooms("Conservatory");
// var kitchen = new Rooms("Kitchen");
// var study = new Rooms("Study");
// var library = new Rooms();
// var billiard = new Rooms();
// var lounge = new Rooms();
// var ballroom = new Rooms();
// var hall = new Rooms();
// var spa = new Rooms();
// var living = new Rooms();
// var observatory = new Rooms();
// var theatre = new Rooms();
// var guest = new Rooms();
// var patio = new Rooms();

// Rooms Collection
const roomsArray = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theatre", "Guest House", "Patio"];

console.log(randomSelector(roomsArray));
console.log(pickMystery(roomsArray, "room"));
// console.log(game.randomSelector(roomsArray));
// console.log(roomsArray);


console.log(revealMystery(mysteryEnvelope));
