// ITERATION 1

// Suspects Collection
class Suspect {
    constructor(firstName, lastName, occupation, age, description, image, color){
        this.firstName= firstName
        this.lastName= lastName
        this.occupation= occupation
        this.age= age
        this.description= description
        this.image= image
        this.color= color
    }
}

var mrGreen = new Suspect("Jacob", "Green", "Entrepreneur", 45, "He has a lot of connections", "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "green");
var drOrchid = new Suspect("Doctor", "Orchid", "Scientist", 26, "PhD in plant toxicology. Adopted daughter of Mr. Boddy", "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "white");
var profPlum = new Suspect("Victor", "Plum", "Designer", 22, "Billionaire video game designer", "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", "purple");
var missScarlet = new Suspect("Kassandra", "Scarlet", "Actor", 31, "She is an A-list movie star with a dark past", "https://www.radiotimes.com/uploads/images/Original/111967.jpg", "red");
var mrsPeacock = new Suspect("Eleanor", "Peacock", "Socialite", 36, "She is from a wealthy family and uses her status and money to earn popularity", "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "blue");
var mrMustard = new Suspect("Jack", "Mustard", "Retired Football Player", 62, "He is a former football player who tries to get by on his former glory", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", "yellow");

const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Collection
class Room {
    constructor(roomName){
        this.name= roomName
    }
}

var diningRoom = new Room("Dining Room");
var conservatory = new Room("Conservatoy");
var kitchen = new Room("Kitchen");
var study = new Room("Study");
var library = new Room("Library;");
var billiardRoom = new Room("Billiard Room");
var lounge = new Room("Lounge");
var ballroom = new Room("Ballroom");
var hall = new Room("Hall");
var spa = new Room("Spa");
var livingRoom = new Room("Living Room");
var observatory = new Room("Obervatory");
var theater = new Room("Theater");
var guestHouse = new Room("Guest House");
var patio = new Room("Patio");

const roomsArray = [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

// Weapons Collection
class Weapon {
    constructor(name, weight) {
        this.name = name
        this.weight = weight
    }
}

var rope = new Weapon("rope", 10);
var knife = new Weapon("knife", 8);
var candlestick = new Weapon("candlestick", 2);
var dumbbell = new Weapon("dumbbell", 30);
var poison = new Weapon("poison", 2);
var axe = new Weapon("axe", 15);
var bat = new Weapon("bat", 13);
var trophy = new Weapon("trophy", 25);
var pistol = new Weapon("pistol", 20);

const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

// ITERATION 2
function selectRandom(array) {
    return array[Math.floor((Math.random() * array.length))];
}

function pickMystery(array1, array2, array3){
    var revelation = { 
        suspect: selectRandom(array1),
        room: selectRandom(array2),
        weapon: selectRandom(array3)
    };
    return revelation;
}


// ITERATION 3
function revealMystery(envelope){
    console.log(`${envelope.suspect.firstName} ${envelope.suspect.lasttName} killed Mr. boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`);
}

revealMystery(pickMystery(suspectsArray, roomsArray, weaponsArray))