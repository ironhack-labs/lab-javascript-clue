// ITERATION 1
const selectRandom = (arr) => {
    if(arr.length <= 0) return undefined;
    return arr[Math.floor(Math.random() * arr.length)];
}

// Suspects Collection
const suspectsArray = ["Colonel Moutarde", "Madame Pervenche", "Mademoiselle Rose", "Professeur Violet", "Docteur Orchidée", "Monsieur Olive"];

// Rooms Collection
const weaponsArray = ["corde", "poignard", "barre de fer", "revolver", "chandelier", "clé anglaise"];

// Weapons Collection
const roomsArray = ["Cuisine", "Salle de réception", "Jardin d'hiver", "Salle de billard", "Bibliothèque", "Bureau", "Entrée", "Salon", "Salle à manger"];

// ITERATION 2
const pickMystery = () => {
    return {suspect: selectRandom(suspectsArray), weapon: selectRandom(weaponsArray), room: selectRandom(roomsArray)};
}

// ITERATION 3
const revealMystery = (obj) => `${obj.suspect.firstName} ${obj.suspect.lastName} killed Mr. Boddy using the ${obj.weapon.name} in the ${obj.room.name}!`;