// ITERATION 1

// Suspects Collection
const suspectsArray = [
    mrGreen= {
    first: `Jacob` ,
    last:`Green`,
    occupation: `Entrepreneur`,
    age: 45 ,
    description: `He has a lot of connections`,
    image: `https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg` ,
    color: `green` 
    },
    
    drOrchid= {
    first: `Doctor` ,
    last:`Orchid`,
    occupation: `Scientist`,
    age: 26,
    description: `PhD in plant toxicology. Adopted daughter of Mr. Boddy`,
    image: `http://www.radiotimes.com/uploads/images/Original/111967.jpg`,
    color: `white`
    },
    
    profPlum= {
    first: `Victor`,
    last:`Plum`,
    occupation: `Designer`,
    age: 22,
    description: `Billionaire video game designer`,
    image: `https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg` ,
    color: `purple`
    },
    
    missScarlet= {
    first: `Kasandra`,
    last: `Scarlet`,
    occupation: `Actor`,
    age: 31,
    description: `She is an A-list movie star with a dark past`,
    image: `https://www.radiotimes.com/uploads/images/Original/111967.jpg`,
    color: `red`
    },
    
    mrsPeacock= {
    first: `Eleanor`,
    last: `Peacock`,
    occupation: `Socialité`,
    age: 36,
    description: `She is from a wealthy family and uses her status and money to earn popularity`,
    image: `https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg`,
    color: `blue`
    },
    
    mrMustard= { 
    first: `Jack`,
    last: `Mustard`,
    occupation: `Retired Football player`,
    age: 62,
    description: `He is a former football player who tries to get by on his former glory`,
    image: `https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg`,
    color: `yellow`,
    },
];

// Rooms Collection
const roomsArray = [
    " Dining Room",
    " Conservatory",
    " Kitchen",
    " Study",
    " Library",
    " Billiard Room",
    " Lounge",
    " Ballroom",
    " Hall",
    " Spa",
    " Living Room",
    " Observatory",
    " Theater",
    " Guest House",
    " Patio"

];

// Weapons Collection
const weaponsArray = [

 {name:`rope`,
  weight:10
},

{name:`knife`,
 weight: 8
},

{name:`candlestlick`,
weight: 2

},
{ name:`dumbbell`, 
weight:30 },
{ 
    name: `poison`,
    weight: 2
}, 

{ 
    name: `axe`,
    weight: 15
},

{ name: `bat`,
weight:13}
,
{ name: `trophy`,
weight:25
},
{
    name:`pistol`,
    weight: 20
}


]; 


// ITERATION 2

function selectRandom (inputArray) { 
    return inputArray[Math.floor(Math.random()*inputArray.length)]
};


function pickMystery (){
    return { 
        suspect:selectRandom(suspectsArray),
        weapon:selectRandom(weaponsArray),
        room:selectRandom(roomsArray) , 
    
    }
}
    
// ITERATION 3
const pickedMystery = pickMystery();


function revealMystery (envelope){
   return{
    envelope:`${pickedMystery.suspect.first} ${pickedMystery.suspect.last} killed Mr. Boddy using ${pickedMystery.weapon.name} in the ${pickedMystery.room}`
   
}
}


