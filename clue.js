//Iteration 1 - Creating the cards
var characters = [
    green = {
        firstName: 'Jacob',
        lastName: 'Green',
        color: 'Green',
        descriptions: 'He has a lot of connections and is always willing to help people out -- for a price.'
    },

    orchid = {
        firstName: 'Doctor',
        lastName: 'Orchid',
        color: 'White',
        description: 'She is the adopted daugther of Mr. Boddy She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning',
        occupation: 'Biologist with a PhD in plant toxicology'
    },

    plum = {
        firstName: 'Victor',
        lastName: 'Plum',
        color: 'Purple',
        description: 'A Billionaire who is embracing his new popularity.',
        occupation: 'Video Game Designer'
    },

    scarlet = {
        firstName: 'Kassandra',
        lastName: 'Scarlet',
        color: 'Red',
        description: 'Her past haunts her.',
        occupation: 'A list Movie Start'
    },

    peacock = {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        color: 'Blue',
        description: 'From a wealthy family and uses her status and money to win popularity',
        occupation: 'Lazy'
    },

    mustard = {
        firstName: 'Jack',
        lastName: 'Mustard',
        color: 'Yellow',
        description: 'Tries to get by on his former glory.',
        occupation: 'Former Football Player'
    },
]

var weapons = [
    Rope = {
        weight: '2 lbs.',
        color: 'brown',
        painLevel: 'Ouch'
    },
    Knife = {
        weight: '1 lbs.',
        color: 'silver',
        painLevel: 'Really ouch'
    },
    Candlestick = {
        weight: '0.5 lbs.',
        color: 'white',
        painLevel: 'Not really ouch'
    },
    Dumbbell = {
        weight: '10 lbs.',
        color: 'silver',
        painLevel: 'You\'re Dead.'
    },
    Poison = {
        weight: '3 lbs.',
        color: 'green',
        painLevel: 'You\'re also dead.'
    },
    Axe = {
        weight: '0.8 lbs.',
        color: 'wood',
        painLevel: 'You lost an arm.'
    },
    Bat = {
        weight: '1.2 lbs.',
        color: 'Light brown',
        painLevel: 'Very ouch'
    },
    Trophy = {
        weight: '5 lbs.',
        color: 'Gold',
        painLevel: 'Kinda Ouch'
    },
    Pistol = {
        weight: '1.3 lbs.',
        color: 'Black',
        painLevel: 'You\'re bleeding to death.'
    }
]

var rooms = [
    'Dining room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard room', 'Lounge', 'Ballroom', 'Hall',
    'A spa', 'Living room', 'Observatory', 'Theater', 'Guest house', 'A patio'
]

///Iteration 2 - Creating and revealing the mystery
//1.Create a method to randomly select one element from a card stack.
function selectElement() {
    var cards = ['characters', 'rooms', 'weapons'];

    var randomNumber = Math.random();
    randomNumber = randomNumber * cards.length;
    randomNumber = Math.floor(randomNumber);

    return cards[randomNumber];
}

var cards = selectElement();
console.log(cards);
//2.Create another function that calls the method above once for each card stack.
function SelectCharacters() {
    var characters = ['Plum', 'Peacock', 'Mustard', 'Orchid', 'Green', 'Scarlet'];

    var randomNumber = Math.random();
    randomNumber = randomNumber * characters.length;
    randomNumber = Math.floor(randomNumber);

    return characters[randomNumber];
}

var characters = SelectCharacters();
console.log(characters);

function SelectWeapon() {
    var weapons = ['Rope', 'Knife', 'Candlestick', 'Dumbbell', 'Poison', 'Axe', 'Bat', 'Trophy', 'Pistol'];

    var randomNumber = Math.random();
    randomNumber = randomNumber * weapons.length;
    randomNumber = Math.floor(randomNumber);

    return weapons[randomNumber];
}

var weapons = SelectWeapon();
console.log(weapons);

function SelectRooms() {
    var rooms = ['Dining room', 'Conservatory', 'Kitchen', 'Study', 'Library',
        'Billiard room', 'Lounge', 'Ballroom', 'Hall', 'A spa', 'Living room', 'Observatory', 'Theater', 'Guest house', 'A patio'
    ];

    var randomNumber = Math.random();
    randomNumber = randomNumber * rooms.length;
    randomNumber = Math.floor(randomNumber);

    return rooms[randomNumber];
}

var rooms = SelectRooms();
console.log(rooms);
//3.Place the “Case File Confidential” in a virtual envelope. :wink:
var virtualEnvelope;
var x = confirm("Case File Confidential!");
if (x == true) {
    console.log("The killer is: \n ", SelectCharacters(), "\n", "the weapon that was used to commit the murder was a: \n", SelectWeapon(), "\n", " they room they killed the victum in was the. \n", SelectRooms());
} else {
    x = "I Guess you dont want to know who the killer is! Wink, Wink! ;)";
}
//4.Create a method to reveal the mystery.
