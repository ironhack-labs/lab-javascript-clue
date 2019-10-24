// Characters
let mrGreen = {
    
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
};
let  drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:   "Scientist"

};
let profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionaire video game designer",
    age:          22,
    image:        "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    occupation:   "Designer"
};

let missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:   "Actor"

};

let mrsPeacock= {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
}


let mrMustard ={
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    occupation:   "Retired Football player"
};

let rope = {
    name: "rope",
    weight: 10

};

// Weapons

let knife = {
    name: "knife",
    weight: 8
};

let candlestick = {
    name: "candlestick",
    weight: 2
};

let dumbbel=  {
    name: "dumbbell",
    eight: 30
};

let poison= {
    name: "poison",
    weight: 2
};

let axe= {
    name: "axe",
    eight: 15
};

let bat = {
    name: "bat",
    eight: 13
};

let trophy = {
    name: "trophy",
    eight: 25
};

let pistol = {
    name: "pistol",
    eight: 20
};

// Rooms

let dinningRoom = {
    name: "Dining Room"
};
let conservatory = {
    name: "Conservatory"
};
let kitchen = {
    name: "Kitchen"
};
let study = {
    name: "Study"
};
let library = {
    name: "Library"
};
let billiardRoom = {
    name: "Billiard Room"
};
let lounge = {
    name: "Lounge"
};
let ballroom = {
    name: "Ballroom"
};
let hall = {
    name: "Hall"
};
let spa = {
    name: "Spa"
};
let livingRoom = {
    name: "Living Room"
};
let observatory = {
    name: "Observatory"
};
let theater = {
    name: "Theater"
};
let guestHouse = {
    name: "Guest House"
};
let patio = {
    name: "Patio"
};



// Characters Collection
const charactersArray = [];

charactersArray.push(mrGreen);
charactersArray.push(drOrchid);
charactersArray.push(profPlum);
charactersArray.push(missScarlet);
charactersArray.push(mrsPeacock);
charactersArray.push(mrMustard);
// Rooms Collection
const roomsArray = [];

roomsArray.push(rope);
roomsArray.push(knife);
roomsArray.push(candlestick);
roomsArray.push(dumbbel);
roomsArray.push(poison);
roomsArray.push(axe);
roomsArray.push(bat);
roomsArray.push(trophy);
roomsArray.push(pistol);

// Weapons Collection
const weaponsArray = [];

weaponsArray.push(dinningRoom);
weaponsArray.push(conservatory);
weaponsArray.push(kitchen);
weaponsArray.push(study);
weaponsArray.push(library);
weaponsArray.push(billiardRoom);
weaponsArray.push(lounge);
weaponsArray.push(hall);
weaponsArray.push(spa);
weaponsArray.push(livingRoom);
weaponsArray.push(observatory);
weaponsArray.push(theater);
weaponsArray.push(guestHouse);
weaponsArray.push(patio);

let randomSelector = function (array){
    let random =  Math.floor((Math.random() * array.length));
    let object= "";
    array.forEach(function (element, index){
        if(index===random){
            object=element;
        }
    });
    return object;
};

let pickMystery = function (randomSelector){
    let mysteryEnvelope={
        suspect: "",
        room: "",
        weapon: ""
    };
    let suspect = randomSelector(charactersArray);

    let room = randomSelector(roomsArray);
    let weapon = randomSelector(weaponsArray);
    mysteryEnvelope.suspect =suspect;
    mysteryEnvelope.room =room;
    mysteryEnvelope.weapon = weapon;
    console.log(mysteryEnvelope);
    return mysteryEnvelope;
};

let revealMystery = function(misteryObject){

    return console.log(`${misteryObject.suspect. first_name} ${misteryObject.suspect.last_name} killed Mr.Boddy ussing the ${misteryObject.weapon.name} in the ${misteryObject.room.name}`);
};

pickMystery(randomSelector);