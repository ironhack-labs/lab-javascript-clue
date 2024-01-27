// ITERATION 1

// Suspects Array
const suspectsArray = [
    {
      firstName: "John",
      lastName: "Doe",
      occupation: "Engineer",
      age: 30,
      description: "Tall with brown hair",
      image: "john_doe.jpg",
      color: "Blue",
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      occupation: "Doctor",
      age: 35,
      description: "Short with blond hair",
      image: "alice_smith.jpg",
      color: "Green",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      occupation: "Lawyer",
      age: 40,
      description: "Medium height with black hair",
      image: "bob_johnson.jpg",
      color: "Red",
    },
    {
      firstName: "Eva",
      lastName: "Williams",
      occupation: "Artist",
      age: 28,
      description: "Slim with purple hair",
      image: "eva_williams.jpg",
      color: "Purple",
    },
    {
      firstName: "David",
      lastName: "Brown",
      occupation: "Chef",
      age: 45,
      description: "Stocky with gray hair",
      image: "david_brown.jpg",
      color: "Brown",
    },
    {
      firstName: "Sophie",
      lastName: "Miller",
      occupation: "Scientist",
      age: 32,
      description: "Athletic with blonde hair",
      image: "sophie_miller.jpg",
      color: "Yellow",
    },
  ];
  
  // Rooms Array
  const roomsArray = [
    { name: "Living Room" },
    { name: "Kitchen" },
    { name: "Bedroom" },
    { name: "Study" },
    { name: "Bathroom" },
    { name: "Library" },
    { name: "Dining Room" },
    { name: "Garage" },
    { name: "Office" },
    { name: "Garden" },
    { name: "Basement" },
    { name: "Attic" },
    { name: "Hallway" },
    { name: "Studio" },
    { name: "Patio" },
  ];
  
  // Weapons Array
  const weaponsArray = [
    { name: "Knife", weight: 1.5 },
    { name: "Candlestick", weight: 2.0 },
    { name: "Revolver", weight: 2.5 },
    { name: "Rope", weight: 1.0 },
    { name: "Lead Pipe", weight: 3.0 },
    { name: "Wrench", weight: 1.8 },
    { name: "Poison", weight: 0.5 },
    { name: "Horseshoe", weight: 4.0 },
    { name: "Screwdriver", weight: 0.7 },
  ];
  
  // ITERATION 2
  
  function selectRandom(array) {
    if (array.length == 0) { // In case the array is empty
      return undefined;
    } else if (array.length == 1) { // In case the array has only one element
      return array[0];
    } else { 
      let randomNumber = Math.floor(Math.random() * array.length); // Generate a random value between 0 and the max index of the array
      return array[randomNumber]; // Return the value based on the random index 
    }
  }
  
  function pickMystery() {
      return { // Create a dedicated object based on the random pick
          suspect: selectRandom(suspectsArray),
          room: selectRandom(roomsArray),
          weapon: selectRandom(weaponsArray)
      }
  }
  
  // ITERATION 3
  
  function revealMystery(envelope) { // Return the values selected
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
  }
  
  