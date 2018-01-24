// Characters

var mrGreen= {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
}

var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:   "Scientist"
}

var profPlum ={
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
}

var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
}

var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
}

var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
}

// Weapons

var rope ={
    name: "rope",
    weight: 10
}

var knife = {
    name: "knife",
    weight: 8
}

var candlestick = {
    name: "candlestick",
    weight: 2
}

var dumbbell = {
    name: "dumbbell",
    weight: 30
}

var poison = {
    name: "poison",
    weight: 2
}

var axe = {
    name: "axe",
    weight: 15
}

var bat = {
    name: "bat",
    weight: 13
}

var trophy = {
    name: "trophy",
    weight: 25
}

var pistol = {
    name: "pistol",
    weight: 20
}

// Rooms

var dinningRoom ={
    name: "Dinning Room"
}

var conservatory={
    name: "Conservatory"
}

var kitchen = {
    name: "Kitchen"
}

var study = {
    name: "Study"
}

var library = {
    name: "Library"
}
var billiardRoom = {
    name: "Billiard Room"
}

var lounge = {
    name: "Lounge"
}

var ballroom = {
    name: "Ballroom"
}

var hall = {
    name: "Hall"
}

var spa = {
    name: "Spa"
}

var livingRoom = {
    name: "Living Room"
}

var observatory = {
    name: "Observatory"
}

var theater = {
    name: "Theater"
}

var guestHouse={
    name: "Guest House"
}

var patio={
    name: "Patio"
}

// Characters Collection

var charactersArray = [];

charactersArray.push(mrGreen);

charactersArray.push(drOrchid);

charactersArray.push(profPlum);

charactersArray.push(missScarlet);

charactersArray.push(mrsPeacock);

charactersArray.push(mrMustard);

// Rooms' Collection

var roomsArray = [];

roomsArray.push(dinningRoom);
roomsArray.push(conservatory);
roomsArray.push(kitchen);
roomsArray.push(study);
roomsArray.push(library);
roomsArray.push(billiardRoom);
roomsArray.push(lounge);
roomsArray.push(ballroom);
roomsArray.push(hall);
roomsArray.push(spa);
roomsArray.push(livingRoom);
roomsArray.push(observatory);
roomsArray.push(theater);
roomsArray.push(guestHouse);
roomsArray.push(patio);

// Weapons Collection

var weaponsArray = [];

weaponsArray.push(rope);
weaponsArray.push(knife);
weaponsArray.push(candlestick);
weaponsArray.push(dumbbell);
weaponsArray.push(poison);
weaponsArray.push(axe);
weaponsArray.push(bat);
weaponsArray.push(trophy);
weaponsArray.push(pistol);

// Creating the mistery

function randomSelector(arr){
    var random = Math.floor(Math.random()*arr.length);
    return arr[random];
}


function pickMistery(){
    var randomCharacter = randomSelector(charactersArray);
    var randomWeapon = randomSelector(weaponsArray);
    var randomRoom = randomSelector(roomsArray);
    return [randomCharacter, randomWeapon, randomRoom];
}

var misteryEnvelope = pickMistery()

// Revealing the mistery

function revealMistery(array){
    
    return array[0].first_name + " " + array[0].last_name + " killed Mr.Boddy using the " + array[1].name + " in the " + array[2].name + "!!!!";
}

// Para lo que pidio Andrei

// function pickMisteryAndrei(characterStack, weaponStack, roomStack){
//     var randomCharacter = randomSelector(characterStack);
//     var randomWeapon = randomSelector(weaponStack);
//     var randomRoom = randomSelector(roomStack);
//     return [randomCharacter, randomWeapon, randomRoom];
// }

// function revealMisteryAndrei(characterStack, weaponStack, roomStack){
    
//     var arr=pickMisteryAndrei(characterStack, weaponStack, roomStack)
//     return arr[0].first_name + " " + arr[0].last_name + " killed Mr.Boddy using the " + arr[1].name + " in the " + arr[2].name + "!!!!";
// }