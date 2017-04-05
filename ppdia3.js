var Rope= {weight:100, color:"blue", hurts:10},
Knife= {weight:100, color:"white", hurts:100},
Candlestic= {weight:150, color:"white", hurts:80},
Dumbbell= {weight:150, color:"black", hurts:70},
Poison= {weight:2, color:"green", hurts:100},
Axe= {weight:510, color:"silver", hurts:100},
Bat= {weight:100, color:"black", hurts:10},
Trophy= {weight:100, color:"golden", hurts:50},
Pistol= {weight:200, color:"golden", hurts:100};

var weapons=[Rope, Knife, Candlestic, Dumbbell, Poison, Axe, Bat, Trophy, Pistol];

/*console.log(weapons[2]);*/



var rooms =[

"Dining room",
"Conservatory",
"Kitchen",
"Study",
"Library",
"Billiard room",
"Lounge",
"Ballroom",
"Hall",
"A spa",
"Living room",
"Observatory",
"Theater",
"Guest house",
"A patio",
]


var suspect1= {firstName:"Jacob", lastName:"Green", occupation:"Service", age:22, description:"top guy", color:"green"},
suspect2={firstName:"Doctor", lastName:"orchid", occupation:"Doctor", age:55, description:"very, very fat", color:"white"},
suspect3={firstName:"Victor", lastName:"Plum", occupation:"Video game designer", age:28, description:"vary very fucker", color:"purple"},
suspect4={firstName:"Kasandra", lastName:"Scarlet", occupation:"Movie star", age:26, description:"she is pretty", color:"red"},
suspect5={firstName:"Eleanor", lastName:"Peacock", occupation:"family rich", age:80, description:"very ugly", color:"blue"},
suspect6={firstName:"Jack", lastName:"Mustard", occupation:"Mister", age:"54", description:"former glory", color:"yellow"}

var suspects= [suspect1, suspect2, suspect3, suspect4, suspect5, suspect6];

/*console.log(suspects[2]);*/

/*var addRandom = function(arrayArmas, arrayRooms, arraySuspects){
  var totalArmas= arrayArmas.length,
  totalRooms= arrayRooms.length,
  totalSuspects= arraySuspects.length;

  var randomTotalArmas= arrayArmas[Math.floor(Math.random() * totalArmas)],
  randomTotalRooms=arrayRooms[Math.floor(Math.random() * totalRooms)],
  randomSuspects=arraySuspects[Math.floor(Math.random() * totalSuspects)];

    return randomSuspects
}*/


  var carta= {
    cartas:[weapons, rooms, suspects],
    addRandom: function(arrayArmas, arrayRooms, arraySuspects){
      var totalArmas= arrayArmas.length,
      totalRooms= arrayRooms.length,
      totalSuspects= arraySuspects.length;

      var randomTotalArmas= arrayArmas[Math.floor(Math.random() * totalArmas)],
      randomTotalRooms=arrayRooms[Math.floor(Math.random() * totalRooms)],
      randomSuspects=arraySuspects[Math.floor(Math.random() * totalSuspects)];

      var randomEnvelope = {
        suspect: randomSuspects,
        arma: randomTotalArmas,
        room: randomTotalRooms
      }

    return randomEnvelope
  }
}
  console.log(carta.addRandom(weapons,rooms,suspects));
