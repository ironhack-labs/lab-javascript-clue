var myHouse = [

  characters = [

    { firstName: 'Jacob', lastName: 'Green', job: 'lawyer', age:'30', color: 'green', descripton: 'He has a lot of connections and is always willing to help people out -- for a price.' },

    { firstName: 'Doctor', lastName: 'Orchid', job: 'doctor', age:'40', color: 'white', descripton: 'She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning.' },

    { firstName: 'Victor', lastName: 'Plum', job: 'designer', age:'28', color: 'purple', descripton: 'He is a billionaire video game designer who is embracing his new popularity' },

    { firstName: 'Kasandra', lastName: 'Scarlet', job: 'movie star', age:'30', color: 'red', descripton: 'She is an A-list movie star whose past haunts her.' },

    { firstName: 'Eleanor', lastName: 'Peacock', job: 'rich', age:'55', color: 'blue', descripton: 'She is from a wealthy family and uses her status and money to earn popularity.' },

    { firstName: 'Jack', lastName: 'Mustard', job: 'athlete', age:'45', color: 'yellow', descripton: 'He is a former football player who tries to get by on his former glory.' },

    ],

  weapons = [
    { type:'rope', weight: '1lbs', color: 'white', damage: 'weak' },

    { type:'knife', weight: '1lbs', color: 'metalic' , damage: 'fatal' },

    { type:'candlestick', weight: '2lbs', color: 'gold', damage: 'weak' },

    { type:'dumbbell', weight: '50lbs', color: 'metalic', damage: 'strong' },

    { type:'poison', weight: '.1lb',  color: 'clear', damage: 'fatal' },

    { type:'axe', weight: '5lbs', color: 'brown', damage: 'fatal' },

    { type:'bat', weight: '2lbs', color:'black', damage: 'strong' },

    { type:'trophy', weight:'1lbs', color: 'gold', damage: 'weak' },

    { type:'pistol', weight: '4lbs', color: 'black', damage: 'fatal' },

    ],

    rooms = [
      { location: "Dinning Room"},
      { location: "Conservatory"},
      { location: "Kitchen"},
      { location: "Study"},
      { location: "Library"},
      { location: "Billiard"},
      { location: "Lounge"},
      { location: "Ballroom"},
      { location: "Hall"},
      { location: "A spa"},
      { location: "Living Room"},
      { location: "Observatory"},
      { location: "Theater"},
      { location: "Guest House"},
      { location: "A Patio"}
      ],
    ];

var envelope=[];
 function pick_mistery() {

    for(i = 0; i < myHouse.length; i++){

      var newArray = stackSelector(myHouse[i]);

  envelope.push(newArray);
  }
 }

  function stackSelector(array){
    var rand = array[Math.floor(Math.random() * array.length)];
   return rand;
}

function reveal_envelope()
{
pick_mistery();
console.log(envelope);
}

reveal_envelope();
