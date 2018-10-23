class Character {
    constructor(firstName, lastName, color, description, age, image, occupation){
        this._firstName = firstName;
        this._lastName = lastName;
        this._color = color;
        this._description = description;
        this._age = age;
        this._image = image;
        this._occupation = occupation;
    }
    get fullName(){
        return this._firstName + ' ' + this._lastName;
    }
}

class Room {
    constructor(name){
        this._name = name;
    }
}

class Weapon{
    constructor(name){
        this._name = name;
    }
}


//characters
var mrGreen     = new Character('Jacob', 'Green', 'green', 'He has a lot of connections', 45, 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'Entrepreneur');
var drOrchid    = new Character('Doctor', 'Orchid', 'white', 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 26, 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'Scientist');
var profPlum    = new Character('Victor', 'Plum', 'purple', 'Billionare video game designer', 22, 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', 'Designer');
var missScarlet = new Character('Kasandra', 'Scarlet', 'red', 'She is an A-list movie star with a dark past', 31, 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', 'Actor');
var mrsPeacock  = new Character('Eleanor', 'Peacock', 'blue', 'She is from a wealthy family and uses her status and money to earn popularity', 36, 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'Socialité');
var mrMustard   = new Character('Jack', 'Mustard', 'yellow', 'He is a former football player who tries to get by on his former glory',62, 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', 'Retired Football player');

//weapons
var weapon1 = new Weapon('rope');  weapon2 = new Weapon('knife'); weapon3 = new Weapon('candlestick'); weapon4 = new Weapon('dumbbell'); weapon5 = new Weapon('poison'); weapon6 = new Weapon('axe'); weapon7 = new Weapon('bat'); weapon8 = new Weapon('trophy'); weapon9 = new Weapon('pistol');

//rooms
var room1 = new Room('Dinning Room'); room2 = new Room('Conservatory'); room3 = new Room('Kitchen'); room4 = new Room('Study'); room5 = new Room('Library'); room6 = new Room('Billiard Room'); room7 = new Room('Lounge'); room8 = new Room('Ballroom'); room9 = new Room('Hall'); room10 = new Room('Spa'); room11 = new Room('Observatory'); room12 = new Room('Theater'); room13 = new Room('Guest House'); room14 = new Room('Living Room');

//arrays
charactersArray = [mrGreen,drOrchid,profPlum, missScarlet, mrsPeacock, mrMustard];
roomsArray      = [room1,room2,room3,room4,room5,room6,room7,room8,room9,room10,room11,room12,room13,room14];
weaponsArray    = [weapon1,weapon2,weapon3,weapon4,weapon5,weapon6,weapon7,weapon8,weapon9];

function main(callback1){
    var card = {character: charactersArray[Math.floor(Math.random() * charactersArray.length)], room: roomsArray[Math.floor(Math.random() * roomsArray.length)], weapon: weaponsArray[Math.floor(Math.random() * weaponsArray.length)]};
    console.log(callback1(card));
}
main(function(murder){    
    return murder.character._firstName + ' ' + murder.character._lastName + ' killed mr.Boddy using the ' + murder.weapon._name + ' in the ' + murder.room._name;
});















