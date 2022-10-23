// ITERATION 1

// Suspects Array

let suspectsArray;

suspectsArray = [
    {
        firstName: 'Dra. Orquidea',
        lastName: 'Melendeza',
        occupation: 'Doctora',
        age: 45,
        description: 'La genio',
        image: 'https://www.cronoroom.com/wp-content/uploads/2019/05/img-cluedo-02.png',
        color: 'Blue'
    },
    {
        firstName: 'Srta. Amapola',
        lastName: 'Ruiz',
        occupation: 'Ceo',
        age: 40,
        description: 'La femme fatale',
        image: 'https://www.cronoroom.com/wp-content/uploads/2019/05/img-cluedo-02.png',
        color: 'black'
    },
    {
        firstName: 'Sra. Celeste',
        lastName: 'Alvarez',
        occupation: 'Empresaria',
        age: 32,
        description: 'La sociable',
        image: 'https://www.cronoroom.com/wp-content/uploads/2019/05/img-cluedo-02.png',
        color: 'green'
    },
    {
        firstName: 'Profesor Mora',
        lastName: 'Gutierrez',
        occupation: 'Profesor',
        age: 67,
        description: 'El intelectual',
        image: 'https://www.cronoroom.com/wp-content/uploads/2019/05/img-cluedo-02.png',
        color: 'brown'
    },
    {
        firstName: 'Coronel Rubio',
        lastName: 'Ayala',
        occupation: 'Entrepreneur',
        age: 51,
        description: 'El macho alfa',
        image: 'https://www.cronoroom.com/wp-content/uploads/2019/05/img-cluedo-02.png',
        color: 'red'
    },
    {
        firstName: 'Padre Prado',
        lastName: 'Green',
        occupation: 'Parroco',
        age: 27,
        description: 'El playboy',
        image: 'https://www.cronoroom.com/wp-content/uploads/2019/05/img-cluedo-02.png',
        color: 'yellow'
    }
];

// Roomname
const roomsArray = [

    { name: 'Café' },
    { name: 'Salón' },
    { name: 'Baño' },
    { name: 'Cocina' },
    { name: 'Despacho' },
    { name: 'Jardin' },
    { name: 'Sotano' },
    { name: 'Biblioteca' },
    { name: 'Invernadero' },
    { name: 'Buhardilla' },
    { name: 'Taller' },
    { name: 'Habitacion de invitados' },
    { name: 'Garaje' },
    { name: 'Altillo' },
    { name: 'Porche' },

];

let weaponsArray = [
    {
        name: 'Sword',
        weight: 10,
    },
    {
        name: 'Axe',
        weight: 20,
    },
    {
        name: 'Mace',
        weight: 15,
    },
    {
        name: 'Spear',
        weight: 25,
    },
    {
        name: 'Knife',
        weight: 30,
    },
    {
        name: 'Bow',
        weight: 35,
    },
    {
        name: 'Ammunition',
        weight: 40,
    },
    {
        name: 'Ice Pick',
        weight: 5,
    },
    {
        name: 'Stone',
        weight: 10,
    },
];

function selectRandom(array) {

    return array[Math.floor(Math.random() * array.length)]
}



function pickMystery() {
    return { suspect: selectRandom(suspectsArray), weapon: selectRandom(weaponsArray), room: selectRandom(roomsArray) }
}


// ITERATION 3

function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}
