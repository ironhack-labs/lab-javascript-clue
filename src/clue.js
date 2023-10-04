// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Carlos",
    lastName: "García",
    occupation: "programador",
    age: 35, 
    description: "Informático de la casa.",  
    image: "https://previews.123rf.com/images/yannp/yannp1411/yannp141100057/34098863-cuarenta-a%C3%B1os-el-hombre-negro-que-r%C3%ADe-calva.jpg",
    color: "Negro"
  },
  {
    firstName: "Juan",
    lastName: "López",
    occupation: "Jardinero",
    age: 45, 
    description: "Cuida las plantas.",  
    image: "https://c8.alamy.com/compes/2pghpr9/un-hombre-feliz-y-positivo-jardinero-de-40-45-anos-con-un-gato-juega-durante-un-descanso-durante-la-cosecha-de-verduras-2pghpr9.jpg",
    color: "Blanco" , 
  },
  {
    firstName: "Juana",
    lastName: "García",
    occupation: "Cocinera",
    age: 53, 
    description: "Prepara la comida.",  
    image: "https://c8.alamy.com/compes/2cc55e1/estudio-retrato-de-una-atractiva-mujer-rubia-de-mediana-edad-sonriendo-sobre-un-fondo-blanco-2cc55e1.jpg",
    color: "Blanca",  
  },
   {
    firstName: "Pepe",
    lastName: "Moreno",
    occupation: "Limpia cristales",
    age: 22, 
    description: "Limpia los cristales de la casa.",  
    image: "https://www.shutterstock.com/shutterstock/photos/1991316314/display_1500/stock-photo-portrait-of-happy-bearded-albino-man-with-pale-skin-and-white-hair-wearing-t-shirt-posing-and-1991316314.jpg",
    color: "Negro",
  },
  {
    firstName: "Sofía",
    lastName: "Simón",
    occupation: "Cuidadora de perros",
    age: 25, 
    description: "La cuidadora de perros.",  
    image: "https://us.123rf.com/450wm/lightwave/lightwave1309/lightwave130902771/22326099-que-pone-mala-cara-joven-rubia-modelo-mirando-a-la-c%C3%A1mara-sobre-fondo-blanco.jpg",
    color: "Blanca",  
  },
  {  
    firstName: "Ronaldo",
    lastName: "Nazario",
    occupation: "Entrenador",
    age: 60, 
    description: "Es el entrenador personal.",  
    image: "https://imagenes.elpais.com/resizer/RAI6IsPnTMKYXdbHosRmVhqvmx8=/1960x1470/filters:focal(1545x705:1555x715)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XEZ66SCU7RCBXLRHO7GZ4NXXJU.jpg",
    color: "Negro"
  }
];

// Rooms Array

const roomsArray = [
  {
    name: "habitación1",
  },
  {
    name: "habitación2",
  },
  {
    name: "habitación3",
  },
  {
    name: "habitación4",
  },
  {
    name: "habitación5",
  },
  {
    name: "habitación6",
  },
  {
    name: "habitación7",
  },
  {
    name: "habitación8",
  },
  {
    name: "habitación9",
  },
  {
    name: "habitación10",
  },
  {
    name: "habitación11",
  },
  {
    name: "habitación12",
  },
  {
    name: "habitación13",
  },
  {
    name: "habitación14",
  },
  {
    name: "habitación15",
  }
];

// Weapons Array

const weaponsArray = [
  {
    name: "pistola",
    weight: 1, 
  },
  {
    name: "metralleta",
    weight: 2, 
  },
  {
    name: "cuchillo",
    weight: 1, 
  },
  {
    name: "bastón",
    weight: 1,  
  },
  {
    name: "lanza granadas",
    weight: 4,  
  },
  {
    name: "picador de hielo",
    weight: 1,  
  },
  {
    name: "pala",
    weight: 4,  
  },
  {
    name: "pistola de agua",
    weight: 1,  
  },
  {
    name: "veneno",
    weight: 1,  
  }
];


// ITERATION 2

function selectRandom(elements) {
  const random = Math.floor(Math.random() * elements.length);
  return elements[random];
}


function pickMystery() {
  return {
     suspect: selectRandom(suspectsArray),
     weapon: selectRandom(weaponsArray),
     room: selectRandom(roomsArray)
  }
}


// ITERATION 3

function revealMystery(sobre) {
  return `${sobre.suspect.firstName} ${sobre.suspect.lastName} ` + 
  `killed Mr. Boddy using the ${sobre.weapon.name} in the ${sobre.room.name}!`;
}
