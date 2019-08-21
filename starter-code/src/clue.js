// Characters


let mrGreen={
first_name:"Jacob",
last_name:"Green",
color:"green",
description: " He has a lot of connections",
age:45,
image:"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:"Entrepreneur"
}
let drOrchid={
first_name:"Doctor",
last_name:"Orchid",
color:"white",
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:26,
image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg",
occupation:"Scientist"
}
let profPlum={
first_name:"Victor",
last_name:"Plum",
color:"purple",
description:"Billionaire video game designer",
age:22,
image:"https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:"Designer"
}
let missScarlet={
first_name:"Kasandra",
last_name:"Scarlet",
color:"red",
description:"She is an A-list movie star with a dark past",
age:31,
image:"https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:"Actor"
}
let mrsPeacock ={
first_name:"Eleanor",
last_name:"Peacock",
color:"blue",
description:"She is from a wealthy family and uses her status and money to earn popularity",
age:36,
image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:"Socialité"
}
let mrMustard ={
first_name:"Jack",
last_name:"Mustard",
color:"yellow",
description:"He is a former football player who tries to get by on his former glory",
age:62,
image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:"Retired Football player"
}
// Weapons

const rope ={
    weight:10
}
const knife={
    weight:8
}
const candlestick={
    weight:2
}
const dumbbell={
    weight:30
}
const poison={
    weight:2
}
const axe={
    weight:15
}
const bat={
    weight:13
}
const trophy={
    weight:25
}
const pistol={
    weight:20
}


// Characters Collection
const charactersArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];

// Rooms Collection
const roomsArray = ["Dining Room","Conservatory","Kitchen","Study","Library","Billiard Room","Lounge","Ballroom","Hall","Spa","Living Room","Observatory", "Theater","Guest House","Patio"];

// Weapons Collection
const weaponsArray = [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];

function randomSelector(arr){
    var rand = arr[Math.floor(Math.random() * arr.length)];
    return rand;
    }
  function pickMystery(){
     let obj={
         suspect:randomSelector(charactersArray),
         weapon: randomSelector(weaponsArray),
         room:randomSelector(roomsArray)

     }
    // console.log(obj)
     return obj;
 }   
 let mysteryEnvelope = pickMystery();
 
 function revealMystery(o){
     // console.log(o)
        return (o.suspect.first_name+" " +o.suspect.last_name +" killed Mr. Boddy using the "+o.weapon.name+" in the "+o.room.name+"!!!!");
 }

 revealMystery(mysteryEnvelope);
