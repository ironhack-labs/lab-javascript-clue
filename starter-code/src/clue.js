// Characters
function Character(firstName, lastName, color, description, age, image, occupation){
    this.first_name= firstName;
    this.last_name = lastName;
    this.color=color;
    this.description = description;
    this.age = age;
    this.image=image;
    this.occupation = occupation;

}
var mrGreen = new Character("Jacob", "Green", "green", "He has a lot of connections", 45, "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur");
var drOrchid = new Character("Doctor", "Orchid", "white", "PhD in plant toxicology. Adopted daughter of Mr. Boddy", 26, "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "Scientist");
var profPlum = new Character("Victor", "Plum", "purple", "Billionaire video game designer", 22, "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg","Designer");
var missScarlet = new Character ("Kasandra", "Scarlet", "red", "She is an A-list movie star with a dark past", 31, "https://www.radiotimes.com/uploads/images/Original/111967.jpg", "Actor");
var mrsPeacock = new Character ("Eleanor", "Peacock", "blue", "She is from a wealthy family and uses her status and money to earn popularity", 36, "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "Socialité");
var mrMustard = new Character ("Jack", "Mustard", "yellow", "He is a former football player who tries to get by on his former glory", 62, "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", "Retired Football player");


// Weapons
function Weapons(name, weight){
    this.name = name;
    this.weight = weight;
}

var rope = new Weapons ("rope" , 10);
var knife = new Weapons ("knife" , 8);
var candlestick = new Weapons ("candlestick" , 2);
var dumbbell = new Weapons ("dumbbell" , 30);
var poison = new Weapons ("poison" , 2);
var axe = new Weapons ("axe" , 15);
var bat = new Weapons ("bat" , 13);
var trophy = new Weapons ("trophy" , 25);
var pistol = new Weapons ("pistol" , 20);

// Rooms
function Rooms(name){
    this.name = name;
}

var diningRoom = new Rooms("Dining Room");
var conservatory = new Rooms ("Conservatory");
var kitchen = new Rooms ("Kitchen");
var study = new Rooms("Study");
var library = new Rooms("Library");
var billiardRoom = new Rooms ("Billiard Room");
var lounge = new Rooms("Lounge");
var ballroom = new Rooms("Ballroom");
var hall = new Rooms("Hall");
var spa = new Rooms ("Spa");
var livingRoom = new Rooms ("Living Room");
var observatory = new Rooms ("Observatory");
var theater = new Rooms ("Theater");
var guestHouse = new Rooms ("Guest House");
var patio = new Rooms ("Patio");

// Characters Collection
const charactersArray = [mrGreen,drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Weapons Collection
const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

// Rooms Collection
const roomsArray = [diningRoom ,conservatory, kitchen, study, library, billiardRoom, lounge, ballroom,
     hall, spa, livingRoom, observatory, theater, guestHouse, patio];

function randomSelector (arr){
    return arr.length ===0 ? undefined: arr[Math.floor(Math.random()*arr.length)];
}


function pickMystery(){
    var misteryEnvelope = {
        suspect: randomSelector(charactersArray),
        weapon: randomSelector(weaponsArray),
        room: randomSelector(roomsArray)
    }
    return misteryEnvelope;
}

function revealMystery(misteryEnvelope){
    return `${misteryEnvelope.suspect.first_name} ${misteryEnvelope.suspect.last_name} killed Mr. Boddy using the ${misteryEnvelope.weapon.name} in the ${misteryEnvelope.room.name}!!!!`;
}
