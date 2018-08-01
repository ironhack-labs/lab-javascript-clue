// Characters

var mrGreen={
    first_name:   'Jacob',
    last_name:    'Green',
    color:        'green',
    description:  'He has a lot of connections',
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   'Entrepreneur',
    }
    
    
    var drOrchid={
    first_name:   'Doctor',
    last_name:    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          26,
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation:   'Scientist'
    }
    
    
    var profPlum={
    first_name:   'Victor',
    last_name:    'Plum',
    color:        'purple',
    description:  'Billionare video game designer',
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   'Designer',
    }
    
    
    var missScarlet={
        first_name:   'Kasandra',
        last_name:    'Scarlet',
        color:        'red',
        description:  'She is an A-list movie star with a dark past',
        age:          31,
        image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
        occupation:   'Actor'
    }
    
    
    var mrsPeacock ={
    first_name:   'Eleanor',
    last_name:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          36,
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité'
    }
    /*
    
    mrMustard
    first_name:   Jack
    last_name:    Mustard
    color:        yellow
    description:  He is a former football player who tries to get by on his former glory
    age:          62
    image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
    occupation:   Retired Football player
    */
    // Weapons
    var rope={
        name: 'rope' ,   
        weight: 10
    }
    var knife={
        name:'knife',
        weight: 8
    }
    /*name: candlestick ---   weight: 2
    name: dumbbell    ---   weight: 30
    name: poison      ---   weight: 2
    name: axe         ---   weight: 15
    name: bat         ---   weight: 13
    name: trophy      ---   weight: 25
    name: pistol      ---   weight: 20
    */
    // Rooms
    var dinningRoom = {
        name: "DinningRoom",}
     var conservatory = {
        name: "Conservatory",
        
     }
     var kitchen = {
        name: "Kitchen",
        
     }
     var study = {
        name: "Study",
        
     }
     var library = {
        name: "Library",
        
     }
     var billiardRoom = {
        name: "Billiard Room",
        
     }
     var lounge = {
        name: "Lounge",
        
     }
     var ballroom = {
        name: "Ballroom",
        
     }
    
  
    // Characters Collection
    var charactersArray = [];
    charactersArray.push(mrGreen,drOrchid,profPlum,missScarlet);
    //console.log(charactersArray);
    // Rooms' Collection
    var roomsArray = [];
    roomsArray.push(dinningRoom,conservatory,kitchen);
    // Weapons Collection
    var weaponsArray = [];
    weaponsArray.push(rope,knife);

    function randomSelector(arr){
        var randomIndex=Math.floor(Math.random()*arr.length)
       var randomthing=arr[randomIndex];
       arr.splice(randomIndex);
      return randomthing;
    }
      var result=[];
    function picMistery(){
      
      result.push(randomSelector(charactersArray),randomSelector(weaponsArray),randomSelector(roomsArray));
      console.log(result[0].first_name);
    }
    function revealMistery(){
      picMistery();
     console.log('the murderer is '+result[0].first_name+' ' +result[0].last_name +', the weapon is '+result[1].name+ ', the crime scene is '+result[2].name); 
    }
    revealMistery();