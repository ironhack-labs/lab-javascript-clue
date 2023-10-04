// ITERATION 1

// Suspects Array

const suspectsArray = [
    mrGreen = {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'green',
    },

    drOrchid = {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology.Adopted daughter of Mr.Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'white',
    },

    profPlum = {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        color: 'purple',
    },


    missScarlet = {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A- list movie star with a dark past',
        image: 'mhttps://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'red',
    },


    mrsPeacock = {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue',
    },


    mrMustard = {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: 'yellow',
    }
];

// Rooms Array

const roomsArray = [
    room1 = {
        name: 'Dining Room'
    },

    room2 = {
        name: 'Conservatory'
    },

    room3 = {
        name: 'Kitchen'
    },

    room4 = {
        name: 'Study'
    },

    room5 = {
        name: 'Library'
    },

    room6 = {
        name: 'Billiard Room'
    },

    room7 = {
        name: 'Lounge'
    },

    room8 = {
        name: 'Ballroom'
    },

    room9 = {
        name: 'Hall'
    },

    room10 = {
        name: 'Spa'
    },

    room11 = {
        name: 'Living Room'
    },

    room12 = {
        name: 'Observatory'
    },

    room13 = {
        name: 'Theater'
    },

    room14 = {
        name: 'Guest House'
    },

    room15 = {
        name: 'Patio'
    },
];

// Weapons Array

const weaponsArray = [
    weapon1 = {
        name: 'rope',
        weight: 10,
    },

    weapon2 = {
        name: 'knife',
        weight: 8,
    },

    weapon3 = {
        name: 'candlestick',
        weight: 2,
    },

    weapon4 = {
        name: 'dumbbell',
        weight: 30
    },

    weapon5 = {
        name: 'poison',
        weight: 2,
    },

    weapon6 = {
        name: 'axe',
        weight: 15,
    },

    weapon7 = {
        name: 'bat',
        weight: 13,
    },

    weapon8 = {
        name: 'trophy',
        weight: 25,
    },

    weapon9 = {
        name: 'pistol',
        weight: 20,
    }
];


// ITERATION 2

function selectRandom(Random) {
    //should return undefined if the array is empty
    if (suspectsArray.length && roomsArray.length && weaponsArray.length === 0) {
        return undefined;
    }
    //debería devolver el elemento de una matriz de valor único
    //debería devolver un elemento de la matriz
    //should return a random element of the array
    const randomElement = Math.floor(Math.random() * Random.length)
    return Random[randomElement];
}

//Comprobación de la función si es valida para nuestro proposito
function findOut() {
    const suspect = selectRandom(suspectsArray);
    console.log(suspect);
    const room = selectRandom(roomsArray);
    console.log(room);
    const weapon = selectRandom(weaponsArray);
    console.log(weapon);
}

findOut();
//debería devolver un objeto
function pickMystery() {

    //should return an object with 3 properties: `suspect`, `weapon`, `room`
    //debe devolver un sospechoso en la propiedad sospechosa del objeto
    //debe devolver un arma en la propiedad del arma del objeto
    //debe devolver una habitación en la propiedad de habitación del objeto

    return { //Al crear el objeto, llamo a la función creada antes para reutilizar 
        //su codigo y poder "crear el misterio"
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray),
    }

}
//Para asegurarse de que todo va correctamente, volver a asegurarse de que funciona.
const mistery = pickMystery();
console.log(mistery);
// ITERATION 3

function revealMystery(reveal) {
    return `${reveal.suspect.firstName} ${reveal.suspect.lastName} killed Mr. Boddy using the ${reveal.weapon.name} in the ${reveal.room.name}!`;

}
const heKilled = revealMystery(mistery);
console.log(heKilled);

