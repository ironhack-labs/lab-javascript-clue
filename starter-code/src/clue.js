// Characters
var suspectsArray = [
    {
    name_card:    "mrGreen", 
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
    },
    {
    name_card:    "drOrchid",  
    frst_name:   "Doctor",
    lst_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist",
    },
    {
    name_card:     "profPlum",
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer",
    },
    {
    name_card:    "missScarlet",
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor",
    },
    {
    name_card:    "mrsPeacock",
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité",
    },
    {
    name_card:    "mrMustard",
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player",
    }]
    
    var weaponsArray = [
    {name: "rope"        ,weight: 10},
    {name: "knife"       ,weight: 8},
    {name: "candlestick" ,weight: 2},
    {name: "dumbbell"    ,weight: 30},
    {name: "poison"      ,weight: 2},
    {name: "axe"         ,weight: 15},
    {name: "bat"         ,weight: 13},
    {name: "trophy"      ,weight: 25},
    {name: "pistol"      ,weight: 20}
    ]
    
    var roomsArray = [
    {name: "Dinning Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living Room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"}
    ]
    
    /* console.log (Object.keys(suspectsArray));
     */
    
    function randomSelector(array){ // descartamos el caso de que no haya nada en el objeto array que le pasemos a la función
        if (array.length == 0) {
            return;
        }/* creamos un numero random y lo multiplicamos
         por la longitud del objeto que le pasemos a la función*/
        random = Math.floor(Math.random() * (array.length)); 
        return array[random];
    };
    
    function pickMistery(){ // reutilizamos la funcion creada y le pasamos los objetos que hemos creado en la primera iteración
      killer = randomSelector(charactersArray);
      weapon = randomSelector(weaponsArray);
      room = randomSelector(roomsArray);
      misteryEnvelope = [killer, weapon, room];
      return misteryEnvelope;
    };
    
    function revealMistery(misteryEnvelope){
        killer = misteryEnvelope[0];
        weapon = misteryEnvelope[1];
        place = misteryEnvelope[2]; // aqui simplemente lo he dejado así, me ha faltado tiempo para verificar, intentare sacar tiempo y mejorar el script
    
        return killer.first_name +" "+killer.last_name+" killed Mr.Boddy using the "+weapon.name+ " in the "+place.name+"!!!!";
    
    } 