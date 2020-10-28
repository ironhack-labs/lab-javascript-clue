// ITERATION 1

// Suspects Collection
const suspectsArray = [{first_name:'Jacob', last_name:'Green', occupation: 'Entrepreneur', age:45, description: 'He has a lot of connections', color:'green'},
                       {first_name:'Doctor', last_name:'Orchid', occupation: 'Scientist', age:26, description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', color:'white'},
                       {first_name:'Victor', last_name:'Plum', occupation: 'Designer', age:22, description: 'Billionaire video game designer', color:'purple'},
                       {first_name:'Kassandra', last_name:'Scarlet', occupation: 'Actor', age:31, description: 'She is an A-list movie star with a dark past', color:'red'},
                       {first_name:'Eleanor', last_name:'Peacock', occupation: 'Socialite', age:36, description: 'She is from a wealthy family and uses her status and money to earn popularity', color:'blue'},
                       {first_name:'Jack', last_name:'Mustard', occupation: 'Retired football player', age:62, description: 'He is a former football player who tries to get by on his former glory', color:'yellow'}];

// Rooms Collection
const roomsArray = [{name:"Dining Room"}, {name:"Conservatory"},{name:"Kitchen"},{name:"Study"}, {name:"Library"}, {name:"Billiard Room"},{name:"Bathroom"},{name:"Lounge"}, {name:"Ballrom"}, {name:"Hall"},{name:"Spa"},{name:"Living Room"}, {name:"Observatory"},{name:"Theater"},{name:"Guest House"},{name:"Patio"}];

// Weapons Collection
const weaponsArray = [{name: "rope", weight: 10},{name: "knife", weight: 8},{name: "candlestick", weight: 2},{name: "dumbbell", weight: 30},{name: "poison", weight: 2},{name: "axe", weight: 15},{name: "bat", weight: 13},{name: "trophy", weight: 25},{name: "pistol", weight: 20}];

// ITERATION 2

function selectRandom(arr){
    let numero = Math.random()*arr.length
    numero = Math.floor(numero)
    return arr[numero];
}

function pickMystery () {
    let suspect = selectRandom(suspectsArray);
    let weapon = selectRandom(weaponsArray);
    let room = selectRandom(roomsArray);
    return {suspect: suspect, weapon: weapon, room: room}
}



// ITERATION 3


function revealMystery(obj){
    return `${obj.suspect.first_name} ${obj.suspect.last_name} killed Mr. Boddy using the ${obj.weapon.name} in the ${obj.room.name}!`
}


