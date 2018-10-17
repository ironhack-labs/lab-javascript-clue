// Characters
var charactersArray = [];

var mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur",
};
charactersArray.push(mrGreen);

var drOrchid = {
    frst_name: "Doctor",
    lst_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation: "Scientist",
};
charactersArray.push(drOrchid);

var profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer",
};
charactersArray.push(profPlum);

var missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor",
};
charactersArray.push(missScarlet);

var mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité",
};
charactersArray.push(mrsPeacock);

var mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player",
};
charactersArray.push(mrMustard);

// Weapons
var weaponsArray = [];

weaponsArray.push({
    name: "rope"        ,
    weight: 10
});

weaponsArray.push({
    name: "knife"       ,
    weight: 8
});

weaponsArray.push({
    name: "candlestick" ,
    weight: 2
});

weaponsArray.push({
    name: "dumbbell"    ,
    weight: 30
});

weaponsArray.push({
    name: "poison"      ,
    weight: 2
});

weaponsArray.push({
    name: "axe"         ,
    weight: 15
});

weaponsArray.push({
    name: "bat"         ,
    weight: 13
});

weaponsArray.push({
    name: "trophy"      ,
    weight: 25
});

weaponsArray.push({
    name: "pistol"      ,
    weight: 20
});


// Rooms
var roomsArray = [];

roomsArray.push({name: "Dinning Room"});
roomsArray.push({name: "Conservatory"});
roomsArray.push({name: "Kitchen"});
roomsArray.push({name: "Study"});
roomsArray.push({name: "Library"});
roomsArray.push({name: "Billiard Room"});
roomsArray.push({name: "Lounge"});
roomsArray.push({name: "Ballroom"});
roomsArray.push({name: "Hall"});
roomsArray.push({name: "Spa"});
roomsArray.push({name: "Living Room"});
roomsArray.push({name: "Observatory"});
roomsArray.push({name: "Theater"});
roomsArray.push({name: "Guest House"});
roomsArray.push({name: "Patio"});


// functions

/**
 * Randomly select one element from a card stack.
 * The method should receive an array as an argument, and return randomly one of the elements of the array.
 * @param arrayToSelectFrom
 */
function randomSelector(arrayToSelectFrom){
    return arrayToSelectFrom[Math.floor(Math.random() * arrayToSelectFrom.length)]
}

/**
 * call randomSelector for each card stack, and return an array with the 3 picked cards,
 * a character, a weapon and a room.
 */
function pickMistery(){
    var character = randomSelector(charactersArray);
    var weapon    = randomSelector(weaponsArray);
    var room      = randomSelector(roomsArray);
    return [character, weapon, room];
}
var misteryEnvelope = pickMistery();


/**
 * eceive our misteryEnvelope array as an argument and return the revealed mystery like this:

<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!
 * @param misteryEnvelope: array [character, weapon, room]
 */
function revealMistery(misteryEnvelope){

    var character = misteryEnvelope[0];
    var weapon    = misteryEnvelope[1];
    var room      = misteryEnvelope[2];

    var out = [
        character.first_name,
        character.last_name,
        "killed Mr.Boddy using the",
        weapon.name,
        "in the",
        room.name + "!!!!"
    ].join(" ");

    return out

}