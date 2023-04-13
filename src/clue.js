// ITERATION 1

// Suspects Array

const suspectsArray = [
    { firstName: 'Michael1', lastName: 'couto1', occupation: 'comedy', age: 24, description: 'sda', image:'asf', color:'azul' },
    { firstName: 'Michael2', lastName: 'couto2', occupation: 'comedy', age: 54, description: 'safas', image:'asf', color:'roxo' },
    { firstName: 'Michael3', lastName: 'couto3', occupation: 'comedy', age: 44, description: 'asf', image:'afs', color:'laranja' },
    { firstName: 'Michael4', lastName: 'couto4', occupation: 'comedy', age: 55, description: 'asf', image:'afs', color:'verde' },
    { firstName: 'Michael5', lastName: 'couto5', occupation: 'comedy', age: 66, description: 'afs', image:'af', color:'castanho' },
    { firstName: 'Michael6', lastName: 'couto6', occupation: 'comedy', age: 77, description: 'asff', image:'asf', color: 'vermelho' },
];
//suspectsArray.push (suspect1, suspect2, suspect3, suspect4, suspect5, suspect6);

// Rooms Array
const roomsArray = [
    { name: 'room1'}, { name: 'room2'}, { name: 'room3'}, { name: 'room4'}, { name: 'room5'}, { name: 'room6'}, { name: 'room7'}, { name: 'room8'},
    { name: 'room9'}, { name: 'room10'}, { name: 'room11'}, { name: 'room12'}, { name: 'room13'}, { name: 'room14'}, { name: 'room15'}, 
];

// Weapons Array
const weaponsArray = [
    { name: 'Arma1', weight: 41}, { name: 'Arma2', weight: 42}, { name: 'Arma3', weight: 43}, { name: 'Arma4', weight: 44}, { name: 'Arma5', weight: 45},
    { name: 'Arma6', weight: 46}, { name: 'Arma7', weight: 47}, { name: 'Arma8', weight: 48}, { name: 'Arma9', weight: 49},
];


// ITERATION 2

function selectRandom(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function pickMystery() {

        let randomSuspect = selectRandom(suspectsArray);
        let randomRoom = selectRandom(roomsArray);
        let randomWeapon = selectRandom(weaponsArray);
    
        let randomMistery = {
            suspect: randomSuspect,
            room: randomRoom,
            weapon: randomWeapon
        }
    
        return randomMistery;
     } 



// ITERATION 3

function revealMystery(randomMistery) {
    return `${randomMistery.suspect.firstName} ${randomMistery.suspect.lastName} killed Mr. Boddy using the ${randomMistery.weapon.name} in the ${randomMistery.room.name}!`;
}
