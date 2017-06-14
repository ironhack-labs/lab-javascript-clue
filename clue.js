var clue = {
     suspects: [
        { name: 'Jacob', 
          lastName: 'Green', 
          occupation: 'consultant', 
          age: 23,
          description: 'green'
        },
        { name: 'Doctor', 
        lastName: 'Orchid', 
        occupation: 'doctor',
        age: 2, 
        description: 'white' },
        { name: 'Victor', 
        lastName: 'Plum', 
        occupation: 'game designer' ,
        age: 23, 
        description: 'purple'},
        { name: 'Kasandra', 
        lastName: 'Scarlet', 
        occupation: 'movie star', 
        age: 90, 
        description: 'red'},
        { name: 'Eleanor',
        lastName: 'Peacock', occupation: 'unemployed',
        age: 12, 
        description: 'blue'},
        { name: 'Jack', 
        lastName: 'Mustard',
        occupation: 'football player',
        age: 30, 
        description: 'yellow'}
            ],
          
          
      weapons: [
            { name: 'rope', weigth: 4545, color: 'red' , damage: 32},
            { name: 'knife', weigth: 445, color: 'red' , damage: 32},
            { name: 'candlestick', weigth: 4545, color: 'red' , damage: 32},
            { name: 'dumbbell', weigth: 4545, color: 'red' , damage: 32},
            { name: 'poison', weigth: 4545, color: 'red' , damage: 32},
            { name: 'axe', weigth: 4545, color: 'red' , damage: 32},
            { name: 'bat', weigth: 4545, color: 'red' , damage: 32},
            { name: 'trophy', weigth: 4545, color: 'red' , damage: 32},
            { name: 'pistol', weigth: 4545, color: 'red' , damage: 32},
          ],
      rooms: [
              {name:'dining room'},
              {name:'conservatory'}, 
              {name:'kitchen'}, 
              {name:'Study'}, 
              {name:'library'}, 
              {name:'billiard room'}, 
              {name:'lounge'}, 
              {name:'ballroom'}, 
              {name:'hall'}, 
              {name:'a spa'}, 
              {name:'living room'},
              {name:'observatory'}, 
              {name:'theater'}, 
              {name:'guest house'}, 
              {name:'a patio'}
    ]
     };
     
function getRandomCard(array) {
  var randomIndexNumber = Math.floor(Math.random() * array.length);
  return array[randomIndexNumber];
}



function getMysterySolved(){
  for(var key in clue){
    var property = clue[key];
    console.log(getRandomCard(property).name);
  }
}

getMysterySolved();



