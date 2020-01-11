// ITERATION 1
function selectRandom(arr) {
  if (arr.length < 0) {
    return arr[0];
  } else {
    return arr[Math.floor(arr.length * Math.random())];
  }
}

function pickMystery() {
  const obj = {
    suspect: [
      {
        firstName: "aa",
        lastName: "abc",
        ocupation: "student"
      },
      {
        firstName: "ab",
        lastName: "abc2",
        ocupation: "doctor"
      },
      {
        firstName: "ac",
        lastName: "abc3",
        ocupation: "web developer"
      }
    ],
    weapon: [
      {
        name: "rock"
      },
      {
        name: "bate"
      },
      {
        name: "pistol"
      }
    ],
    room: [
      {
        name: "bathroom"
      },
      {
        name: "bedroom"
      },
      {
        name: "living"
      }
    ]
  };
  return obj;
}

// Suspects Collection
const suspectsArray = [pickMystery().suspect];

// Rooms Collection
const roomsArray = [pickMystery().room];

// Weapons Collection
const weaponsArray = [pickMystery().weapon];

// ITERATION 2
function revealMystery(pickMystery) {
  let firstName = pickMystery.suspect.firstName;
  let lastName = pickMystery.suspect.lastName;
  let weapon = pickMystery.weapon.name;
  let room = pickMystery.room.name;

  let mystery = `${firstName} ${lastName} killed Mr. Boddy using the ${weapon} in the ${room}!`;
  return mystery;
}
// ITERATION 3
revealMystery(pickMystery());
