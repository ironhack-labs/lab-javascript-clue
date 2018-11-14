// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters Collection
var charactersArray = [];
addCharactersArray = (fn, ln, color, description, age, image, occupation) => {
    const character =  {first_name: fn, last_name:ln, color: color, description: description,
    age: age, image: image,
     occupation:occupation}
     charactersArray.push(character);
}
//add mrGreen
addCharactersArray('Jacob','Green','green', 'He has a lot of connections', 45, 
'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'Scientit' );

//add drOrchid
addCharactersArray('Doctor','Orchid','white','PhD in plant toxicology. Adopted daughter of Mr. Boddy',
26,'http://www.radiotimes.com/uploads/images/Original/111967.jpg','Scientist');

//add profPlum
addCharactersArray('Victor', 'Plum', 'purple', 'Billionare video game designer', 22,
'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', 'Designer');

//add missScarlet
addCharactersArray('Kassandra', 'Scarlet', 'red', 'She is an A-list movie star with a dark past',
31, 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', 'Actor');

//add mrsPeacock
addCharactersArray('Eleanor', 'Peacock', 'blue', 'She is from a wealthy family and uses her status and money to earn popularity',
36, 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg','Socialité');

//add mrMustard
addCharactersArray('Jack', 'Mustard', 'yellow', 'He is a former football player who tries to get by on his former glory',
62, 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg','Retired Football player')

// console.log(charactersArray);
// Rooms' Collection
var roomsArray = [];
addRooms = (name) => {
    const room = {name:name};
    roomsArray.push(room);
}
addRooms('Dinning Room');
addRooms('Conservatory');
addRooms('Kitchen');
addRooms('Study');
addRooms('Library');
addRooms('Billiard Room');
addRooms('Lounge');
addRooms('Ballroom');
addRooms('Hall');
addRooms('Spa');
addRooms('Living Room');
addRooms('Observatory');
addRooms('Theater');
addRooms('Guest House');
addRooms('Patio');
// console.log(roomsArray);

// Weapons Collection
var weaponsArray = [];
addWeapons = (name, weight) =>{
const weapon = {name:name, weight:weight}
weaponsArray.push(weapon);
}

addWeapons('rope', 10);
addWeapons('knife',8);
addWeapons('candlestick', 2);
addWeapons('dumbbell', 30);
addWeapons('poison', 2);
addWeapons('axe', 15);
addWeapons('bat', 13);
addWeapons('thophy', 25);
addWeapons('pistol', 20);
// console.log(weaponsArray);

randomSelector = (cardStack) => {
    let randomNumber = Math.random()*cardStack.length;
    const card = cardStack[Math.floor(randomNumber)] ; 
    // console.log(card);
    return card;
}

pickMistery = () => {
    const misteryEnvelope = [];
    if(charactersArray.length != 0 || weaponsArray.length !=0 || roomsArray.length !=0){
    const characterCard = randomSelector(charactersArray);
    const weaponCard = randomSelector(weaponsArray);
    const roomCard = randomSelector(roomsArray);
    misteryEnvelope.push(characterCard, weaponCard, roomCard);
    return misteryEnvelope ;
}

}
revealMistery = (envelope) => {
    const firstName = envelope[0].first_name;
    const lastName = envelope[0].last_name;
    const weapon = envelope[1].name;
    const room = envelope[2].name;
    return `${firstName} ${lastName} killed Mr.Boddy using the ${weapon} in the ${room}!!!!`
}
const misteryEnvelope = pickMistery();

console.log(revealMistery(misteryEnvelope));

