// ---------- Interation 1 -----------
// Characters ------------
const mrGreen = {
    first_name:   'Jacob',
    last_name:    'Green',
    color:        'green',
    description:  'He has a lot of connections',
    age:          45,
    image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation:   'Entrepreneur'
};

const drOrchid = {
    first_name:   'Doctor',
    last_name:    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          26,
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation:   'Scientist'
};

const profPlum = {
    first_name:   'Victor',
    last_name:    'Plum',
    color:        'purple',
    description:  'Billionaire video game designer',
    age:          22,
    image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation:   'Designer'
};

const missScarlet = {
    first_name:   'Kasandra',
    last_name:    'Scarlet',
    color:        'red',
    description:  'She is an A-list movie star with a dark past',
    age:          31,
    image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation:   'Actor'
};

const mrsPeacock = {
    first_name:   'Eleanor',
    last_name:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          36,
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité'
};

const mrMustard = {
    first_name:   'Jack',
    last_name:    'Mustard',
    color:        'yellow',
    description:  'He is a former football player who tries to get by on his former glory',
    age:          62,
    image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation:   'Retired Football player'
};

// Weapons --------------
const rope = {
    name: 'rope', 
    weight: 10 
};

const knife = {
    name: 'knife', 
    weight: 8 
};

const candlestick = {
    name: 'candlestick', 
    weight: 2 
};

const dumbbel = {
    name: 'dumbbell', 
    weight: 30 
};

const poison = {
    name: 'poison', 
    weight: 2 
};

const axe = {
    name: 'axe', 
    weight: 15 
};

const bat = {
    name: 'bat', 
    weight: 13 
};

const trophy = {
    name: 'trophy', 
    weight: 25 
};

const pistol = {
    name: 'pistol', 
    weight: 20 
};

// Rooms --------------
const diningRoom = {
    name: 'Dining Room'
};

const conservatory = {
    name: 'Conservatory'
};

const kitchen = {
    name: 'Kitchen'
};

const study = {
    name: 'Study'
};

const library = {
    name: 'Library'
};

const billiard = {
    name: 'Billiard Room'
};

const lounge = {
    name: 'Lounge'
};

const ballroom = {
    name: 'Ballroom'
};

const hall = {
    name: 'Hall'
};

const spa = {
    name: 'Spa'
};

const livingRoom = {
    name: 'Living Room'
};

const observatory = {
    name: 'Observatory'
};

const theater = {
    name: 'Theater'
};

const guestHouse = {
    name: 'Guest House'
};

const patio = {
    name: 'Patio'
};

// Characters Collection
const charactersArray = [];

charactersArray.push(mrGreen);
charactersArray.push(drOrchid);
charactersArray.push(profPlum);
charactersArray.push(missScarlet);
charactersArray.push(mrsPeacock);
charactersArray.push(mrMustard);


console.log(charactersArray);

// Rooms Collection
const roomsArray = [];

roomsArray.push(diningRoom);
roomsArray.push(conservatory);
roomsArray.push(kitchen);
roomsArray.push(study);
roomsArray.push(library);
roomsArray.push(billiard);
roomsArray.push(lounge);
roomsArray.push(ballroom);
roomsArray.push(hall);
roomsArray.push(spa);
roomsArray.push(livingRoom);
roomsArray.push(observatory);
roomsArray.push(theater);
roomsArray.push(guestHouse);
roomsArray.push(patio);

console.log(roomsArray);

// Weapons Collection
const weaponsArray = [];

weaponsArray.push(rope);
weaponsArray.push(knife);
weaponsArray.push(candlestick);
weaponsArray.push(dumbbel);
weaponsArray.push(poison);
weaponsArray.push(axe);
weaponsArray.push(bat);
weaponsArray.push(trophy);
weaponsArray.push(pistol);

console.log(weaponsArray);




// ---------- Interation 2 & 3 -----------

//My version after reading the instructions of the iterations: 

const cluedoGame = {
    randomSelector: function(deck) {
        if (deck && deck.length > 0){
            let card = Math.floor(Math.random() * deck.length);
            return deck[card];
        } else {
            return;
        }
    },
    pickMistery: function() {
        let misteryEnvelope = [
            { suspect: this.randomSelector(charactersArray) }, 
            { weapon: this.randomSelector(weaponsArray) }, 
            { room: this.randomSelector(roomsArray) }
           ]
        return misteryEnvelope;
    },
    revealMistery: function(envelope) {
        let suspect = envelope[0].suspect;
        let weapon = envelope[1].weapon;
        let room = envelope[2].room;
        return `${suspect.first_name} ${suspect.last_name} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!!!!`
    }
};

let misteryEnvelope = cluedoGame.pickMistery();

console.log(cluedoGame.revealMistery(misteryEnvelope));


//The version that was expected of of us:

function randomSelector(deck) {
    if (deck && deck.length > 0){
        let card = Math.floor(Math.random() * deck.length);
        return deck[card];
    } else {
        return;
    }
};

function pickMystery(){
    let misteryEnvelope = {
        suspect: randomSelector(charactersArray), 
        weapon: randomSelector(weaponsArray), 
        room: randomSelector(roomsArray)
    }
    return misteryEnvelope;
;}

let misteryEnvelope = pickMystery();

function revealMystery(envelope) {
        let suspect = envelope.suspect;
        let weapon = envelope.weapon.name;
        let room = envelope.room.name;
        return `${suspect.first_name} ${suspect.last_name} killed Mr. Boddy using the ${weapon} in the ${room}!!!!`
};

revealMystery(misteryEnvelope);