//Primero se declaran los objetos, luego se agregan al arreglo, de otra manera, el arreglo guardará los objetos con undefined.

var mrGreen =
    {
        first_name: "Jacob",
        last_name: "Green",
        color: "green",
        description: "He has a lot of connections",
        age: 45,
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        occupation: "Entrepreneur"
    };

var drOrchid =
    {
        frst_name: "Doctor",
        lst_name: "Orchid",
        color: "white",
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        age: 26,
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        ocupation: "Scientist"
    };

var profPlum =
    {
        first_name: "Victor",
        last_name: "Plum",
        color: "purple",
        description: "Billionare video game designer",
        age: 22,
        image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        occupation: "Designer"
    };

var missScarlet =
    {
        first_name: "Kasandra",
        last_name: "Scarlet",
        color: "red",
        description: "She is an A-list movie star with a dark past",
        age: 31,
        image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
        occupation: "Actor"
    };

var mrsPeacock =
    {
        first_name: "Eleanor",
        last_name: "Peacock",
        color: "blue",
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        age: 36,
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        occupation: "Socialité"
    };

var mrMustard =
    {
        first_name: "Jack",
        last_name: "Mustard",
        color: "yellow",
        description: "He is a former football player who tries to get by on his former glory",
        age: 62,
        image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
        occupation: "Retired Football player"
    };

//Hasta aquí se coloca el arreglo:
// Characters Collection:

var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// En este caso el objeto sólo contiene strings, así que no importa dónde se declara:
// Rooms' Collection
var roomsArray = [
    "Dinning Room",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "Billiard Room",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "Living Room",
    "Observatory",
    "Theater",
    "Guest House",
    "Patio"];

// Weapons Collection

var rope = { name: "rope", weight: 10 };
var knife = { name: "knife", weight: 8 };
var candlestick = { name: "candlestick", weight: 2 };
var dumbbell = { name: "dumbbell", weight: 30 };
var poison = { name: "poison", weight: 2 };
var axe = { name: "axe", weight: 15 };
var bat = { name: "bat", weight: 13 };
var trophy = { name: "trophy", weight: 25 };
var pistol = { name: "pistol", weight: 20 };

//Otra vez el mismo caso, el arreglo de las armas se declara después de los objetos:
var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

//Create a method randomSelector to randomly select one element from a card stack. The method should receive an array as an argument, and return randomly one of the elements of the array.

function randomSelector(array) {
    return array[Math.floor(Math.random() * array.length)];
}
//console.log(randomSelector(charactersArray)); //esta línea es para probar la función

//We need to create a pickMistery method that will call randomSelector for each card stack, and return an array with the 3 picked cards, a character, a weapon and a room. Our mystery should be stored on a misteryEnvelope variable.
var misteryEnvelope = [];

function pickMistery(func, array) {
    misteryEnvelope = [
        randomSelector(charactersArray),
        randomSelector(weaponsArray),
        randomSelector(roomsArray),
    ]
    return misteryEnvelope;
};
console.log(pickMistery());

/*
//Intento de otra manera de hacerlo:
function pickMistery(func,array){
  var misteryEnvelope = [
    func(array),
  ]
  return misteryEnvelope;
};
pickMistery(randomSelector(charactersArray)); 
pickMistery(randomSelector(charactersArray));
pickMistery(randomSelector(charactersArray));
*/

/*//Intentar con función callBack (si es posible);
function pickMistery(func,array){
  var misteryEnvelope = func(array);
  return misteryEnvelope;
};

pickMistery(randomSelector,charactersArray);
pickMistery(randomSelector,weaponsArray);
pickMistery(randomSelector,roomsArray);

//Ejemplo de función call back:

function saluda(name){
  console.log("Hola " + name);
}

function ejecutale(nombre, func){
  func(nombre);
}
ejecutale("Bliss",saluda);
*/

//Create a revealMistery method, that will receive our misteryEnvelope array as an argument and return the revealed mystery like this:

//<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!

function revealMistery(array) {
    return misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2]; + "!!!!";
};
console.log(revealMistery(misteryEnvelope));