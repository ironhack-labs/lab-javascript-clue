// ITERATION 1

// Suspects Collection
const suspectsArray = [{
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",}, {

        //otro suspitos
    }



];

// Rooms Collection
const roomsArray = [{
    name: "Dining Room",}, {

        //room2

    }];

// Weapons Collection
const weaponsArray = [{
    name: "rope", 
     weight: 10},{

        //weapon2
     }

];

// ITERATION 2

function selectRandom (array){
return array[Math.floor(Math.random() * array.length)];
//array.length xk quiero que el random esté entre la longitud del array
//math.random coge un num de 0 a 1 aleatoriamente
//* array.length: lo multiplica por la long de la array
//math.floor lo redondea hacia abajo/ math.average lo redondea normal/ math.ceiling
};

function pickMystery (){
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray),
    }
}


// ITERATION 3

function revealMystery (envelope){
    return envelope.suspect.firstName + " " +  envelope.suspect.lastName + " " + "killed Mr. Boddy using the" + " " + envelope.weapon.name + " " + "in the" + " " + envelope.room.name + "!"

}