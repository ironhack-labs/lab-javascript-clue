// ITERATION 1

class Suspect {
    constructor(firstName, lastName, occupation, age, description, image, color) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
        this.age = age;
        this.description = description;
        this.image = image;
        this.color = color;
    }
}

class Weapon {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}

class Room {
    constructor(name) {
        this.name = name;
    }
}

class Mystery {
    constructor(suspect, weapon, room) {
        this.suspect = suspect;
        this.weapon = weapon;
        this.room = room;
    }
}

// Suspects Array

const suspectsArray = [
    new Suspect(
        "Jacob",
        "Green",
        "Entrepreneur",
        45,
        "He has a lot of connections",
        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        "green"),
    new Suspect(
        "Doctor",
        "Orchid",
        "Scientist",
        26,
        "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        "white"),
    new Suspect(
        "Victor",
        "Plum",
        "Designer",
        22,
        "Billionaire video game designer",
        "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        "purple"),
    new Suspect(
        "Kasandra",
        "Scarlet",
        "Actor",
        31,
        "She is an A-list movie star with a dark past",
        "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        "red"),
    new Suspect(
        "Eleanor",
        "Peacock",
        "Socialité",
        36,
        "She is from a wealthy family and uses her status and money to earn popularity",
        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        "blue"),
    new Suspect(
        "Jack",
        "Mustard",
        "Retired Football player",
        62,
        "He is a former football player who tries to get by on his former glory",
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        "yellow"),
];

// Rooms Array

const roomsArray = [
    new Room("Dining Room"),
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
    new Room("Patio"),
];

// Weapons Array

const weaponsArray = [
    new Weapon("rope", 10),
    new Weapon("knife", 8),
    new Weapon("candlestick", 2),
    new Weapon("dumbbell", 30),
    new Weapon("poison", 2),
    new Weapon("axe", 15),
    new Weapon("bat", 13),
    new Weapon("trophy", 25),
    new Weapon("pistol", 20),
];


// ITERATION 2

function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
    return new Mystery(selectRandom(suspectsArray), selectRandom(weaponsArray), selectRandom(roomsArray));
}


// ITERATION 3

function revealMystery() {
    const mystery = pickMystery();
    const string = `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!`;
    return string;
}

