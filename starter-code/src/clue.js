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

// INITIATE CHARACTER
function Character(fname, lname, color, description, age, imageLink, occupation){
    this.fname = fname
    this.lname = lname
    this.color = color
    this.description = description
    this.age = age
    this.imageLink = imageLink
    this.occupation = occupation
}

// INITIATE WEAPON
function Weapon(name, weight){
    this.name = name
    this.weight = weight
}

// INITIATE ROOM
function Room(name){
    this.name = name
}

// CREATE CHARACTERS
var mrGreen = new Character('Jacob', 'Green', 'green', 'He has a lot of connections', 45, 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'Entrepreneur');
var drOrchid = new Character('Doctor', 'Orchid', 'white', 'PhD in Plant toxicology. Adopted daughter of Mr. Boddy', 26, 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'Scientist');
var profPlum = new Character('Victor', 'Plum', 'purple', 'Billionaire Videogame Designer', 22, 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', 'Designer');
var missScarlett = new Character('Cassandra', 'Scarlett', 'red', 'She is an A List movie star with a dark past', 31, 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', 'Actor');
var mrsPeacock = new Character('Eleanor', 'Peacock', 'blue', 'She is from a wealthy family and uses her status and money to earn popularity', 36, 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'Socialité');
var mrMustard = new Character('Jack', 'Mustard', 'yellow', 'He is a former football player who tries to get by on his former glory', 62, 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', 'Retired Football Player');

// CREATE WEAPONS
var rope = new Weapon('rope', 10);
var knife = new Weapon('knife', 8);
var candlestick = new Weapon('candlestick', 2);
var dumbbell = new Weapon('dumbbell', 30);
var poison = new Weapon('poison', 2);
var axe = new Weapon('axe', 15);
var bat = new Weapon('bat', 13);
var trophy = new Weapon('trophy', 25);
var pistol = new Weapon('pistol', 20);

// CREATE ROOMS
var DinningRoom = new Room('Dinning Room');
var Conservatory = new Room('Conservatory');
var Kitchen = new Room('Kitchen');
var Study = new Room('Study');
var Library = new Room('Library');
var BilliardRoom = new Room('Billiard Room');
var Lounge = new Room('Lounge');
var Ballroom = new Room('Ballroom');
var Hall = new Room('Hall');
var Spa = new Room('Spa');
var LivingRoom = new Room('Living Room');
var Observatory = new Room('Observatory');
var Theater = new Room('Theater');
var GuestHouse = new Room('Guest House');
var Patio = new Room('Patio');

// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlett, mrsPeacock, mrMustard);

// Rooms' Collection
var roomsArray = [];
roomsArray.push(DinningRoom, Conservatory, Kitchen, Study, Library, BilliardRoom, Lounge, Ballroom, Hall, Spa, LivingRoom, Observatory, Theater, GuestHouse, Patio);

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

// SELECT RANDOM CHARACTER 
var randomNum1 = Math.floor(Math.random() * 6);
var randomCharacter = charactersArray[randomNum1];

// SELECT RANDOM ROOM 
var randomNum2 = Math.floor(Math.random() * 15);
var randomRoom = roomsArray[randomNum2];

// SELECT RANDOM WEAPON 
var randomNum3 = Math.floor(Math.random() * 9);
var randomWeapon = weaponsArray[randomNum3];

var misteryEnvelope = [randomCharacter, randomRoom, randomWeapon];

console.log(randomCharacter.fname + " " + randomCharacter.lname + " killed Mr. Boddy using the " + randomWeapon.name + " in the " + randomRoom.name + "!!!!!");