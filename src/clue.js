// ITERATION 1

// Suspects Collection
const suspectsArray = [
{
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45 ,
    description: 'He has a lot of connections',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green'
},
{

    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
    },  
{
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
    },
{
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
},
{
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
},
];

// Rooms Collection
const roomsArray = [
    'Dining Room', 'Conservatory' , 'Kitchen' , 'Study' , 'Library' , 'Billiard Room' , 'Lounge' , 'Ballroom' , 'Hall' , 'Spa' , 'Living Room' , 'Observatory' , 'Theater' , 'Guesthouse' , 'Patio'
];


// Weapons Collection
const weaponsArray = [
    {
        name: 'rope',
        weight: 10
    },
    {
        name: 'knife',
        weight: 8
    },
    {
        name: 'candlestick',
        weight: 2
    },
    {
        name: 'dumbbell',
        weight: 30
    },
    {
        name: 'poison',
        weight: 2
    },
    {
        name: 'axe',
        weight: 15
    },
    {
        name: 'bat',
        weight: 13
    },
    {
        name: 'trophy',
        weight: 25
    },
    {
        name: 'pistol',
        weight: 20
    }
];

// ITERATION 2

    function selectRandom(array){

        var random = array[Math.floor(Math.random() * array.length)];
        return random;
    }


    function pickMystery()
    {
        return{
            suspect: selectRandom(suspectsArray),
            room:  selectRandom(roomsArray),
            weapon:   selectRandom(weaponsArray),
        };
    }


// ITERATION 3

function revealMystery()
{
    let object = pickMystery();
    return `${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room}!`;
}