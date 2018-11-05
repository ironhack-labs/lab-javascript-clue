//Iteration 1 - Creating the cards

let mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "",
    color: "green",
    description: "He has a lot of connections and is always willing to help people out -- for a price."
    };
    
    let drOrchid = {
    firstName: "Sonia",
    lastName: "Orchid",
    occupation: "doctor",
    color: "white",
    description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning."
    };
    
    let victorPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "video game designer",
    color: "purple",
    description: "He is a billionaire video game designer who is embracing his new popularity."
    };
    let kasandraScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "A-list movie star",
    color: "red",
    description: ""
    };
    let eleonorePeacock = {
    firstName: "Eleonore",
    lastName: "Peackok",
    occupation: "unemployed",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity."
    };
    let jackMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "football player",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory."
    };
    
    let rope = {
    name: "rope",
    weight: 10,
    };
    let knife ={
    name: "knife",
    weight: 8,
    };
    let candlestick = {
    name: "candlestick",
    weight: 2,
    };
    let dumbbell ={
    name: "dumbbell",
    weight: 30,
    };
    let poison = {
    name:"poison",
    weight: 2,
    };
    let axe = {
    name: "axe",
    weight: 15,
    };
    let bat = {
    name: "bat",
    weight: 13,
    };
    let trophy = {
    name: "trophy",
    weight: 25,
    };
    let pistol = {
    name: "pistol",
    weight: 20,
    };
    
    // Characters Collection
    const suspects = [];
    
    suspects.push(mrGreen, drOrchid, victorPlum, kasandraScarlet, eleonorePeacock,jackMustard);
    
    // Rooms' Collection
    const rooms =['Dinning Room', 'Conservatory','Kitchen','Study','Library','Billiard Room','Lounge','Ballroom',
    'Hall', 'Spa', 'Living Room',
    'Observatory','Theater','Guest House','Patio']
    
    // Weapons Collection
    const weapons = [];
    
    weapons.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);
    
    //Iteration 2 - Creating and revealing the mystery
    
    //1. Random Selector
    function randomSelector(array){
      return Math.floor(Math.random()* array.length)
    }
    
    
    // 2. Create the mistery
    
    var misteryEnvelope = [];
    function pickMistery(){
      misteryEnvelope.push(suspects[randomSelector(suspects)],weapons[randomSelector(weapons)], rooms[randomSelector(rooms)] )
      return misteryEnvelope;
    }
    
    pickMistery();

    
    function revealMistery(someMistery){
      return `${someMistery[0].firstName} ${someMistery[0].lastName} killed Mr.Body using the ${someMistery[1].name} in the ${someMistery[2]}`
    }
    revealMistery(misteryEnvelope)
    
    
