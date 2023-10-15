// ITERATION 1

// Suspects Array
function createSuspect(firstName, lastName, occupation, age, description, image, color) {
    return { firstName, lastName, occupation, age, description, image, color };
}
const suspectsArray = [
    createSuspect('Jacob', 'Green', 'Entrepreneur', 45, 'He has a lot of connections', 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'green'),
    createSuspect('Doctor', 'Orchid', 'Scientist', 26, 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'white'),
    createSuspect('Victor', 'Plum', 'Designer', 22, 'Billionaire video game designer', 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg', 'purple'),
    createSuspect('Kasandra', 'Scarlet', 'Actor', 31, 'She is an A-list movie star with a dark past', 'https://www.radiotimes.com/uploads/images/Original/111967.jpg', 'red'),
    createSuspect('Eleanor', 'Peacock', 'Socialité', 36, 'She is from a wealthy family and uses her status and money to earn popularity', 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'blue'),
    createSuspect('Jack', 'Mustard', 'Retired Football player', 62, 'He is a former football player who tries to get by on his former glory', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg', 'yellow')];

// Rooms Array
function createRoom(name) {
    return { name };
}
const roomsArray = [
    createRoom('Dining Room'),
    createRoom('Conservatory'),
    createRoom('Kitchen'),
    createRoom('Study'),
    createRoom('Library'),
    createRoom('Billiard Room'),
    createRoom('Lounge'),
    createRoom('Ballroom'),
    createRoom('Hall'),
    createRoom('Spa'),
    createRoom('Living Room'),
    createRoom('Observatory'),
    createRoom('Theater'),
    createRoom('Guest House'),
    createRoom('Patio'),
];

// Weapons Array
function createWeapon(name, weight) {
    return { name, weight };
}
const weaponsArray = [
    createWeapon('rope', 10),
    createWeapon('knife', 8),
    createWeapon('candlestick', 2),
    createWeapon('dumbbell', 30),
    createWeapon('poison', 2),
    createWeapon('axe', 15),
    createWeapon('bat', 13),
    createWeapon('trophy', 25),
    createWeapon('pistol', 20)
];


// ITERATION 2

function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray),
    }
}


// ITERATION 3

function revealMystery(envelope) {
    const { suspect, weapon, room } = envelope;
    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`
}

