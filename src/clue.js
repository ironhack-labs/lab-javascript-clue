// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        name : 'Jacob',
        lastName : 'Green',
        occupation : 'Entrepeneur'
        age : 45,
        description : 'He has a lot of connections'
        image : https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg 
        color : 'green'

    }

    {
        name : 'Doctor',
        lastName : 'Orchid',
        occupation : 'Scientistr'
        age : 26,
        description : 'PhD in plant toxicology. Adopted daughter of Mr. Boddy'
        image : http://www.radiotimes.com/uploads/images/Original/111967.jpg
        color : 'white'
    }   

    { 
        name : 'Victor',
        lastName : 'Plum',
        occupation : 'Designer'
        age : 22,
        description : 'Billionaire video game designer'
        image : https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg  
        color : 'purple'
    }

    {
        name : 'Kasandra',
        lastName : 'Scarlet',
        occupation : 'Actor'
        age : 31,
        description : 'She is an A-list movie star with a dark past'
        image : https://www.radiotimes.com/uploads/images/Original/111967.jpg
        color : 'red'
    }

    {
        name : 'Eleanor',
        lastName : 'Peacock',
        occupation : 'Socialite'
        age : 36,
        description : 'She is from a wealthy family and uses her status and money to earn popularity'
        image : https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
        color : 'blue'
    }
    {
        name : 'Jack',
        lastName : 'Mustard',
        occupation : 'Retired Football player'
        age : 62,
        description : 'He is a former football player who tries to get by on his former glory'
        image : https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg
        color : 'yelow'
    }
];

// Rooms Collection
const roomsArray = [
    {name: 'Dining Room'},
    {name: 'Conservatory'},
    {name: 'Kitchen'},
    {name: 'Study'},
    {name: 'Library'},
    {name: 'Billiard Room'},
    {name: 'Lounge'},
    {name: 'Ballroom'},
    {name: 'Hall'},
    {name: 'Sp'},
    {name: 'Living Room'},
    {name: 'Observatory'},
    {name: 'Theater'},
    {name: 'Guest House'},
    {name: 'Patio'}
];

// Weapons Collection
const weaponsArray = [
    {   name: 'rope',
        weight: 10
    }
    {
        name : 'knife ',
        weight : 8
    }
    {
        name :'candlestick',
        weight : 2
    }
    {
        name : 'dumbbell'
        weight : 30
    }
    {
        name : 'poison ',
        weight : 2 ,
    }
    {
        name : 'axe' ,
        weight : 15 ,
    }
    {
        name : 'bat' ,
        weight : 13 ,
    {
        name : 'trophy',
        weight : 25 ,
    }
    {
        name :'pistol',
        weight : 20 ,
    }
];


// ITERATION 2

function selectRandom(array){
    for(let index = array.length - 1; index > 0; index--){
       let rndIndex = Math.floor(Math.random() * (index + 1));
       let arrayTemp = array[rndIndex];
       array[rndIndex] = array[index];
       array[index] = arrayTemp;
    }
    let getRandomArray = array.slice(0, 1);
    let getRandomElement= getRandomArray[0].name
    return getRandomElement;
}
    
    
function pickMystery(){
    let randomRoom=selectRandom(roomsArray)
    let randomWeapon=selectRandom(weaponsArr)
    let randomSuspects=selectRandom(suspectsArr)
    let pickMystery ={
        suspects :'',
        weapon : '',
        room: ''
    }
    pickMystery.suspects = randomSuspects
    pickMystery.weapon = randomWeapon
    pickMystery.room = randomRoom
    return pickMystery
    }
    




// ITERATION 3

function revealMystery(object){  
    object = pickMystery()    
    console.log(`${object.suspects} killed Mr Boddy using the ${object.weapon} in the ${object.room}` )
    }
    
