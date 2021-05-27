// ITERATION 1

// Suspects Collection

const suspectsArray = [{
    name: 'mrGreen',
    firtName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    descripton: 'He has a lot of connections',
    age: 45,
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    ocupation: 'Entrepreneur'
},
{
    name: 'drOrchid',
    firtName: 'Doctor',
    lastName: 'Orchid',
    color: 'white',
    descripton: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age: 26,
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    ocupation: 'Scientist'
},
{
    name: 'profPlum',
    firtName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    descripton: 'Billionaire video game designer',
    age: 22,
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    ocupation: 'Designer'

},
{
    name: 'missScarlet',
    firtName: 'Kasandra',
    lastName: 'Scarlet',
    color: 'red',
    descripton: 'She is an A-list movie star with a dark past',
    age: 31,
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    ocupation: 'Actor'
},
{
    name: 'mrsPeacock',
    firtName: 'Eleanor',
    lastName: 'Peacock',
    color: 'blue',
    descripton: 'She is from a wealthy family and uses her status and money to earn popularity',
    age: 36,
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    ocupation: 'Socialité'
},
{
    name: 'mrMustard',
    firtName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    descripton: 'He is a former football player who tries to get by on his former glory',
    age: 62,
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    ocupation: 'Retired Football player'
}
]



// Weapons Collection

const weaponsArray = [{
    name: 'rope',
    weight: 10,
},
{
    name: 'knife',
    weight: 8,
},
{
    name: 'candlestick',
    weight: 2,
},
{
    name: 'dumbbell',
    weight: 30,
},
{
    name: 'poison',
    weight: 2,
},
{
    name: 'axe',
    weight: 15,
},
{
    name: 'bat',
    weight: 13
},
{
    name: 'trophy',
    weight: 25,
},
{
    name: 'pistol',
    weight: 20
}
]

// Rooms Collectionconst suspects

const roomsArray = [{
    name: 'Dinning Room',
},
{
    name: 'Conservatory',
},
{
    name: 'Kitchen',
},
{
    name: 'Study',
},
{
    name: 'Library',
},
{
    name: 'Billiard room',
},
{
    name: 'Lounge',
},
{
    name: 'Ballroom',
},
{
    name: 'Hall',
},
{
    name: 'Spa',
},
{
    name: 'Living room',
},
{
    name: 'Observatory',
},
{
    name: 'Theater',
},
{
    name: 'Guest House',
},
{
    name: 'Patio',
}
]






// ITERATION 2

function selectRandom(array) {
    let random = Math.floor(Math.random() * array.length);
    return array[random];
}


function pickMystery() {
    let killer = selectRandom(suspectsArray);
    let weapon = selectRandom(weaponsArray);
    let room = selectRandom(roomsArray);

    let cardMistery = {
        suspect: killer,
        weapon: weapon,
        room: room,
    }
    return cardMistery;
}
;

// ITERATION 3

function revealMystery(envelope) {
    return envelope.suspect.firstName + " " + envelope.suspect.lastName + " killed Mr. Boddy using the " + envelope.weapon.name + " in the " + envelope.room.name + "!"
 
    //<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!
}