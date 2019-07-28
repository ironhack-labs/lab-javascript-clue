//Iteration 1 - Creating the cards charactersArray, weaponsArray, roomsArray
//character
var charactersArray = [];
charactersArray.push(new Characters(
    "Jacob",
    "Green",
    "green",
    "He has a lot of connections",
    "45",
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    "Entrepreneur"))
charactersArray.push(new Characters(
    "Doctor",
    "Orchid",
    "white",
    "PhD in plan toxicology. Adopter daughter of Mr. Boddy",
    "26"))
charactersArray.push(new Characters(
    "Victor",
    "Plum",
    "purple",
    "Billionare video game designer",
    "22",
    "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    "Designer"))
charactersArray.push(new Characters(
    "Kasandra",
    "Scarlet",
    "red",
    "She is an A-list movie star with a dark past",
    "31",
    "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    "Actor"))
charactersArray.push(new Characters(
    "Eleanor",
    "Peacock",
    "blue",
    "She is from a wealthy family and uses her status and money to earn popularity",
    "36",
    "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    "Socialité"))
charactersArray.push(new Characters(
    "Jack",
    "Mustard",
    "yellow",
    "He is a former football player who tries to get by on his former glory",
    "62",
    "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    "Retired Football player"))
// Rooms Collection
var roomsArray = []
roomsArray.push(new Rooms("Dinning room"))
roomsArray.push(new Rooms("Conservatory"))
roomsArray.push(new Rooms("Kitchen"))
roomsArray.push(new Rooms("Study"))
roomsArray.push(new Rooms("Library"))
roomsArray.push(new Rooms("Billiard Room"))
roomsArray.push(new Rooms("Lounge"))
roomsArray.push(new Rooms("Ballroom"))
roomsArray.push(new Rooms("Hall"))
roomsArray.push(new Rooms("Spa"))
roomsArray.push(new Rooms("Living Room"))
roomsArray.push(new Rooms("Observatory"))
roomsArray.push(new Rooms("Theater"))
roomsArray.push(new Rooms("Guest House"))
roomsArray.push(new Rooms("Patio"))

// Weapons Collection
var weaponsArray = []
weaponsArray.push(new Weapons("rope", "10"))
weaponsArray.push(new Weapons("knife", "8"))
weaponsArray.push(new Weapons("candlestick", "2"))
weaponsArray.push(new Weapons("dumbbell", "30"))
weaponsArray.push(new Weapons("poison", "2"))
weaponsArray.push(new Weapons("axe", "15"))
weaponsArray.push(new Weapons("bat", "13"))
weaponsArray.push(new Weapons("trophy", "25"))
weaponsArray.push(new Weapons("pistol", "20"))

// Characters Collection
function Characters(firstname, lastname, color, description, age, image, occupation) {
    this.first_name = firstname;
    this.last_name = lastname;
    this.color = color;
    this.description = description;
    this.age = age;
    this.image = image;
    this.occupation = occupation;
}

function Weapons(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Rooms(name) {
    this.name = name;
}

//random selector
function randomSelector(array) {
    if (array.length === 0) {
        return undefinded
    }
    else {
        return array[Math.floor(Math.random() * array.length)];
    }
}
//Iteration 2 - Creating the mistery
// Defines pickMistery
// Return an array
// Return a non empty array
// Return an array with 3 elements
// Return a killer on the first index of the array
// Return a weapon on the second index of the array
// Return a room in the third index of the array

function pickMistery(charactersArray, weaponsArray, roomsArray) {
    let character = randomSelector(charactersArray);
    let weapon = randomSelector(weaponsArray);
    let room = randomSelector(roomsArray);
    return [room, character, weapon]
}

let misteryEnvelope = pickMistery(charactersArray, weaponsArray, roomsArray);

//Iteration 3 - Revealing the mistery
// Create a revealMistery method, that will receive our misteryEnvelope array 
// as an argument and return the revealed mystery like this:
//<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!
function revealMistery(misteryEnvelope) {
    return `${misteryEnvelope[1].first_name} ${misteryEnvelope[1].last_name} killed Mr.Boddy using the ${misteryEnvelope[2].name} in the ${misteryEnvelope[0]}>!!!!`

}
