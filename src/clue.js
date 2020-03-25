// ITERATION 1

// Suspects Collection
const suspectsArray = [
//let mrGreen 
{
firstName: 'Jacob',
lastName: 'Green',
occupation: 'Entrepreneur',
age: 45,
description: 'He has a lot of connections',
image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
color: 'green'
},
//let drOrchid 
{
firstName: 'Doctor',
lastName: 'Orchid',
occupation: 'Scientist',
age: 26,
description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
color: 'white'
},
//let profPlum 
{
firstName: 'Victor',
lastName: 'Plum',
occupation: 'Designer',
age: 22,
description: 'Billionaire video game designer',
image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
color: 'purple'
},
//let missScarlet 
{
firstName: 'Kasandra',
lastName: 'Scarlet',
occupation: 'Actor',
age: 31,
description: 'She is an A-list movie star with a dark past',
image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
color: 'red'
},
//let mrsPeacock 
{
firstName: 'Eleanor',
lastName: 'Peacock',
occupation: 'Socialité',
age: 36,
description: 'She is from a wealthy family and uses her status and money to earn popularity',
image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
color: 'blue'
},
];

// Rooms Collection

let roomsArray = [{
    name: "Dining Room"
},
{
    name: "Conservatory"
},
{
    name: "Kitchen"
},
{
    name: "Study"
},
{
    name: "Library"
},
{
    name: "Billiard Room"
},
{
    name: "Lounge"
},
{
    name: "Ballroom"
},
{
    name: "Hall"
},
{
    name: "Spa"
},
{
    name: "Living Room"
},
{
    name: "Observatory"
},
{
    name: "Theater"
},
{
    name: "Guest House"
},
{
    name: "Patio"
}
];


// Weapons Collection
const weaponsArray = [
    
    {name: 'rope', weight: 10},
    {name: 'knife', weight: 8},
    {name: 'candlestick', weight: 2},
    {name: 'dumbbell', weight: 30},
    {name: 'poison', weight: 2},
    {name: 'axe', weight: 15},
    {name: 'bat', weight: 13},
    {name: 'trophy', weight: 25},
    {name: 'pistol', weight: 20},
];

// ITERATION 2

//Random selector.  

function selectRandom(arr){
let randomNumber = Math.floor((Math.random() * (arr.length)));
let randomSelection = arr[randomNumber];

return randomSelection;

}

//Create the mystery.  

let envelope = {};

function pickMystery(){
//Object.keys(mystery);
   
envelope.suspect = selectRandom(suspectsArray);
envelope.room = selectRandom(roomsArray);
envelope.weapon = selectRandom(weaponsArray);

    return envelope;

}







// ITERATION 3
//Reveal the mystery

function revealMystery(envelope){

let reveal = `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;

return reveal;

//return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using 
//the ${envelope.weapon.name} in the ${envelope.room}!`;

}

console.log(revealMystery(envelope));
