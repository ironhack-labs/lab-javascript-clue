// ITERATION 1

// Suspects Collection
const suspectsArray = [
        {
            firstName: 'Jacob',
            lastName: 'Green',
            occupation: 'Entrepreneur',
            age: 45, 
            description: 'He has a lot of connections',
            image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 
            color: 'green', 
        },
    
        {
            firstName: 'Doctor',
            lastName: 'Orchid',
            occupation: 'Scientist',
            age: 26,
            description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
            image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
            color: 'white',
        },
    
        {
            firstName: 'Victor',
            lastName: 'Plum',
            occupation: 'Designer',
            age: 22,
            description: 'Billionaire video game designer',
            image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
            color: 'purple',
        },
    
        {
            firstName: 'Kasandra',
            lastName: 'Scarlet',
            occupation: 'Actor',
            age: 31,
            description: 'She is an A-list movie star with a dark past',
            image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
            color: 'red',
        },
    
        {
            firstName: 'Eleanor',
            lastName: 'Peacock',
            occupation: 'Socialité',
            age: 36,
            description: 'She is from a wealthy family and uses her status and money to earn popularity',
            image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
            color: 'blue',
        },
    
        {
            firstName: 'Jack',
            lastName: 'Mustard',
            occupation: 'Retired Football player',
            age: 62,
            description: 'He is a former football player who tries to get by on his former glory',
            image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
            color: 'yellow',
        }
];

// Rooms Collection
const roomsArray = [
    'Dining Room',
    'Conservatory',
    'Kitchen',
    'Study',
    'Library',
    'Billiard Room',
    'Lounge',
    'Ballroom',
    'Hall',
    'Spa',
    'Living Room',
    'Observatory',
    'Theater',
    'Guest House',
    'Patio',
];

// Weapons Collection
const weaponsArray = [  
    ['rope',10],
    ['knife',8],
    ['candlestick',2],
    ['dumbbell',30],
    ['poison',2],
    ['axe',15],
    ['bat',13],
    ['trophy',25],
    ['pistol',20],    
];

// ITERATION 2

function selectRandom(array) {
        let random = array[parseInt(Math.random() * array.length)]
        return random
}
 
function pickMystery() {
        let misteryCards = {
                suspect:'',
                weapon:'',
                room:'',
        }

        misteryCards.suspect = selectRandom(suspectsArray)
        misteryCards.weapon = selectRandom(weaponsArray)
        misteryCards.room = selectRandom(roomsArray)
        return misteryCards
}

object  = pickMystery()

// ITERATION 3

 function revealMystery() {
         console.log(`${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon[0]} in the ${object.room}!`)
         //return    `${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon[0]} in the ${object.room}!`
         revealed = `${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon[0]} in the ${object.room}!`
         return revealed
}

//console.log(`${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon[0]} in the ${object.room}!`)
/*

No entiendo por que el Jasmine no me reconoce el valor retornado por la funcion revealMystery.
He intentado devolver al valor directamente como un String,
declarandolo como una variable y despues retornandolo
y Jasmine no me lo reconoce. 
Lo he imprimido en la consola por si los valores estaban mal
y en la consola lo imprime correctamente.
NO SE QUE FALLA EN EL RETURN




*/

