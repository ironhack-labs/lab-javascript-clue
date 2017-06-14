var suspects = [
  {name:"mrGreen",color:"Green", description:"He has a lot of connections and is always willing to help people out -- for a price."},
  {name:"doctorOrchid",color:"white", description:"She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning "},
  {name:"victorPlum",color:"purple", description:"He is a billionaire video game designer who is embracing his new popularity."},
  {name:"kasandraScarlet",color:"red", description:"She is an A-list movie star whose past haunts her."},
  {name:"eleanorPeacock",color:"blue", description:"She is from a wealthy family and uses her status and money to earn popularity."},
  {name:"jackMustard",color:"yellow", description:"He is a former football player who tries to get by on his former glory."}
  ];

var weapons = [
  {name: "rope",
    weight:1,  //kg
    color:"brown",  // color-material
    painLevel:30  // 0-100
  },
 {name: "knife",
    weight:0.5,
    color:"silver",
    painLevel:60
  },
  {name: "candlestick",
    weight:1,
    color:"yellow",
    painLevel:40
  },
 {name: "dumbbell",
    weight:0.5,
    color:"black",
    painLevel:40
  },
 {name: "poison",
    weight:0.2,
    color:"blue",
    painLevel:10
    },
  {name: "axe",
    weight:2,
    color:"silver",
    painLevel:70
  },
 {name: "bat",
    weight:1,
    color:"wood",
    painLevel:80
  },
 {name: "trophy",
    weight:2,
    color:"golden",
    painLevel:60
  },
  {name: "pistol",
    weight:0.7,
    color:"iron",
    painLevel:80
  }
  ]
var rooms = [
  {room:"Dining room"},
  {room:"Conservatory"},
  {room:"Kitchen"},
  {room:"Study"},
  {room:"Library"},
  {room:"Billiard room"},
  {room:"Lounge"},
  {room:"Ballroom"},
  {room:"Hall"},
  {room:"A spa"},
  {room:"Living room"},
  {room:"Observatory"},
  {room:"Theatre"},
  {room:"Guest House"},
  {room:"A patio"}
  ]
  
  var randomObject = function(card){
    var random = Math.floor(Math.random()*card.length);
    return card[random] ;
  } 
  var virtualEnvelope= {
    randomSuspect: randomObject(suspects),
    randomWeapon: randomObject(weapons),
    randomRoom: randomObject(rooms)
  }
console.log(virtualEnvelope);


