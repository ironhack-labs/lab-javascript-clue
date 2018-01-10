// Characters

var charactersSystem = {
    
    profileId: [
    {name: "Jacob", last_name: "Green", color: "green", description: "He has a lot of connections", age: 45, image: "", occupation: ""},
    
    {name: "Doctor", last_name: "Orchild", color: "white", description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy", age: 26, image: "", occupation: "Scientist"},
    
    {name: "Victor", last_name: "Plum", color: "purple", description: "Billionare video game designer", age: 22, image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", occupation: "Designer"},
    
    {name: "Kasandra", last_name: "Scarlet", color: "red", description: "She is an A-list movie star with a dark past", age: 31, image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", occupation: "Actor"},
    
    {name: "Eleanor", last_name: "Peacock", color: "blue", description: "She is from a wealthy family and uses her status and money to earn popularity", age: 36, image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", occupation: "Socialité"},
    
    {name: "Jack", last_name: "Mustard", color: "yellow", description: "He is a former football player who tries to get by on his former glory", age: 62, image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", occupation: "Retired Football Player"},
    
]};


var houseSystem = {
    weapons: [
    {name: "rope", weight: 10},
    {name: "knife", weight: 8},
    {name: "candlestick", weight: 2},
    {name: "dumbell", weight: 30},
    {name: "poison", weight: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20}  
],
    rooms: [
      {name: "Dinning Room"},
      {name: "Conservatory"},
      {name: "Kitchen"},
      {name: "Study"},
      {name: "Library"},
      {name: "Billiard Room"},
      {name: "Lounge"},
      {name: "Ballroom"},
      {name: "Hall"},
      {name: "Spa"},
      {name: "Living Room"},
      {name: "Observatory"},
      {name: "Theater"},
      {name: "Guest House"},
      {name: "Patio"} 
]};


// Characters Collection
var charactersArray = charactersSystem.profileId;
console.log(charactersArray);

// Rooms' Collection
var roomsArray = houseSystem.rooms;
console.log(roomsArray);

// Weapons Collection
var weaponsArray = houseSystem.weapons;
console.log(weaponsArray);

var carta = "";
//charactersArray, roomsArray, weaponsArray
function randomSelector(array){
    return array[Math.floor(Math.random()*array.length-1)];
}

var asesinado = randomSelector(charactersArray);
var lugar = randomSelector(roomsArray);
var arma = randomSelector(weaponsArray);

var misterio = "El personaje " + asesinado.name + " en el lugar " + lugar.name + " por el misterioso arma de " + arma.name; 

console.log(misterio);





