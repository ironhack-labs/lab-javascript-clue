// ITERATION 1

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur'
    }
];
const roomsArray = [2, 5, 7, 5, 3, 7, 9];
const weaponsArray = ["Paper", "water", "poison"];

const selectRandom = (array) => {
    let randomIdx = 0;
    if (array.length == 0) {
        return undefined
    } else if (array.length == 1) {
        return array[0];
    } else {
        randomIdx = Math.floor((Math.random() * array.length));
        return array[randomIdx]
    }
}
const pickMystery = () => {
    let object = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }

    return object
}


let envelope = pickMystery()


const revealMystery = (envelope) => {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}


revealMystery(envelope);

// ITERATION 2

// ITERATION 3
