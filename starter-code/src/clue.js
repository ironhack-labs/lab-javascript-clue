// Characters Collection
let mrGreen = {
    first_name:   'Jacob',
    "last_name":    'Green',
    color:        'green',
    description:  'He has a lot of connections',
    age:          45,
    image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation:   'Entrepreneur'
    }
    
    let drOrchid = {
    first_name:   'Doctor',
    "last_name":    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          26,
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    ocupation:   'Scientist'
    }
    
    let profPlum = {
    first_name:   'Victor',
    "last_name":    'Plum',
    color:        'purple',
    description:  'Billionare video game designer',
    age:          22,
    image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation:   'Designer'
    }
    
    let missScarlet = {
    first_name:   'Kasandra',
    "last_name":    'Scarlet',
    color:        'red',
    description:  'She is an A-list movie star with a dark past',
    age:          31,
    image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation:   'Actor'
    }
    
    let mrsPeacock = {
    first_name:   'Eleanor',
    "last_name":    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          36,
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité'
    }
    
    let mrMustard = {
    first_name:   'Jack',
    "last_name":    'Mustard',
    color:        'yellow',
    description:  'He is a former football player who tries to get by on his former glory',
    age:          62,
    image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation:   'Retired Football player'
    }

var charactersArray = [
    mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard
];

// Rooms' Collection
var roomsArray = [
    {name: 'rope',   weight: 10},
    {name: 'knife',   weight: 8},
    {name: 'candlestick',   weight: 2},
    {name: 'dumbbell',   weight: 30},
    {name: 'poison',   weight: 2},
    {name: 'axe',   weight: 15},
    {name: 'bat',   weight: 13},
    {name: 'trophy',   weight: 25},
    {name: 'pistol',   weight: 20}
];

// Weapons Collection
var weaponsArray = [
    'Dinning Room',
    'Conservatory',
    'Kitchen',
    'Study',
    'Library',
    'Billiard Room',
    'Lounge',
    'Ballroom',
    'Hall',
    'Spa',
    'Living Room',
    'Observatory',
    'Theater',
    'Guest House',
    'Patio',
];
// function randomSelector(array) {
//     return array[Math.floor(Math.random() * array.length)];
// }
// 1. Del array que se recibe como parametro se tiene que regresar un indice aleatoriamente
// 2. El indice aleatorio se obtiene de la siguiente forma: Math.floor(Math.random() * array.length)
//  2.1 array.length nos indica la extension del arreglo que recibimos como parametro
//  2.2 Math.random() retorna un número aleatorio dentro del rango [0, 1).
//  2.3 Math.floor() devuelve el entero menor o igual a un número.
// 3. Una vez obtenido el valor aleatorio del arreglo recibido como parametro lo regresamos como respuesta de la funcion
const randomSelector = array => array[Math.floor(Math.random() * array.length)];

// function pickMistery(array) {
//     return [charactersArray[0], weaponsArray[0], roomsArray[0]];
// }
// 1. Se utilizaran las estructuras de datos definidas previamente (charactersArray, weaponsArray, roomsArray)
// 2. Se accede al primer elemento de cada una de las estructuras para retornar como respuesta de la funcion.

const pickMistery = array => [charactersArray[0], weaponsArray[0], roomsArray[0]];

// function revealMistery(array) {
//     return `${array[0].first_name} ${array[0].last_name} killed Mr.Boddy using the ${array[1].name} in the ${array[2].name}!!!!`;
// }
// 1. Se recibe un objeto como parametro que cuenta con la siguiente estructura.
//  0: {first_name: "Victor", last_name: "Plum"}
//  1: {name: "poison"}
//  2: {name: "Billiard Room"}
// 2. Para acceder al nombre y apellido hay que acceder al primer elemento del arreglo (array[0])
// 3. Ya dentro del primer elemento podemos obtener los atributos del objeto contenido en el arreglo mediante la notacion de punto (array[0].first_name).
// 4. Se hace lo mismo con los otros objetos contenidos en los demas elementos del arreglo.
const revealMistery = array => {
    console.log(array);    
    return `${array[0].first_name} ${array[0].last_name} killed Mr.Boddy using the ${array[1].name} in the ${array[2].name}!!!!`;
}
// Saludos Ernesto