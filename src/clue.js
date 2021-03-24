// ITERATION 1

// Suspects Collection
const suspectsArray = [
	{
		firstName: "Jacob",
		lastName: "Green",
		occupation: "Entrepreneur",
		age: 45,
		description: "He has a lot of connections",
		image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
		color: "green",
	},
];

// Rooms Collection
const roomsArray = [
	{
		name: "Dinning Room",
	},
];

// Weapons Collection
const weaponsArray = [
	{
		name: "rope",
		weight: 10,
	},
];

// ITERATION 2
let selectRandom = (array) => {
	let randomOutput = {};
	return randomOutput;
};

//done
let pickMystery = () => {
	let suspectSelected = selectRandom(suspectsArray);
	let roomSelected = selectRandom(roomsArray);
	let weaponSelected = selectRandom(weaponsArray);

	return {
		suspect: suspectSelected,
		room: roomSelected,
		weapon: weaponSelected,
	};
};

// ITERATION 3 - done
let revealMystery = (murder) => {
	let output = `${murder.suspect.firstName} ${murder.suspect.lastName} killed Mr. Boddy using the
    ${murder.weapon.name} in the ${murder.room.name}!`;
	return output;
};

//revealMystery(pickMystery());
