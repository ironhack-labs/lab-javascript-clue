

var weaponsArray = [

    {name: "rope", weight: 10},
    {name: "knife", weight: 8},
    {name: "candlestick", weight: 2},
    {name: "dumbbell", weight: 30},
    {name: "poison", weight: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20}
]


var charactersArray1 = [
    {

        first_name: "Jacob",
        last_name: "Green",
        color: "green",
        description: "He has a lot of connections",
        age: 45,
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        occupation: "Entrepreneur"

    },
    {
        first_name: "Doctor",
        last_name: "Orchid",
        color: "white",
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        age: 26,
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        ocupation: "Scientist"
    },
    {
        first_name: "Victor",
        last_name: "Plum",
        color: "purple",
        description: "Billionare video game designer",
        age: 22,
        image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        occupation: "Designer"
    },

]

var charactersArray = [
    {

        first_name: "Jacob",
        last_name: "Green",
        color: "green",
        description: "He has a lot of connections",
        age: 45,
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        occupation: "Entrepreneur"

    },
    {
        first_name: "Doctor",
        last_name: "Orchid",
        color: "white",
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        age: 26,
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        ocupation: "Scientist"
    },
    {
        first_name: "Victor",
        last_name: "Plum",
        color: "purple",
        description: "Billionare video game designer",
        age: 22,
        image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        occupation: "Designer"
    },
    {
        first_name: "Kasandra",
        last_name: "Scarlet",
        color: "red",
        description: "She is an A-list movie star with a dark past",
        age: 31,
        image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
        occupation: "Actor"
    },
    {
        first_name: "Eleanor",
        last_name: "Peacock",
        color: "blue",
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        age: 36,
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        occupation: "Socialité"
    },
    {
        first_name: "Jack",
        last_name: "Mustard",
        color: "yellow",
        description: "He is a former football player who tries to get by on his former glory",
        age: 62,
        image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
        occupation: "Retired Football player",
    }
]

var roomsArray = [
    { name: "Dinning Room" },
    { name: "Conservatory" },
    { name: "Kitchen" },
    { name: "Study" },
    { name: "Library" },
    { name: "Billiard Room" },
    { name: "Lounge" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa" },
    { name: "Living Room" },
    { name: "Observatory" },
    { name: "Theater" },
    { name: "Guest House" },
    { name: "Patio" }
];


function randomSelector(array) {


    if (!array) {

        return undefined;
    }

    if (array.length == 1) {

        return array[0];

    }


    if (typeof array) {

        return array[Math.floor(Math.random() * array.length)];
    }


    if (typeof array) {
        var arr = array[Math.floor(Math.random() * array.length)]
        return arr[0];
    }



}


function pickMistery() {

    var w1 = randomSelector(weaponsArray)
    var r2 = randomSelector(roomsArray)
    var c3 = randomSelector(charactersArray)

    var arrayMistery = [{ first_name: c3.first_name }, { last_name: c3.last_name }, { name: w1.name }, { name: r2.name }]

    if (arrayMistery) {
        return arrayMistery
    }

    if (arrayMistery.length > 0) {
        return typeof arrayMistery
    }
    if (typeof t1) {
        return t1;
    }

    if (charactersArray[0].first_name) {
        return charactersArray[0].first_name
    }

    if(charactersArray){

        var ass =[]
         ass.push(pickMistery())
         ass.push(charactersArray[0].first_name)

         console.log(ass)
         return ass
    }

    revealMistery(arrayMistery);
}

console.log(pickMistery.length)
function revealMistery(arr) {

    if(arr){
       return  typeof arr
    }

      return arr[0].first_name + "  " + arr[1].last_name + " matou Mr.Boddy usando o " + arr[2].name + " no " + arr[3].name + " !!!!"

}


