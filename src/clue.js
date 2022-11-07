// ITERATION 1

// Suspects Array

const suspectsArray = [
{

    firstName: "Ivan",
    lastName: "Lara",
    occupation: "alpinista",
    age: 33,
    description: "strongest man",
    image: "jpeg",
    color: "black",
}, {

    firstName: "Ivan",
    lastName: "Lara",
    occupation: "alpinista",
    age: 33,
    description: "strongest man",
    image: "jpeg",
    color: "black",

}, {

    firstName: "Ivan",
    lastName: "Lara",
    occupation: "alpinista",
    age: 33,
    description: "strongest man",
    image: "jpeg",
    color: "black",
    
}, {

    firstName: "Ivan",
    lastName: "Lara",
    occupation: "alpinista",
    age: 33,
    description: "strongest man",
    image: "jpeg",
    color: "black",

}, {

    firstName: "Ivan",
    lastName: "Lara",
    occupation: "alpinista",
    age: 33,
    description: "strongest man",
    image: "jpeg",
    color: "black",

}, {

    firstName: "Ivan",
    lastName: "Lara",
    occupation: "alpinista",
    age: 33,
    description: "strongest man",
    image: "jpeg",
    color: "black",
}

];


// Rooms Array

const roomsArray = [

{

    name: "living room"

}, {

    name: "living room"

}, {

    name: "living room"

}, {
    
    name: "living room"

}, {

    name: "living room"

}, {

    name: "living room"

}, {

    name: "living room"

}, {

    name: "living room"

}, {

    name: "living room"

}, {

    name: "living room"

}, {

    name: "living room"

}, {

    name: "living room"

}, {

    name: "living room"

}, {

    name: "living room"

}, {

    name: "living room"

}

];


// Weapons Array

const weaponsArray = [

{

    name: "gun",
    weight: 0.700 
}, {


    name: "gun",
    weight: 0.700 

}, {

    name: "gun",
    weight: 0.700 

}, {

    name: "gun",
    weight: 0.700 


}, {

  
    name: "gun",
    weight: 0.700 


}, {

    name: "gun",
    weight: 0.700 

}, {


    name: "gun",
    weight: 0.700 

}, {

    name: "gun",
    weight: 0.700 


}, {

    name: "gun",
    weight: 0.700 



}


];


// ITERATION 2

function selectRandom(arr) {
    const item = arr[Math.floor(Math.random() * arr.length)];

    return item;    
}


function pickMystery() {
    const obj = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
    return obj;
}






// ITERATION 3

function revealMystery(mistery) { 
   const str = `${mistery.suspect.firstName} ${mistery.suspect.lastName } killed Mr. Boddy using the ${mistery.weapon.name} in the ${mistery.room.name}!`
   return str
}
    


