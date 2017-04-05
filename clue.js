var charactersDeck = [
    { 
      name: "Jacob", 
      surname:"Green", 
      color:'green', 
      age:30, 
      occupation:'reverend', 
      description:"He has a lot of connections and is always willing to help people out -- for a price"
    },
    { 
      name: "Dr", 
      surname:"Orchid", 
      color:'white', 
      age:25, 
      occupation:'doctor', 
      description:"She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"
    },
    { 
      name: "Victor", 
      surname:"Plum", 
      color:'purple', 
      age:40, 
      occupation:'video game designer', 
      description:"He is a billionaire video game designer who is embracing his new popularity"
    },
    { 
      name: "Kassandra", 
      surname:"Scarlet", 
      color:'red', 
      age:22, 
      occupation:'actress', 
      description:"She is an A-list movie star whose past haunts her."
    },
    { 
      name: "Eleanor", 
      surname:"Peacock", 
      color:'blue', 
      age:60, 
      occupation:'none', 
      description:"She is from a wealthy family and uses her status and money to earn popularity"
    },    
    { 
      name: "Jack", 
      surname:"Mustard", 
      color:'yellow', 
      age:37, 
      occupation:'football player', 
      description:"He is a former football player who tries to get by on his former glory."
    }        
];

var weaponsDeck = [
    {
        name: "Rope",
        damage: 2,
        weight: 1,
        attacks: ['hang', 'strangle']
    },
    {
        name: "Knife",
        damage: 8,
        weight: 2,
        attacks: ['stab', 'slash']
    },
    {
        name: "Candlestick",
        damage: 5,
        weight: 5,
        attacks: ['bash', 'poke']
    },
    {
        name: "Candlestick",
        damage: 5,
        weight: 5,
        attacks: ['bash', 'poke']
    },
    {
        name: "Dumbell",
        damage: 7,
        weight: 20,
        attacks: ['crash']
    },
   {
        name: "Poison",
        damage: 6,
        weight: 0.1,
        attacks: ['spray', 'poison drink']
    },
    {
        name: "Axe",
        damage: 9,
        weight: 4,
        attacks: ['throw', 'slash']
    },        
    {
        name: "Bat",
        damage: 5,
        weight: 3,
        attacks: ['whack', 'bash']
    },  
    {
        name: "Trophy",
        damage: 2,
        weight: 3,
        attacks: ['blind', 'suffocate']
    },  
    {
        name: "Pistol",
        damage: 10,
        weight: 2,
        attacks: ['shoot', 'pistol whip']
    },
];

var roomsDeck = [
    {
        name: "Dining room",
        size: 2
    },
    {
        name: "Conservatory",
        size: 4
    },
    {
        name: "Kitchen",
        size: 4
    },
    {
        name: "Study",
        size: 3
    },
    {
        name:"Library",
        size: 3
    },
    {
        name:"Billiard room",
        size: 6
    },
    {
        name:"Lounge",
        size: 2
    },
    {
        name:"Ballroom",
        size: 7
    },
    {
        name:"Hall",
        size: 5
    },
    {
        name:"A spa",
        size: 3
    },
    {
        name:"Living room",
        size: 7
    },
    {
        name:"Observatory",
        size: 2
    },
    {
        name:"Theater",
        size: 9
    },
    {
        name:"Guest house",
        size: 8
    },
    {
        name:"A patio",
        size: 3
    },
];

function selectFromDeck(deck) {
    return deck[ Math.floor(Math.random() * deck.length) ];
}

function select3Cards(charactersDeck, weaponsDeck, roomsDeck) {
    return {
        character: selectFromDeck(charactersDeck),
        weapon: selectFromDeck(weaponsDeck),
        room: selectFromDeck(roomsDeck)
    }
}

var caseFileConfidential = select3Cards(charactersDeck, weaponsDeck, roomsDeck);

console.log( caseFileConfidential.character.name + " " + caseFileConfidential.character.surname
            + " killed Mr. Body in the "+caseFileConfidential.room.name+" using "+caseFileConfidential.weapon.name);

