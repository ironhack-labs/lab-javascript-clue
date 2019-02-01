// Characters Collection

function Characters(first, last, color, description, age, image, occupation) {
    this.first_name = first;
    this.last_name = last;
    this.color = color;
    this.description = description;
    this.age = age;
    this.image = image;
    this.occupation = occupation;
}

var mrGreen = new Characters (
    'Jacob',
    'Green',
    'green',
    'He has a lot of connections',
    '45',
    'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    'Entrepreneur'
)

var drOrchid = new Characters (
    'Doctor',
    'Orchid',
    'white',
    'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    '26',
    'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    'Scientist'
)

var profPlum = new Characters (
    'Victor',
    'Plum',
    'purple',
    'Billionare video game designer',
    '22',    
    'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    'Designer'
)

var missScarlet = new Characters (
    'Kasandra',
    'Scarlet',
    'red',
    'She is an A-list movie star with a dark past',
    '31',
    'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    'Actor'
)

var mrsPeacock = new Characters (
    'Eleanor',
    'Peacock',
    'blue',
    'She is from a wealthy family and uses her status and money to earn popularity',
    '36',
    'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    'Socialité'
)

var mrMustard = new Characters (
    'Jack',
    'Mustard',
    'yellow',
    'He is a former football player who tries to get by on his former glory',
    '62',
    'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    'Retired Football player'
)

// Weapons Collection

function Weapon(name, weight) {
    this.name = name;
    this.weight = weight;
}

var rope = new Weapon ('rope', 10)
var knife = new Weapon ('knife', 8)
var candlestick = new Weapon ('candlestick', 2)
var dumbbell = new Weapon ('dumbbell', 30)
var poison = new Weapon ('poison', 2)
var bat = new Weapon ('bat', 13)
var axe = new Weapon ('axe', 15)
var pistol = new Weapon ('pistol', 20)
var trophy = new Weapon ('trophy', 25)

// Rooms Collection

function Room(name) {
    this.name = name;
}

var diningRoom = new Room ('Dinning Room');
var conservatory = new Room ('Conservatory');
var kitchen = new Room ('Kitchen');
var study = new Room ('Study');
var library = new Room ('Library');
var billiardRoom = new Room ('Billiard Room');
var lounge = new Room ('Lounge');
var ballroom = new Room ('Ballroom');
var hall = new Room ('Hall');
var spa = new Room ('Spa');
var livingRoom = new Room ('Living Room');
var observatory = new Room ('Observatory');
var theater = new Room ('Theater');
var guestHouse = new Room ('Guest House');
var patio = new Room ('Patio');

// Arrays
let charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
let weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];
let roomsArray = [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];
let allArr = [charactersArray, weaponsArray, roomsArray]; 

// Badass constructor
function Game(allArr) {
    this.allArr = allArr,
    this.secretEnvelope = [],
    this.randomSelector = function(arr) {
        var randomNum = Math.floor(Math.random() * arr.length);
        return randomNum;
    }
    this.pickMystery = function(arr) {
        this.secretEnvelope = [];
        for(let i = 0; i < arr.length; i++) {
            this.secretEnvelope.push(arr[i][this.randomSelector(arr[i])]);
        }
    }
    this.revealMistery = function() {
        return `${this.secretEnvelope[0].first_name} ${this.secretEnvelope[0].last_name} killed Mr. Boddy using the ${this.secretEnvelope[1].name} in the ${this.secretEnvelope[2].name}.`;
    }
    this.init = function() {
        console.log(this.pickMystery(allArr));
    }
}

let game = new Game(allArr);

// DOM manipulation
document.getElementById("button").addEventListener("click", function(){
    game.init();
    let imgPath = game.secretEnvelope[0].image;
    document.getElementById("img").setAttribute("src", imgPath);
    document.getElementById("sentence").innerHTML = game.revealMistery();

})