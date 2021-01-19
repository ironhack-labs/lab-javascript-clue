
// Suspects Collection
const suspectsArray = ["Kate", "Jim"];

// Rooms Collection
const roomsArray = ["bathroom", "kitchen"];

// Weapons Collection
const weaponsArray = ["TV cable", "pills"];


// ITERATION 1
function selectRandom(arr) {
    if (arr.length === 0) {
        return undefined;
    } return arr[Math.floor(Math.random() * arr.length)];
}

// ITERATION 2

function pickMystery(suspectsArray, roomsArray, weaponsArray) {
    let crime = {
        suspect:"?",
        room:"?",
        weapon:"?"
    };
    crime["suspect"] = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
    crime["room"] = roomsArray[Math.floor(Math.random() * roomsArray.length)];
    crime["weapon"] = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
    return crime;
};

// ITERATION 3
