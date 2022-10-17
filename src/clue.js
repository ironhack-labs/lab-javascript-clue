// ITERATION 1

// Suspects Array

const suspectsArray = [{
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Interprete',
        age: 25,
        description: 'Persona dedicada al trabajo',
        image: 'Buena presentación',
        color: 'Negro'
    },
    {
        firstName: 'Melissa',
        lastName: 'Povoloska',
        occupation: 'Abogada',
        age: 32,
        description: 'Persona profesional dedicada a su trabajo',
        image: 'buena presentacion',
        color: 'Blanco'
    },
    {
        firstName: 'Roberto',
        lastName: 'García',
        occupation: 'Medico',
        age: 27,
        description: 'Persona con experiancia en lo que realiza',
        image: 'Presentable y formal',
        color: 'Azul'
    },
    {
        firstName: 'Veronica',
        lastName: 'Ramirez',
        occupation: 'Policia',
        age: 39,
        description: 'Persona con pensamiento particulares',
        image: 'Buena',
        color: 'Morado'
    },
    {
        firstName: 'Juan',
        lastName: 'Perez',
        occupation: 'Vendedor',
        age: 35,
        description: 'Persona con ventas bajas en su trabajo',
        image: 'Buena',
        color: 'Verde'
    },
    {
        firstName: 'Rodrigo',
        lastName: 'Rebollo',
        occupation: 'Fisico',
        age: 40,
        description: 'Persona dedicada a su trabajo',
        image: 'Buena imagen',
        color: 'Gris'
    }
];

// Rooms Array

const roomsArray = [
    {
        name: 'Visitas'
    },
    {
        name: 'Entrenamiento'
    },
    {
        name: 'Descanso'
    },
    {
        name: 'Oficina'
    },
    {
        name: 'Musica'
    },
    {
        name: 'Biblioteca'
    },
    {
        name: 'Cocina'
    },
    {
        name: 'Baño'
    },
    {
        name: 'Masajes'
    },
    {
        name: 'Lavado'
    },
    {
        name: 'Dormitorio'
    },
    {
        name: 'Servicio'
    },
    {
        name: 'Sotano'
    },
    {
        name: 'Garage'
    },
    {
        name: 'Comedor'
    },
];

// Weapons Array

const weaponsArray = [
    {
        name: 'Thunder 380',
        weight: 95
    },
    {
        name: 'Thunder 380 Plus',
        weight: 95
    },
    {
        name: 'Glock 17',
        weight: 115
    },
    {
        name: 'Berretta PX4',
        weight: 115
    },
    {
        name: 'Taurus 82s',
        weight: 995
    },
    {
        name: 'Smith M642',
        weight: 425
    },
    {
        name: 'Colt 1911',
        weight: 950
    },
    {
        name: 'Marlin 60',
        weight: 1000
    },
    {
        name: 'Lanza llamas',
        weight: 1000
    }
];


// ITERATION 2

function selectRandom(elArrego = []) {
    if(elArrego.length == 0){
        return undefined
    }else {
        let numRandom = Math.floor(Math.random()*elArrego.length);
        return elArrego[numRandom];
    }
}

function pickMystery(theSuspect=[], theWeapon=[], theRoom=[]) {
    const miObjeto = {};
    miObjeto.suspect = selectRandom(theSuspect);
    miObjeto.weapon = selectRandom(theWeapon);
    miObjeto.room = selectRandom(theRoom);
    return miObjeto;
}
// ITERATION 3

function revealMystery() {
    const asesino = pickMystery(suspectsArray, weaponsArray, roomsArray)
    return `${asesino.suspect.firstName} ${asesino.suspect.lastName} killed Mr. Boddy using the ${asesino.weapon.name} in the ${asesino.room.name}!`
}