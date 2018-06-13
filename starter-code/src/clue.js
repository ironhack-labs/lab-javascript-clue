// Characters
var charactersArray = [
    {first_name: 'Jacob', last_name: 'Green',color:'green', description:'He has a lot of connections', age: 45, occupation:'Entrepreneur'},
    {first_name: 'Doctor', last_name: 'Orchid',color:'white', description:'PhD in plant toxicology. Adopted daughter of Mr. Boddy', age: 26, ocupation: 'Scientist'},
    {first_name: 'Victor', last_name:'Plum' ,color:'purple', description:'Billionare video game designer', age: 22, occupation: 'Designer'},
    {first_name: 'Kasandra', last_name:'Scarlet' ,color: 'red', description: 'She is an A-list movie star with a dark past', age: 31, occupation:'Actor' },
    {first_name:  'Eleanor', last_name:'Peacock',color: 'blue', description: 'She is from a wealthy family and uses her status and money to earn popularity', age: 36, occupation: 'Socialité'},
    {first_name:  'Jack', last_name:'Mustard' ,color: 'yellow', description: 'He is a former football player who tries to get by on his former glory', age: 62, occupation: 'Retired Football player'}   
];

// Weapons
var weaponsArray = [
    {name: 'rope', weight:10},
    {name: 'knife', weight:8},
    {name: 'candlestick', weight:21},
    {name: 'dumbbell', weight: 30},
    {name: 'axe', weight: 15},
    {name: 'bat', weight: 13},
    {name: 'trophy', weight: 25},
    {name: 'pistol', weight: 20}
];

// Rooms
var roomsArray = [
    {name: 'Dinning Room'},
    {name: 'Conservatory'},
    {name: 'Kitchen'},
    {name: 'Study'},
    {name: 'Library'},
    {name: 'Billiard Room'},
    {name: 'Lounge'},
    {name: 'Ballroom'},
    {name: 'Hall'},
    {name: 'Spa'},
    {name: 'Living Room'},
    {name: 'Observatory'},
    {name: 'Theatre'},
    {name: 'Guest House'},
    {name: 'Patio'}
];


var randomPick = [];


function randomSelector(randomArray){
    randomPick = (randomArray[Math.floor(Math.random() * randomArray.length)]);
    
    return randomPick
}

function pickMistery(){
    var misteryEnvelope= [];
    misteryEnvelope.push(randomSelector(charactersArray))
    misteryEnvelope.push(randomSelector(weaponsArray))
    misteryEnvelope.push(randomSelector(roomsArray))
    
    return misteryEnvelope
}
pickMistery()

function revealMistery(misteryEnvelope){
  return (misteryEnvelope[0].first_name + ' ' + misteryEnvelope[0].last_name +  " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!" );
}
revealMistery()