var charactersArray = [
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

weaponsArray = [
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

roomsArray = [
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

/* var assassins = Object.keys(charactersArray);
 */

function randomSelector(array){
    if (array.length == 0) {
        return;
    }
    random = Math.floor(Math.random() * (array.length));
    return array[random];
};

function pickMistery(){
  killer = randomSelector(charactersArray);
  weapon = randomSelector(weaponsArray);
  room = randomSelector(roomsArray);
  misteryEnvelope = [killer, weapon, room];
  return misteryEnvelope;
};

function revealMistery(misteryEnvelope){
    killer = misteryEnvelope[0];
    weapon = misteryEnvelope[1];
    place = misteryEnvelope[2];

    // for (i=0; i<charactersArray.length; i++){
    //     if (weaponsArray[i].name === weapon) {
    //         var firstName = charactersArray[i].first_name;
    //         var lastname = charactersArray[i].last_name;
    //     }
    // }

    // for (i=0; i<charactersArray.length; i++){
    //     if (roomsArray[i].name === room) {
    //         var firstName = charactersArray[i].first_name;
    //         var lastname = charactersArray[i].last_name;
    //     }
    // }

    return killer.first_name +" "+killer.last_name+" killed Mr.Boddy using the "+weapon.name+ " in the "+place.name+"!!!!";

}