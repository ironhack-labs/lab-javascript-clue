
let mrGreen = { 
first_name:   'Jacob',
last_name:    'Green',
color:        'green',
description:  'He has a lot of connections',
age:          45,
image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
occupation:   'Entrepreneur',
}
let drOrchid = { 
first_name:   'Doctor',
last_name:    'Orchid',
color:        'white',
description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
age:          26,
image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
ocupation:   'Scientist'
}
let profPlum = {
first_name:   'Victor',
last_name:    'Plum',
color:        'purple',
description:  'Billionare video game designer',
age:          22,
image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
occupation:   'Designer'
}
let missScarlet = { 
first_name:   'Kasandra',
last_name:    'Scarlet',
color:        'red',
description:  'She is an A-list movie star with a dark past',
age:          31,
image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
occupation:   'Actor'
}
let mrsPeacock ={
first_name:   'Eleanor',
last_name:    'Peacock',
color:        'blue',
description:  'She is from a wealthy family and uses her status and money to earn popularity',
age:          36,
image:       'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
occupation:   'Socialité'
}
let mrMustard ={
first_name:   'Jack',
last_name:    'Mustard',
color:        'yellow',
description:  'He is a former football player who tries to get by on his former glory',
age:          62,
image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
occupation:   'Retired Football player'
}


let rope ={   weight: 10}
let knife ={ weight: 8}
let candlestick ={ weight: 2}
let dumbbell ={   weight: 30}
let poison ={     weight: 2}
let axe = {     weight: 15}
let bat  = { weight: 13}
let trophy = { weight: 25}
let pistol = {weight: 20} 

let cuarto1 = {name: 'Dinning Room'}
let cuarto2 = {name: 'Conservatory'}
let cuarto3 = {name: 'Kitchen'}
let cuarto4 ={name: 'Study'}
let cuarto5 ={name: 'Library'}
let cuarto6 ={name: 'Billiard Room'}
let cuarto7 ={name: 'Lounge'}
let cuarto8 ={name: 'Ballroom'}
let cuarto9 ={name: 'Hall'}
let cuarto10 ={name: 'Spa'}
let cuarto11 ={name: 'Living Room'}
let cuarto12 ={name: 'Observatory'}
let cuarto13 ={name: 'Theater'}
let cuarto14 ={name: 'Guest House'}
let cuarto15 ={name: 'Patio'}


// Characters Collection
var charactersArray = [mrGreen,drOrchid,profPlum,mrsPeacock,mrMustard,missScarlet];

// Rooms' Collection
var roomsArray = [cuarto1,cuarto2,cuarto3,cuarto4,cuarto5,cuarto6,cuarto7,cuarto8,cuarto9,cuarto10,cuarto11,cuarto12,cuarto13,cuarto14,cuarto15];

// Weapons Collection
var weaponsArray = [rope, knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];


//nos da un numero al azar
function randomSelector (array) {
    let arrIndex=Math.floor(Math.random() * array.length)
    return array[arrIndex]
    }
//misterio al azar
function pickMistery () {
    let jugador = randomSelector(charactersArray)
    let arma = randomSelector(weaponsArray)
    let cuarto = randomSelector(roomsArray)
        return [jugador, arma, cuarto]
    }

let misteryEnvelope= pickMistery()
//resuelve el msiterio?

function revealMistery(misteryEnvelope) {
    return `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${Object.values(misteryEnvelope[1])} in the ${misteryEnvelope[2].name}!!!!`
    }