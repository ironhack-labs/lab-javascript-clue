// ITERATION 1

// Suspects Array

function createSuspectsArray(firstName, lastName, occupation, age, description, image, color)
{
    return {
        firstName: firstName,
        lastName: lastName,
        occupation: occupation,
        age: age,
        description: description,
        image: image,
        color: color
    };
}

function createWeaponsArray(name, weight)
{
    return{
        name: name,
        weight: weight
    }
}

function createroomsArray(...room)
{
    for(let i of room)
    {
        roomsArray.push({name: i});
    }
}

const suspectsArray = 
[
    createSuspectsArray("Jacob", "Green", "Entrepreneur", 45, "He has a lot of connections", "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "green"),
    createSuspectsArray("Doctor", "Orchid", "Scientist", 26, "PhD in plant toxicology. Adopted daughter of Mr. Boddy", "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "white"),
    createSuspectsArray("Victor", "Plum", "Designer", 22, "Billionaire video game designer", "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", "purple"),
    createSuspectsArray("Kasandra", "Scarlet", "Actor", 31, "She is an A-list movie star with a dark past", "https://www.radiotimes.com/uploads/images/Original/111967.jpg", "red"),
    createSuspectsArray("Eleanor", "Peacock", "Socialité", 36, "She is from a wealthy family and uses her status and money to earn popularity", "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "blue"),
    createSuspectsArray("Jack", "Mustard", "Retired Football player", 62, "He is a former football player who tries to get by on his former glory", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", "yellow")
];


// Rooms Array

const roomsArray = [];

createroomsArray("Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio")


// Weapons Array

const weaponsArray = 
[
    createWeaponsArray("rope", 10),
    createWeaponsArray("knife", 8),
    createWeaponsArray("candlestick", 2),
    createWeaponsArray("dumbbell", 30),
    createWeaponsArray("poison", 2),
    createWeaponsArray("axe", 15),
    createWeaponsArray("bat", 13),
    createWeaponsArray("trophy", 25),
    createWeaponsArray("pistol", 20)
];


// ITERATION 2

function selectRandom(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

function pickMystery()
{
    return {suspect: selectRandom(suspectsArray), weapon: selectRandom(weaponsArray), room: selectRandom(roomsArray)};
}


// ITERATION 3

let envelope = pickMystery();

function revealMystery(envelope)
{
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}