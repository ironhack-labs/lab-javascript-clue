let characters = [];
let rooms = [];
let weapons = [];
let expressions = ['This Mfckn', 'Damn Daniel!!', 'Ohh Whaaaat!', 'Get away man!'];


// Create Characters
function Character(name, lastName, color, description, age, image, occupation) {
    this.name = name;
    this.lastName = lastName;
    this.color = color;
    this.description = description;
    this.age = age;
    this.image = image;
    this.occupation = occupation;
}

let victim = new Character(
    "Jacob", 
    "Green", 
    "green", 
    "He has a lot of connections", 
    45, 
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", 
    "Entrepreneur"
);

// characters.push(mrGreen);

let drOrchid = new Character(
    "Doctor",
    "Orchid",
    "white",
    "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    26,
    "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    "Scientist"
);

characters.push(drOrchid);

let profPlum = new Character(
    "Victor",
    "Plum",
    "purple",
    "Billionare video game designer",
    22,
    "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    "Designer"
);

characters.push(profPlum);

let missScarlet = new Character(
    "Kasandra",
    "Scarlet",
    "red",
    "She is an A-list movie star with a dark past",
    31,
    "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    "Actor"
);

characters.push(missScarlet);

let mrsPeacock = new Character(
    "Eleanor",
    "Peacock",
    "blue",
    "She is from a wealthy family and uses her status and money to earn popularity",
    36,
    "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    "Socialité"
);

characters.push(mrsPeacock);

let mrMustard = new Character(
    "Jack",
    "Mustard",
    "yellow",
    "He is a former football player who tries to get by on his former glory",
    62,
    "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    "Retired Football player"
);

characters.push(mrMustard);

// Create Weapons

function Weapon(name, weight) {
    this.name = name;
    this.weight = weight;
}

let rope = new Weapon("rope", 10);
weapons.push(rope);
let knife = new Weapon("knife", 8);
weapons.push(knife);
let candlestick = new Weapon("candlestick", 2);
weapons.push(candlestick);
let dumbbell = new Weapon("dumbbell", 30);
weapons.push(dumbbell);
let poison = new Weapon("poison", 2);
weapons.push(poison);
let axe = new Weapon("axe", 15);
weapons.push(axe);
let bat = new Weapon("bat", 13);
weapons.push(bat);
let trophy = new Weapon("trophy", 25);
weapons.push(trophy);
let pistol = new Weapon("pistol", 20);
weapons.push(pistol);

// Create Rooms

function Room(name) {
    this.name = name;
}

let dinningRoom = new Room("Dinning Room");
rooms.push(dinningRoom);
let conservatory = new Room("Conservatory");
rooms.push(conservatory);
let kitchen = new Room("Kitchen");
rooms.push(kitchen);
let study = new Room("Study");
rooms.push(study);
let library = new Room("Library");
rooms.push(library);
let billiardRoom = new Room("Billiard Board");
rooms.push(billiardRoom);
let lounge = new Room("Lounge");
rooms.push(lounge);
let ballroom = new Room("Ballroom");
rooms.push(ballroom);
let hall = new Room("Hall");
rooms.push(hall);
let spa = new Room("Spa");
rooms.push(spa);
let livingRoom = new Room("Living Room");
rooms.push(livingRoom);
let observatory = new Room("Observatory");
rooms.push(observatory);
let theater = new Room("Teather");
rooms.push(theater);
let guestHouse = new Room("Guest House");
rooms.push(guestHouse);
let patio = new Room("Patio");
rooms.push(patio);

let pickChar = Math.floor(Math.random()*characters.length);
let pickWeapon = Math.floor(Math.random()*weapons.length);
let pickRoom = Math.floor(Math.random()*rooms.length);
let pickExpress = Math.floor(Math.random()*expressions.length);

let killer = characters[pickChar];
let weapon = weapons[pickWeapon];
let room = rooms[pickRoom];
let exp = expressions[pickExpress];

console.log(`${exp} ${killer.name} ends the life of the victim with this ${weapon.name} in the ${room.name}`);


