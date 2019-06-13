class Character {
    constructor(fname, lname, color, description, age, image, occupation) {
        this.first_name = fname;
        this.last_name = lname;
        this.color = color;
        this.description = description;
        this.age = age;
        this.image = image;
        this.occupation = occupation;
    }
}


const mrGreen = new Character('Jacob', 'Green', 'green', 'He has a lot of connections', 45, 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'Entrepreneur');
const drOrchid = new Character('Doctor', 'Orchid', 'white', 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 26, 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'Scientist');
const profPlum = new Character('Victor', 'Plum', 'purple', 'Billionare video game designer', 22, 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', 'Designer');
const missScarlet = new Character('Kasandra', 'Scarlet', 'red', 'She is an A-list movie star with a dark past', 31, 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', 'Actor');
const mrsPeacock = new Character('Eleanor', 'Peacock', 'blue', 'She is from a wealthy family and uses her status and money to earn popularity', 36, 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'Socialité');
const mrMustard = new Character('Jack', 'Mustard', 'yellow', 'He is a former football player who tries to get by on his former glory', 62, 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', 'Retired Football player');


class Weapon {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

}

const rope = new Weapon('rope', 10);
const knife = new Weapon('knife', 8);
const candlestick = new Weapon('candlestick', 2);
const dumbbell = new Weapon('dumbbell', 30);
const poison = new Weapon('poison', 2);
const axe = new Weapon('axe', 15);
const bat = new Weapon('bat', 13);
const trophy = new Weapon('trophy', 25);
const pistol = new Weapon('pistol', 20);

class Room {
    constructor(name) {
        this.name = name;
    }

}

const dinningRoom = new Room('Dinning Room');
const conservatory = new Room('Conservatory');
const kitchen = new Room('Kitchen');
const study = new Room('Study');
const library = new Room('Library');
const billiardRoom = new Room('Billiard Room');
const lounge = new Room('Lounge');
const ballroom = new Room('Ballroom');
const hall = new Room('Hall');
const spa = new Room('Spa');
const livingRoom = new Room('Living Room');
const observatory = new Room('Observatory');
const theater = new Room('Theater');
const guestHouse = new Room('Guest House');
const patio = new Room('Patio');




// Characters Collection
let charactersArray = [];

// Rooms' Collection
let roomsArray = [];

// Weapons Collection
let weaponsArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);
roomsArray.push(dinningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);



const randomSelector = (arr) => {
    let random = arr[Math.floor(Math.random() * arr.length)]
    return random;
}

const pickMistery = () => {
    let mysteryEnvelope = [];
    mysteryEnvelope.push(randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray))
    return mysteryEnvelope;
}


const revealMistery = (arr) => {
    return `${arr[0].first_name} ${arr[0].last_name} killed Mr.Boddy using the ${arr[1].name} in the ${arr[2].name}!!!!`;
}

console.log(revealMistery(pickMistery()))