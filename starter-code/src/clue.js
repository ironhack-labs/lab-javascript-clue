// Characters

var mrGreen = {first_name: 'Jacob', last_name: 'Green', color: 'green', description: 'He has a lot of connections', age: 45, image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', occupation: 'Entrepreneur'};
var drOrchid = {first_name: 'Doctor', last_name: 'Orchid', color: 'white', description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy', age: 26, image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', ocupation: 'Scientist'};
var profPlum = {first_name: 'Victor', last_name: 'Plum', color: 'purple', description: 'Billionare video game designer', age: 22, image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', occupation: 'Designer'};
var missScarlet = {first_name: 'Kasandra', llast_name: 'Scarlet', color: 'red', description: 'She is an A-list movie star with a dark past', age: 31, image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', occupation: 'Actor'};
var mrsPeacock = {first_name: 'Eleanor', last_name: 'Peacock', color: 'blue', description: 'She is from a wealthy family and uses her status and money to earn popularity', age: 36, image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', occupation: 'Socialité'};
var mrMustard = {first_name: 'Jack', last_name: 'Mustard', color: 'yellow', description: 'He is a former football player who tries to get by on his former glory', age: 62, image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', occupation: 'Retired Football player'};

// Weapons

var rope = {name: 'rope', weight: 10};
var knife = {name: 'knife', weight: 8};
var candlestick = {name: 'candlestick', weight: 2};
var dumbbell = {name: 'dumbbell', weight: 30};
var poison = {name: 'poison', weight: 2};
var axe = {name: 'axe', weight: 15};
var bat = {name: 'bat', weight: 13};
var trophy = {name: 'trophy', weight: 25};
var pistol = {name: 'pistol', weight: 20};

// Rooms
var diningRoom = {name: 'Dining Room'};
var conservatory = {name: 'Conservatory'};
var kitchen = {name: 'Kitchen'};
var study = {name: 'Study'};
var library = {name: 'Library'};
var billiardRoom = {name: 'Billiard Room'};
var lounge = {name: 'Lounge'};
var ballroom = {name: 'Ballroom'};
var hall = {name: 'Hall'};
var spa = {name: 'Spa'};
var livingRoom = {name: 'Living Room'};
var observatory = {name: 'Observatory'};
var theater = {name: 'Theater'};
var guestHouse = {name: 'Guest House'};
var patio = {name: 'Patio'};


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

roomsArray.push(rope);
roomsArray.push(knife);
roomsArray.push(candlestick);
roomsArray.push(dumbbell);
roomsArray.push(poison);
roomsArray.push(axe);
roomsArray.push(trophy);
roomsArray.push(pistol);


// Weapons Collection
var weaponsArray = [];

weaponsArray.push(diningRoom);
weaponsArray.push(conservatory);
weaponsArray.push(kitchen);
weaponsArray.push(study);
weaponsArray.push(library);
weaponsArray.push(lounge);
weaponsArray.push(ballroom);
weaponsArray.push(hall);
weaponsArray.push(spa);
weaponsArray.push(livingRoom);
weaponsArray.push(observatory);
weaponsArray.push(theater);
weaponsArray.push(guestHouse);
weaponsArray.push(patio);

//Function randomSelector

function randomSelector(array){
    if (array.length === 0) {
      return undefined;
    } let rand = array[Math.floor(Math.random()*array.length)];
      return rand;
}

//Function pickMistery

function pickMistery(){
    
    var misteryEnvelope = [];

    let character = randomSelector(charactersArray);
    let weapon = randomSelector(weaponsArray);
    let room = randomSelector(roomsArray);

    misteryEnvelope.push(character);
    misteryEnvelope.push(weapon);
    misteryEnvelope.push(room);

    return misteryEnvelope;

}

//Function revealMistery

function revealMistery(misteryEnvelope) {

    var revealedName = '';

    var revealedName = (misteryEnvelope[0].first_name + ' ' + misteryEnvelope[0].last_name + ' killed Mr.Boddy using the ' + misteryEnvelope[1].name + ' in the ' + misteryEnvelope[2].name + "!!!!"); 

    return revealedName;
}

revealMistery(pickMistery());
