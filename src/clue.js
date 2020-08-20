const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'white',
        // ...
    },

    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'green'
        // ...
    },

    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        color: 'purple'
        // ...
    },

    {
        firstName: 'Kasandra',
        lastName: 'Skarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'red'
        // ...
    },

    {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue'
        // ...
    },

    {
        firstName: 'Jack',
        lastName: 'Mustrad',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: 'blue',
        // ...
    },
    // ...
];






weaponsArray = [
    {
        name: "rope",
        weight: 10,
    },

    {
        name: "knife",
        weight: 8,
    },

    {
        name: "cabdlestick",
        weight: 2,
    },

    {
        name: "dumbell",
        weight: 30,
    },

    {
        name: "poison",
        weight: 2,
    },

    {
        name: "axe",
        weight: 15,
    },

    {
        name: "bat",
        weight: 13,
    },

    {
        name: "trophy",
        weight: 25,
    },

    {
        name: "pistol",
        weight: 20,
    },

];

roomsArray = [
    {
        name: "Dining Room",
    },

    {
        name: "Conservatory",
    },

    {
        name: "Kitchen",
    },

    {
        name: "Study",
    },

    {
        name: "Library",
    },

    {
        name: "Billiard Room",
    },

    {
        name: "Lounge",
    },

    {
        name: "Ballroom",
    },

    {
        name: "Hall",
    },

    {
        name: "Spa",
    },

    {
        name: "Living Room",
    },

    {
        name: "Observatory",
    },

    {
        name: "Theater",
    },

    {
        name: "Guest House",
    },

    {
        name: "Patio",
    },



]

function selectRandom(arr) {
    if (arr.length == 0) {

        return undefined
        // In case the array have one value, the average is this value
    } else if (arr.length == 1) {

        return arr[0]
    }

    //A random function to take as maximum and minimum the dimmensions of the input array
    let max = arr.length;
    let min = 0
    //Create the random number
    let randDeck = Math.random() * (max - min) + min
    // Floor makes the number an integer
    return arr[Math.floor(randDeck)]
}



function pickMystery() {
    //Determinate the random element for the suspect array that must be the same for the first and last name
    let randSuscpect = selectRandom(suspectsArray)

    let mistery = [
        {// The suspect, as an array to get the first and the last name
            suspect: selectRandom(suspectsArray)

        },
        {// The weapon name
            weapon: selectRandom(weaponsArray),
        },
        {// The room name
            room: selectRandom(roomsArray),
        }

    ]
    // The object with all the elements
    return mistery
}



//Store the object to avoid not coincidence between the objects
let unsolvedMistery = pickMystery()


function revealMystery(object) {
    //Compose the message
    console.log(typeof `${object[0].suspect.firstName} ${object[0].suspect.lastName} killed Mr. Boddy using the ${object[1].weapon.name} in the ${object[2].room.name}!`)


    return `${object[0].suspect.firstName} ${object[0].suspect.lastName} killed Mr. Boddy using the ${object[1].weapon.name} in the ${object[2].room.name}!`

}
revealMystery(unsolvedMistery)