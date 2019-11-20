// ITERATION 1

// Suspects Collection
var mrGreen=[
 "Jacob",
"Green",
"Entrepreneur",
45,
"He has a lot of connections",
"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg ",
"green "
];
var drOrchid=[
"Doctor",
"Orchid",
"Scientist",
26,
"PhD in plant toxicology. Adopted daughter of Mr. Boddy",
"http://www.radiotimes.com/uploads/images/Original/111967.jpg",
"white",
];
var profPlum=[
"Victor",
"Plum",
"Designer",
22,
"Billionaire video game designer",
"https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg ",
"purple",
];
var missScarlet=[
"Kasandra",
"Scarlet",
"Actor",
31,
"She is an A-list movie star with a dark past",
"https://www.radiotimes.com/uploads/images/Original/111967.jpg",
"red",
];
var mrsPeacock=[
"Eleanor",
"Peacock",
"Socialité",
36,
"She is from a wealthy family and uses her status and money to earn popularity",
"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
"blue",
];
var mrMustard=[
"Jack",
"Mustard",
"Retired Football player",
62,
"He is a former football player who tries to get by on his former glory",
"https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
"yellow"
];
class Suspect{
    constructor(props){
        this.firstName=props[0];
        this.lastName=props[1];
        this.occupation=props[2];
        this.age=props[3];
        this.description=props[4];
        this.image=props[5];
        this.color=props[6];
    }
}
var suspectsArray=[
    new Suspect(mrGreen),
    new Suspect(drOrchid),
    new Suspect(profPlum),
    new Suspect(missScarlet),
    new Suspect(mrsPeacock),
    new Suspect(mrMustard)];
    
class Weapon{
    constructor(name,weight){
        this.name=name;
        this.weight=weight;
    }
}
weaponsArray=[new Weapon("rope",10),
    new Weapon("knife",8),
    new Weapon("candlestick",2),
    new Weapon("dumbbell",30),
    new Weapon("poison",2),
    new Weapon("axe",15),
    new Weapon("bat",13),
    new Weapon("trophy",25),
    new Weapon("pistol",20)];
    
class Room{
    constructor(name){this.name=name;}
}
var roomsArray=[
    new Room("Dining Room"),
    new Room("Conservatory"),
    new Room("Kitchen"),
    new Room("Study"),
    new Room("Library"),
    new Room("Billiard Room"),
    new Room("Lounge"),
    new Room("Ballroom"),
    new Room("Hall"),
    new Room("Spa"),
    new Room("Living Room"),
    new Room("Observatory"),
    new Room("Theater"),
    new Room("Guest House"),
    new Room("Patio")];

// ITERATION 2: create the mystery
function selectRandom(cards){
    // we need an integer in [0,cards.length]
    index=Math.floor(Math.random()*cards.length); // multiply by cards.length and floor
    return cards[index]; // return card at that index
}
function pickMystery(){
    return {suspect:selectRandom(suspectsArray),
                weapon:selectRandom(weaponsArray),room:selectRandom(roomsArray)};
}

// ITERATION 3: reveal the mystery
function revealMystery(solution){
    return `${solution.suspect.firstName} ${solution.suspect.lastName} killed Mr. Boddy using the ${solution.weapon.name} in the ${solution.room.name}!`;
}

console.log("The mystery revealed:",revealMystery(pickMystery()));