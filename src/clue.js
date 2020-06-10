let mrGreen = {
    first_name:   'Jacob',
    last_name:    'Green',
    color:        'green',
    description:  'He has a lot of connections',
    age:          '45',
    image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation:   'Entrepreneur'
  };
let drOrchid = {
    first_name:   'Doctor',
    last_name:    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          '26',
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation:   'Scientist'
};
let profPlum = {
    first_name:   'Victor',
    last_name:    'Plum',
    color:        'purple',
    description:  'Billionare video game designer',
    age:          '22',
    image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation:   'Designer'
};
let missScarlet = {
    first_name:   'Kasandra',
    last_name:    'Scarlet',
    color:        'red',
    description:  'She is an A-list movie star with a dark past',
    age:          '31',
    image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation:   'Actor'
};
let mrsPeacock = {
    first_name:   'Eleanor',
    last_name:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          '36',
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité'
};
let mrMustard = {
    first_name:   'Jack',
    last_name:    'Mustard',
    color:        'yellow',
    description:  'He is a former football player who tries to get by on his former glory',
    age:          '62',
    image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation:   'Retired Football player'
};


// Weapons
const rope        = { name: 'rope',         weight: 10 };
const knife       = { name: 'knife',        weight: 8 };
const candlestick = { name: 'candlestick',  weight: 2 };
const dumbbell    = { name: 'dumbbell',     weight: 30 };
const poison      = { name: 'poison',       weight: 2 };
const axe         = { name: 'axe',          weight: 15 };
const bat         = { name: 'bat',          weight: 13 };
const trophy      = { name: 'trophy',       weight: 25 };
const pistol      = { name: 'pistol',       weight: 20 };

// Rooms
const diningRoom   = { name: 'Dinning Room' };
const conservatory = { name: 'Conservatory' };
const kitchen      = { name: 'Kitchen' };
const study        = { name: 'Study' };
const library      = { name: 'Library' };
const billiardRoom = { name: 'Billiard Room' };
const lounge       = { name: 'Lounge' };
const ballroom     = { name: 'Ballroom' };
const hall         = { name: 'Hall' };
const spa          = { name: 'Spa' };
const livingRoom   = { name: 'Living Room' };
const observatory  = { name: 'Observatory' };
const theater      = { name: 'Theater' };
const guestHouse  =  { name: 'Guest House' };
const patio        = { name: 'Patio' };

  


// ITERATION 1

// Suspects Collection
const suspectsArray = [
    mrGreen, 
    mrMustard, 
    missScarlet,
    mrGreen, 
    drOrchid,
    profPlum
];


// Rooms Collection
const roomsArray = [
    diningRoom,  
    conservatory,
    kitchen,     
    study,       
    library,     
    billiardRoom,
    lounge,      
    ballroom,    
    hall,        
    spa,         
    livingRoom,  
    observatory, 
    theater,     
    guestHouse,  
    patio           
];

// Weapons Collection
const weaponsArray = [
    rope,       
    knife,      
    candlestick,
    dumbbell,   
    poison,     
    axe,        
    bat,        
    trophy,     
    pistol     
];

// ITERATION 2

function selectRandom(arr){
    let rand=Math.floor(Math.random() * arr.length)
    return arr[rand]
}

function pickMystery(){
    let newObj={};
    newObj.suspect= selectRandom(suspectsArray)
    newObj.room= selectRandom(roomsArray)
    newObj.weapon= selectRandom(weaponsArray)

    return newObj;
}


// ITERATION 3
function revealMystery(envolope){
    return ""+envolope.suspect.firstName+" "+envolope.suspect.lastName+" killed Mr. Boddy using the "+envolope.weapon.name+" in the "+envolope.room.name+"!"
}