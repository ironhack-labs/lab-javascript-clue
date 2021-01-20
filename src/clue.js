// ITERATION 1



// Suspects Collection
const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepeneur',
        age: '25',
        description: 'tall guy',
        image: 'cat',
        color: 'blue' 
    },
    {
        firstName: 'Maria',
        lastName: 'da Silva',
        occupation: 'Astronaut',
        age: '34',
        description: 'clever',
        image: 'dog',
        color: 'red' 
    },
    {
        firstName: 'Jose',
        lastName: 'Santos',
        occupation: 'Pumbler',
        age: '17',
        description: 'short guy',
        image: 'elephant',
        color: 'pink' 
    },
    {
        firstName: 'Delirio',
        lastName: 'Black',
        occupation: 'Hunter',
        age: '14',
        description: 'crazy dude',
        image: 'dragon',
        color: 'black' 
    },
    {
        firstName: 'Relampago',
        lastName: 'Marquinhos',
        occupation: 'Uber driver',
        age: '40',
        description: 'lazy',
        image: 'car',
        color: 'red' 
    },
    {
        firstName: 'Chiquinho',
        lastName: 'Boa Praça',
        occupation: 'Drug dealer',
        age: '38',
        description: 'calm and gentle',
        image: 'seal',
        color: 'verde' 
    }
        
];

// Rooms Collection
const roomsArray = [
    {
        name: 'sala-de-estar',
    },
    {
        name: 'quarto',
    },
    {
        name: 'cozinha',
    },
    {
        name: 'suite14',
    },
    {
        name: 'banheiro',
    },
    {
        name: 'lavabo',
    },
    {
        name: 'edicula',
    },
    {
        name: 'jardim',
    },
    {
        name: 'sacada',
    },
    {
        name: 'escritorio',
    },
    {
        name: 'sala-de-jantar',
    },
    {
        name: 'academia',
    },
    {
        name: 'salao-de-festas',
    },
    {
        name: 'salao-de-jogos',
    },
    {
        name: 'sauna',
    },
];

// Weapons Collection
const weaponsArray = [
    {
        name: 'AK-47',
        weight: '47kg'
    },
    {
        name: 'faca',
        weight: '100kg'
    },
    {
        name: 'machado',
        weight: '3g'
    },
    {
        name: 'punhal',
        weight: '10kg'
    },
    {
        name: 'espada',
        weight: '150kg'
    },
    {
        name: 'glock',
        weight: '200kg'
    },
    {
        name: 'desert-eagle',
        weight: '1kg'
    },
    {
        name: 'assault-rifle',
        weight: '2kg'
    },
    {
        name: 'soco-ingles',
        weight: '1000kg'
    }
];

// const cardType = [suspectsArray, weaponsArray, roomsArray];
// ITERATION 2


function selectRandom(firstArray, secondArray, thirdArray){
    let firstRandomNumber = 0;
    let secondRandomNumber = 0;
    let thirdRandomNumber = 0;
    let list = '';

    // for(let i = 0; i<firstArray.length; i++){
        firstRandomNumber = Math.random() * firstArray.length;
        firstRandomNumber = Math.round(firstRandomNumber);
        list += `${firstRandomNumber} `;
    // }
    // for(let i = 0; i<secondArray.length; i++){
        secondRandomNumber = Math.random() * secondArray.length;
        secondRandomNumber = Math.round(secondRandomNumber);
        list += `${secondRandomNumber} `;
    // }
    // for(let i = 0; i<thirdArray.length; i++){
        thirdRandomNumber = Math.random() * thirdArray.length;
        thirdRandomNumber = Math.round(thirdRandomNumber);
        list += `${thirdRandomNumber} `;
    // }


    return list;
}


function pickMystery(){
    const objeto
    return objeto
}

console.log(`The selected numbers for your game are ${selectRandom(suspectsArray, roomsArray, weaponsArray)}`);
// ITERATION 3

