// ITERATION 1
// Suspects Collection
const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        color: 'Green',
        image: 'pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg'
    }, {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        color: 'White',
        image: 'www.radiotimes.com/uploads/images/Original/111967.jpg'
    }, {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        color: 'Purple',
        image: '66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg'
    }, {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        color: 'Purple',
        image: '66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg'
    }, {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        color: 'Blue',
        image: 'metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg'
    }, {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        color: 'Yellow',
        image: 'static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg'
    }
];

// Rooms Collection
const roomsArray = [
    {name: 'Rope', weight: 10}, 
    {name: 'Knifer', weight: 8}, 
    {name: 'Candlestick', weight: 2}, 
    {name: 'Dumbbell', weight: 30}, 
    {name: 'Poison', weight: 2}, 
    {name: 'Axe', weight: 15}, 
    {name: 'Bat', weight: 13}, 
    {name: 'Trophy', weight: 25}, 
    {name: 'Pistol', weight: 20}, 
];

// Weapons Collection
const weaponsArray = [
    {name: 'Dining room'},
    {name: 'Kitchen'},
    {name: 'Study'},
    {name: 'Library'},
    {name: 'Billiard room'},
    {name: 'Lounge'},
    {name: 'Ballroom'},
    {name: 'Hall'},
    {name: 'Spa'},
    {name: 'Livimg room'},
    {name: 'Observatory'},
    {name: 'Theater'},
    {name: 'Guest house'},
    {name: 'Patio'},
];

// ITERATION 2
function selectRandom(array){
    var card = Math.floor(Math.random * array.length);
    return array[card];
};

function pickMystery(){
    var cards = {
        cards.suspects = selectRandom(suspectsArray);
        cards.rooms = selectRandom(roomsArray);
        cards.weapons = selectRandom(weaponsArray);
    }
    return cards; 
};

// ITERATION 3
function revealMystery(object){
    return `${suspectsArray.firstName} ${suspectsArray.lastName} killed Mr. Boddy using the ${weaponsArray} in the ${roomsArray}`;
};
