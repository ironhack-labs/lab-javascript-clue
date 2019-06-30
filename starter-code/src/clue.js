
// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];

function Characters(first_name, last_name, color, description, age, image, occupation) {
    this.first_name = first_name;
    this.last_name= last_name;
    this.color = color;
    this.description = description;
    this.age = age;
    this.image = image;
    this.occupation = occupation;
}

function Rooms(name) {
    this.name = name;
}

function Weapons(name, weight) {
    this.name = name;
    this.weight = weight;
}

charactersArray.push(new Characters("Jacob", "Green", "green", "He has a lot of connections", 45, "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur"));

charactersArray.push(new Characters("Doctor", "Orchid", "white", "PhD in plant toxicology. Adopted daughter of Mr. Boddy", 26, "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "Scientist"));

charactersArray.push(new Characters("Victor", "Plum", "purple", "Billionare video game designer", 22, "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg","Designer"));

charactersArray.push(new Characters("Kasandra", "Scarlet", "red","She is an A-list movie star with a dark past", 31, "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", "Actor"));

charactersArray.push(new Characters( "Eleanor", "Peacock", "blue", "She is from a wealthy family and uses her status and money to earn popularity", 36, "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "Socialité"));

charactersArray.push(new Characters("Jack", "Mustard", "yellow", "He is a former football player who tries to get by on his former glory", 62, "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", "Retired Football player"));

roomsArray.push(new Rooms("Dinning Room"));
roomsArray.push(new Rooms("Conservatory"));
roomsArray.push(new Rooms("Kitchen"));
roomsArray.push(new Rooms("Study"));
roomsArray.push(new Rooms("Library"));
roomsArray.push(new Rooms("Billiard Room"));
roomsArray.push(new Rooms("Lounge"));
roomsArray.push(new Rooms("Ballroom"));
roomsArray.push(new Rooms("Hall"));
roomsArray.push(new Rooms("Spa"));
roomsArray.push(new Rooms("Living Room"));
roomsArray.push(new Rooms("Observatory"));
roomsArray.push(new Rooms("Theater"));
roomsArray.push(new Rooms("Guest House"));
roomsArray.push(new Rooms("Patio"));

weaponsArray.push(new Weapons("rope", 10));
weaponsArray.push(new Weapons("knife", 8));
weaponsArray.push(new Weapons("candlestick", 2));
weaponsArray.push(new Weapons("dumbbell", 30));
weaponsArray.push(new Weapons("poison", 2));
weaponsArray.push(new Weapons("axe", 15));
weaponsArray.push(new Weapons("bat", 13));
weaponsArray.push(new Weapons("trophy", 25));
weaponsArray.push(new Weapons("pistol", 20));

function randomSelector(someArray) {
    return someArray[Math.floor(Math.random()*someArray.length)];
}
  

function pickMistery() {
    return [randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray)];
}

var misteryEnvelope = pickMistery();

function revealMistery(misteryEnvelope) {
    return `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`
}

function revealMisteryWeb(theEnvelope){
    document.getElementById("murderer").setAttribute("src", theEnvelope[0].image)
    document.getElementById("name-murderer").innerHTML = theEnvelope[0].first_name
    document.getElementById("weapon").innerHTML = theEnvelope[1].name
    document.getElementById("room").innerHTML = theEnvelope[2].name

    document.getElementById("sentence").innerHTML = `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`
}

window.onload = function() {
    let showOnDoc = revealMisteryWeb(misteryEnvelope);
    document.getElementById("play").addEventListener("click", function(revealMistery) {
        misteryEnvelope = pickMistery();
        revealMisteryWeb(misteryEnvelope);
    } )
}


