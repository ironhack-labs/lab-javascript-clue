function Characters(firstname, lastname, color, description, age, image, occupation){
    this.first_name = firstname;
    this.last_name = lastname;
    this.color = color;
    this.description = description;
    this.age = age;
    this.image = image;
    this.occupation = occupation;
}

function Weapons(name, weight){
    this.name = name;
    this.weight = weight;
}

function Rooms(name){
    this.name = name;
}

var charactersArray = [];

charactersArray.push(new Characters("Jacob", "Green", "green", "He has a lot of connections", "45", "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur"))

charactersArray.push(new Characters ("Doctor", "Orchid", "white", "PhD in plan toxicology. Adopter daughter of Mr. Boddy", "26"))

charactersArray.push(new Characters ("Victor", "Plum", "purple", "Billionare video game designer", "22", "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", "Designer"))

charactersArray.push(new Characters ("Kasandra", "Scarlet","red", "She is an A-list movie star with a dark past", "31", " https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", "Actor"))

charactersArray.push(new Characters ("Eleanor", "Peacock", "blue", "She is from a wealthy family and uses her status and money to earn popularity", "36", "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg","Socialité"))

charactersArray.push(new Characters ("Jack", "Mustard", "yellow", "He is a former football player who tries to get by on his former glory", "62", " https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", "Retired Football player"))

var roomsArray = [];

roomsArray.push(new Rooms ("Dinning room"))
roomsArray.push(new Rooms ("Conservatory"))
roomsArray.push(new Rooms ("Kitchen"))
roomsArray.push(new Rooms ("Study"))
roomsArray.push(new Rooms ("Library"))
roomsArray.push(new Rooms ("Billiard Room"))
roomsArray.push(new Rooms ("Lounge"))
roomsArray.push(new Rooms ("Ballroom"))
roomsArray.push(new Rooms ("Hall"))
roomsArray.push(new Rooms ("Spa"))
roomsArray.push(new Rooms ("Living Room"))
roomsArray.push(new Rooms ("Observatory"))
roomsArray.push(new Rooms ("Theater"))
roomsArray.push(new Rooms ("Guest House"))
roomsArray.push(new Rooms ("Patio"))

var weaponsArray = [];

weaponsArray.push(new Weapons("rope", "10"))
weaponsArray.push(new Weapons("knife", "8"))
weaponsArray.push(new Weapons("candlestick", "2"))
weaponsArray.push(new Weapons("dumbbell", "30"))
weaponsArray.push(new Weapons("poison", "2"))
weaponsArray.push(new Weapons("axe", "15"))
weaponsArray.push(new Weapons("bat", "13"))
weaponsArray.push(new Weapons("trophy", "25"))
weaponsArray.push(new Weapons("pistol", "20"))


// OPTION 1
function randomSelector(anArray){
    return anArray[Math.floor(Math.random()*anArray.length)];
}

function pickMistery(charactersArray, weaponsArray, roomsArray, randomSelector){
    return {
        character: randomSelector(charactersArray),
        weapon : randomSelector(weaponsArray),
        room : randomSelector(roomsArray),
    };
}

var misteryEnvelope = pickMistery(charactersArray, weaponsArray, roomsArray, randomSelector);

function revealMistery(misteryEnvelope){
    console.log(`${misteryEnvelope.character.first_name} ${misteryEnvelope.character.last_name} killed Mr.Boddy using the ${misteryEnvelope.weapon.name} in the ${misteryEnvelope.room.name}!!!!`)
}

revealMistery(misteryEnvelope);

// // OPTION 2

function Game(func1, func2, func3){
    this.randomSelector = func1;
    this.pickMistery = func2;
    this.misteryEnvelope = this.pickMistery(charactersArray, weaponsArray, roomsArray, this.randomSelector);
    this.revealMistery = func3
}

var game = new Game(randomSelector, pickMistery, revealMistery);
game[revealMistery(game.misteryEnvelope)];

