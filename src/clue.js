// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: "45",
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green"
    },
    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: "26",
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white"
    },
    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: "22",
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple"
    },
    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: "31",
        description: "She is an A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red"
    },
    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: "36",
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        color: "blue",

    },
    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: "62",
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow",
    }
    
];

// Rooms Collection
const roomsArray = ["Dining Room","Conservatory", "Kitchen","Study","Library","Billiard Room","Lounge","Ballroom","Hall","Spa","Living Room","Observatory","Theater","Guest House","Patio"]

// Weapons Collection

const weaponsArray = [
    ['rope', 10],
    ['knife', 8],
    ['candlestick', 2],
    ['dumbbell', 30],
    ['poison', 2],
    ['axe', 15],
    ['bat', 13],
    ['trophy', 25],
    ['pistol', 20],
];

// ITERATION 2

function selectRandom(arrays) {

    let randomCard = arrays[parseInt(Math.random() * arrays.length)]

    console.log(randomCard)
    
    return random
}

/*selectRandom(suspectsArray)
selectRandom(roomsArray)
selectRandom(weaponsArray)
)*/

function pickMystery() {

    let mysteryCard = {suspect, room, weapon}

        mysteryCard.suspect = selectRandom(suspectsArray);
        mysteryCard.room = selectRandom(roomsArray);
        mysteryCard.weapon = selectRandom(weaponsArray);
    
    console.log(mysteryCard)
    
    return mysteryCard
}

    
// ITERATION 3

function revealMystery(envelope) { 

    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr.Boddy using the ${envelope.weapon} in the ${envelope.room}!`
}

revealMystery()  