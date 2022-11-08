// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: "Cristi",
        lastName: "Vegas",
        occupation: "Web Developer",
        age: 30,
        description: "he likes to read",
        image: "file:///C:/Users/mireya/Desktop/IRON2023/EJERCICIOS/imagenes/terrier.jpg",
        color: "orange"
    },
    
    {
        firstName: "Alex",
        lastName: "Mendez",
        occupation: "Data developer",
        age: 29,
        description: "He like walking",
        image: "file:///C:/Users/mireya/Desktop/IRON2023/EJERCICIOS/imagenes/galgos.jpg",
        color: "blue"
    },
    {
    
        firstName: "Maria",
        lastName: "Saenz",
        occupation: "commercial",
        age: 45,
        description: "he is extroverted",
        image: "file:///C:/Users/mireya/Desktop/IRON2023/EJERCICIOS/imagenes/periodismo.jpg",
        color: "white"
    },
    {
   
        firstName: "Rosa",
        lastName: "Blanco",
        occupation: "commercial",
        age: 38,
        description: "she does sports",
        image: "file:///C:/Users/mireya/Desktop/IRON2023/EJERCICIOS/imagenes/deporte.jpg",
        color: "black"
    },
    {
   
        firstName: "Stefy",
        lastName: "Molina",
        occupation: "talent developer",
        age: 35,
        description: "collect stones",
        image: "file:///C:/Users/mireya/Desktop/IRON2023/EJERCICIOS/imagenes/piedra-amatista.jpg",
        color: "green"
    },
    {
   
        firstName: "Pablo",
        lastName: "Rueda",
        occupation: "Mechanic",
        age: 28,
        description: "he is healthy",
        image: "file:///C:/Users/mireya/Desktop/IRON2023/EJERCICIOS/imagenes/saludable.jpeg",
        color: "yelow"
    }
     
];


// Rooms Array

const weaponsArray = [
    {
        name: "rope", 
        weight: 15
    },
    {
        name: "knife", weight: 5
    },
    {
        name: "sword", weight: 8
    },
    {
        name: "rifle", weight: 7
    },
    {
        name: "bomb", weight: 3
    },
    {
        name: "dart", weight: 1
    },
    {
        name: "cannon", weight: 50
    },
    {
        name: "grenade", weight: 3
    },
    {
        name: "missile", weight:100
    }
];

// Weapons Array

const roomsArray = [
    {
        name: "bridge"
    },
    {
        name: "garden"
    },
    {
        name: "house"
    },
    {
        name: "bank"
    },
    {
        name: "spa"
    },
    {
        name: "train"
    },
    {
        name: "school"
    },
    {
        name: " hospital"
    },
    {
        name: "patio"
    },
    {
        name: "airport"
    },
    {
        name: "shop"
    },
    {
        name: "library"
    },
    {
        name: "university"
    },
    {
        name: "science room"
    },
    {
        name: "music room"
    }
];


// ITERATION 2

function selectRandom(suspectsArray) {
if(suspectsArray.length ===0){
    return undefined;
}
 const random = suspectsArray[Math.floor(Math.random() *  suspectsArray.length)]
 return random;



}

selectRandom(); 

function pickMystery() {

    
    let suspect = selectRandom(suspectsArray);
    let weapon = selectRandom(weaponsArray);
    let room = selectRandom(roomsArray);

    const randomObject = {
        suspect,
        weapon,
        room,
    }
        return randomObject; 
  
    

}


// ITERATION 3

function revealMystery(randomObject) {
let a = " ";
 for (let i= 0; i < randomObject.length; i++){
if (a = `${suspect.name} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room}`){

}
 }return a;
}

